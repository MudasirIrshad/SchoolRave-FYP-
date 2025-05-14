import { MapPin, PhoneIcon } from "lucide-react";
import { School } from "@/generated/prisma";

export default function SchoolProfile({ school }: { school: School }) {
  return (
    <div>
      <p className="text-gray-600 my-4">{school.description}</p>

      <h3 className="text-xl font-semibold mb-4">Facilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {school.facilities.map((facility, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-50 p-3 rounded-lg"
          >
            <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center mr-3">
              {index + 1}
            </div>
            <span className="font-medium">{facility}</span>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
          <p className="text-gray-700 font-medium">
            {school.address || "Address not available"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <PhoneIcon className="h-5 w-5 text-gray-500" />
          <p>{school.phone || "Phone not available"}</p>
        </div>
      </div>
    </div>
  );
}
