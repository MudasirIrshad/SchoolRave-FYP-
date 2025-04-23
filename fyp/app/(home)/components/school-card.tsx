import { Star, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

interface SchoolCardProps {
  school: {
    name: string;
    type: "Public" | "Private" | string; // Add other possible types if needed
    address: string;
    city: string;
    state: string;
    zipCode: string;
    description?: string; // Description is optional
    gradeRange: string;
    studentCount: number;
    rating?: number; // Rating is optional
    imageUrl?: string; // Image URL is optional
    studentTeacherRatio?: string; // Student-teacher ratio is optional
    tags?: string[]; // Tags are optional
    programs?: string[]; // Programs are optional
    facilities?: string[]; // Facilities are optional
    collegePlacement?: number; // College placement rate is optional
    isTopRated?: boolean; // isTopRated is optional
    isFeatured?: boolean; // isFeatured is optional
  };
}

export default function SchoolCard({ school }: SchoolCardProps) {
  const schoolUrl = `/school/${school.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={school.imageUrl}
          alt={`Exterior of ${school.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-primary">
          {school.type}
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-semibold flex items-center">
          <Star className="w-4 h-4 mr-1 fill-current" />{" "}
          {school.rating.toFixed(1)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 font-open">{school.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {school.address}, {school.city}, {school.state}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {school.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {school.description}
        </p>
        <div className="flex justify-between items-center">
          <Link
            href={schoolUrl}
            className="text-primary hover:text-accent font-semibold text-sm"
          >
            View Details →
          </Link>
          <div className="flex items-center text-xs text-gray-500">
            <MessageSquare className="w-3 h-3 mr-1" />{" "}
            {Math.floor(Math.random() * 100) + 10} Reviews
          </div>
        </div>
      </div>
    </div>
  );
}
