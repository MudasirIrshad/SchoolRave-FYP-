import { MapPin, Star } from "lucide-react";
import { School } from "@/generated/prisma";

export default function SchoolDetailHeader({
  school,
  ratingAvg,
}: {
  school: School;
  ratingAvg: number | null;
}) {
  const avgRating = ratingAvg || 0;
  const starCount = Math.round(avgRating); // Round to nearest whole number

  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* School Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl md:text-3xl text-gray-900">
                {school.name}
              </h1>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
                {school.school_type || ""}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{school?.address || ""}</span>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {/* Average Rating Number */}
              <div className="flex flex-col items-center mx-4">
                <div className="bg-primary text-white text-2xl font-bold h-14 w-14 flex items-center justify-center rounded-lg">
                  {avgRating.toFixed(1)}
                </div>
                <span className="text-xs text-gray-500 mt-1">Rating</span>
              </div>

              {/* Stars below the rating */}
              <div className="flex mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < starCount
                          ? "text-primary fill-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
