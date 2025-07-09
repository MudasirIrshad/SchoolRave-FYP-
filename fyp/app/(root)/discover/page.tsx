import SchoolCard from "@/app/(root)/(home)/components/school-card";
import { Card, CardContent } from "@/components/ui/card";
import { getSchoolsData } from "@/data-access/school-data";
import SearchBar from "../(home)/components/search-bar";
import { SchoolType, CurriculumType } from "@/generated/prisma";
export const dynamic = "force-dynamic";

interface DiscoverPageProps {
  searchParams: {
    query?: string;
    city?: string;
    schoolType?: SchoolType;
    curriculumType?: CurriculumType;
  };
}

export default async function DiscoverPage({
  searchParams,
}: DiscoverPageProps) {
  const { schools, totalCount } = await getSchoolsData({
    query: searchParams.query,
    city: searchParams.city,
    schoolType: searchParams.schoolType,
    curriculumType: searchParams.curriculumType,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Discover Schools
        </h1>
        <p className="text-muted-foreground">
          Find the perfect school for your needs
        </p>
      </div>

      {/* Filter/Search Card */}
      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Showing {schools.length} of {totalCount} schools
          </p>
          {(searchParams.query ||
            searchParams.city ||
            searchParams.schoolType ||
            searchParams.curriculumType) && (
            <p className="text-xs text-blue-600">• Filtered results</p>
          )}
        </div>
      </div>
      {/* School Grid */}
      {schools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="text-muted-foreground">
              No schools found matching your criteria
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
