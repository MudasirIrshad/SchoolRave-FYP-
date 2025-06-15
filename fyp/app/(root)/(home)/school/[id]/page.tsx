import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchoolProfile from "./components/tabs/school-profile";
import SchoolDetailHeader from "./components/school-detail-header";
import SchoolDetailSidebar from "./components/school-detail-sidebar";
import SchoolReviews from "./components/tabs/school-reviews";
import { SchoolBranches } from "./components/tabs/school-branches";
import { getSchoolDetailData } from "@/data-access/school-data";
import { auth } from "@clerk/nextjs/server";
import SchoolPosts from "./components/tabs/school-posts";
export const dynamic = "force-dynamic";

interface PageParams {
  params: {
    id?: string;
  };
}

export default async function SchoolDetailPage({ params }: PageParams) {
  const schoolId = params.id;
  if (!schoolId) return notFound();

  const { userId } = await auth();

  if (!userId) redirect("/");

  const { school, ratingAvg, isFavorited } = await getSchoolDetailData(
    schoolId,
    userId
  );

  if (!school) return notFound();

  // console.log("DANGER: ",school)
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchoolDetailHeader school={school} ratingAvg={ratingAvg._avg.rating} />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={
                    school.imageUrl ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={school.name || "School Image"}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                  priority
                />
              </div>

              <Tabs defaultValue="overview" className="mb-8">
                <TabsList
                  className={`grid w-full ${
                    school.schoolBranch.length > 0
                      ? "grid-cols-4"
                      : "grid-cols-3"
                  }`}
                >
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  {school.schoolBranch.length > 0 && (
                    <TabsTrigger value="branches">Branches</TabsTrigger>
                  )}
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <SchoolProfile school={school} />
                </TabsContent>

                {school.schoolBranch.length > 0 && (
                  <TabsContent value="branches" className="pt-6">
                    <SchoolBranches branches={school.schoolBranch} />
                  </TabsContent>
                )}

                <TabsContent value="posts" className="pt-6">
                  <SchoolPosts schoolId={school.id} />
                </TabsContent>
                <TabsContent value="reviews" className="pt-6">
                  <SchoolReviews schoolId={school.id} />
                </TabsContent>
              </Tabs>
            </div>

            <SchoolDetailSidebar school={school} isFavorited={isFavorited} />
          </div>
        </div>
      </section>
    </div>
  );
}
