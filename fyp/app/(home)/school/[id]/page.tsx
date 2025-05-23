import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchoolProfile from "./components/school-profile";
import SchoolDetailHeader from "./components/school-detail-header";
import SchoolDetailSidebar from "./components/school-detail-sidebar";
import SchoolReviews from "./components/school-reviews";
import SchoolActivities from "./components/school-activities";
import { SchoolBranches } from "./components/school-branches";

interface PageParams {
  params: {
    id?: string;
  };
}

export default async function SchoolDetailPage({ params }: PageParams) {
  const schoolId = params.id;
  if (!schoolId) return notFound();

  const school = await prisma.school.findUnique({
    where: { id: schoolId },
    include: { schoolBranch: true },
  });

  if (!school) return notFound();

  const ratingAvg = await prisma.review.aggregate({
    _avg: { rating: true },
    where: { schoolId },
  });

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
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="branches">Branches</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <SchoolProfile school={school} />
                </TabsContent>

                <TabsContent value="activities" className="pt-6">
                  <SchoolActivities school={school} />
                </TabsContent>

                <TabsContent value="branches" className="pt-6">
                  <SchoolBranches branches={school.schoolBranch} />
                </TabsContent>

                <TabsContent value="reviews" className="pt-6">
                  <SchoolReviews entityId={school.id} />
                </TabsContent>
              </Tabs>
            </div>

            <SchoolDetailSidebar school={school} />
          </div>
        </div>
      </section>
    </div>
  );
}
