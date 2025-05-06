import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SchoolProfile from "./components/school-profile";
import SchoolDetailHeader from "./components/school-detail-header";
import SchoolDetailSidebar from "./components/school-detail-sidebar";
import Reviews from "./tabs/reviews";
import Activities from "./tabs/activities";
import { MapPin } from "lucide-react";
import { SchoolBranches } from "./components/school-branches";

interface PageParams {
  params: {
    id?: string;
  };
}

export default async function SchoolDetailPage({ params }: PageParams) {
  const schoolId = params.id;

  if (!schoolId) {
    return notFound();
  }

  const school = await prisma.school.findUnique({
    where: {
      id: schoolId,
    },
    include: {
      schoolBranch: true,
    },
  });

  const ratingAvg = await prisma.review.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      schoolId,
    },
  });

  // console.log("schoolData: ", school);

  const hasBranches = school?.schoolBranch && school?.schoolBranch.length > 0;

  if (!school) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">School Not Found</h1>
          <p className="text-gray-600 mb-8">
            The school you&apos;re looking for doesn&apos;t exist or there was
            an error loading the data.
          </p>
          <Link href="/search">
            <Button>Browse All Schools</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* School Header */}
      <SchoolDetailHeader school={school} ratingAvg={ratingAvg._avg.rating} />

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Column */}
            <div className="lg:w-2/3">
              {/* School Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={
                    school.imageUrl ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={school.name || "School Image"}
                  width={600} // Set the desired width
                  height={400} // Set the desired height
                  className="w-full h-80 object-cover"
                  priority
                />
              </div>

              {/* Tabs Section */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <SchoolProfile school={school} />
                </TabsContent>

                <TabsContent value="activities" className="pt-6">
                  <Activities school={school} />
                </TabsContent>
                <TabsContent value="reviews" className="pt-6">
                  <Reviews entity={school} type="school" />
                </TabsContent>
              </Tabs>

              {hasBranches ? (
                <SchoolBranches
                  branches={school.schoolBranch}
                  // reviews={school.reviews || []}
                />
              ) : (
                <>
                  <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">
                      Location & Contact
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium">{school.address}</p>
                          {school.address && (
                            <p className="text-gray-600">{school.address}</p>
                          )}
                        </div>
                      </div>
                      {school.phone && (
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 flex items-center justify-center text-gray-500">
                            <span className="text-sm">📞</span>
                          </div>
                          <p>{school.phone}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <SchoolDetailSidebar school={school} />
          </div>
        </div>
      </section>
    </div>
  );
}
