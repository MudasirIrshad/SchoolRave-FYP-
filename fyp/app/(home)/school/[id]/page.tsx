import SchoolProfile from "./components/school-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import SchoolDetailHeader from "./components/school-detail-header";
import Academics from "./tabs/academics";
import Teachers from "./tabs/teachers";
import Activities from "./tabs/activities";
import SchoolDetailSidebar from "./components/school-detail-sidebar";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reviews from "./tabs/reviews";

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

  const schoolData = await prisma.school.findUnique({
    where: {
      id: schoolId,
    },
  });

  console.log("schoolData: ", schoolData);

  const school = {
    ...schoolData,
    studentCount: 33,
    rating: 4.5,
    gradeRange: "k-12",
    studentTeacherRatio: "10:1",
    collegePlacement: 95,
    facilities: ["Science labs", "Libraries", "Computer labs", "Gymnasiums"],
    galleryImages: [],
  };

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
      <SchoolDetailHeader school={school} />

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

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Enrollment</div>
                  <div className="text-xl font-semibold">
                    {school.studentCount.toLocaleString()} Students
                  </div>
                  <div className="text-sm text-gray-600">
                    {school.gradeRange}
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">
                    Student-Teacher Ratio
                  </div>
                  <div className="text-xl font-semibold">
                    {school.studentTeacherRatio}
                  </div>
                  <div className="text-sm text-gray-600">
                    National Avg: 17:1
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">
                    College Readiness
                  </div>
                  <div className="text-xl font-semibold">
                    {school.collegePlacement
                      ? `${school.collegePlacement}%`
                      : "N/A"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {school.collegePlacement > 95
                      ? "Top 5% Nationally"
                      : school.collegePlacement > 85
                      ? "Top 15% Nationally"
                      : school.collegePlacement > 75
                      ? "Above Average"
                      : "Average"}
                  </div>
                </div>
              </div>

              {/* Tabs Section */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="academics">Academics</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <SchoolProfile school={school} />
                </TabsContent>

                <TabsContent value="academics" className="pt-6">
                  <Academics school={school} />
                </TabsContent>

                <TabsContent value="teachers" className="pt-6">
                  <Teachers school={school} />
                </TabsContent>

                <TabsContent value="activities" className="pt-6">
                  <Activities school={school} />
                </TabsContent>
                <TabsContent value="reviews" className="pt-6">
                  <Reviews school={school} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <SchoolDetailSidebar school={school} />
          </div>
        </div>
      </section>
    </div>
  );
}
