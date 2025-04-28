import { School } from "@/lib/zod-types/school";
import { MapPin, Star } from "lucide-react";

export default function SchoolDetailHeader({ school }: { school: School }) {
  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-bold text-2xl md:text-3xl text-textColor font-open">
                {school.name}
              </h1>
              <div className="bg-blue-100 text-primary text-sm px-3 py-1 rounded-full font-semibold">
                {school.school_type}
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{school.address}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-primary text-white text-2xl font-bold h-14 w-14 flex items-center justify-center rounded-lg">
              {school.rating >= 4.7
                ? "A+"
                : school.rating >= 4.3
                ? "A"
                : school.rating >= 4.0
                ? "A-"
                : "B+"}
            </div>
            <div className="ml-3">
              <div className="text-sm text-gray-500">Overall Grade</div>
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(school.rating) ? "fill-current" : ""
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
