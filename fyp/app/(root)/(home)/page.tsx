import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTopSchools } from "@/data-access/school-data";
import SchoolCard from "./components/school-card";
import { School } from "@/generated/prisma";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  let featuredSchools: School[] = [];

  try {
    featuredSchools = await getTopSchools();
  } catch (err) {
    console.error("❌ Failed to load schools", err);
  }
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-open leading-tight">
              Find the perfect school for your educational journey
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 font-lato">
              Discover and compare schools across the nation with detailed
              information, reviews, and insights.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 opacity-10 w-1/2 h-full"
          aria-hidden="true"
        />
      </section>

      {/* Top Schools Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-textColor font-open">
              Top Schools
            </h2>
            <Link
              href="/discover"
              className="text-primary hover:text-primary-dark/90 font-semibold flex items-center transition-colors duration-200"
            >
              View All <span className="ml-1">→</span>
            </Link>
          </div>

          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredSchools.length > 0 ? (
                featuredSchools.map((school) => (
                  <SchoolCard key={school.id} school={school} />
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-gray-500">
                    {searchParams.query
                      ? "No schools match your search criteria"
                      : "No schools found"}
                  </p>
                </div>
              )}
            </div>
          }
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-open mb-4">
            Find the Perfect School for Your Educational Journey
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of families who have discovered their ideal
            educational match using SchoolRave.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sign-up">Create an Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
