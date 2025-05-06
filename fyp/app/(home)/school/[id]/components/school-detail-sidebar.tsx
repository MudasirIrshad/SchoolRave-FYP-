import { Button } from "@/components/ui/button";
import { School } from "@/lib/zod-types/school";
// import Image from "next/image";
import React from "react";

export default function SchoolDetailSidebar({ school }: { school: School }) {
  return (
    <div className="lg:w-1/3">
      {/* School Actions */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">
          Interested in this school?
        </h3>
        <div className="space-y-3">
          <Button className="w-full">Apply Online</Button>
          <Button variant="outline" className="w-full">
            Save to Favorites
          </Button>
        </div>
      </div>

      {/* School Details */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">School Details</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">School Type</div>
            <div className="font-medium">{school.school_type}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">
              Medium of Instruction
            </div>
            <div className="font-medium">{school.medium_of_instruction}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Curriculum Type</div>
            <div className="font-medium">{school.curriculum_type}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Grades</div>
            <div className="font-medium">{school.gradeRange}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Total Students</div>
            <div className="font-medium">{school.studentCount || 0}</div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      {/* <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">School Gallery</h3>
        <div className="grid grid-cols-2 gap-2">
          {school.galleryImages.map((imgUrl, index) => (
            <div
              key={index}
              className="aspect-video rounded-md overflow-hidden"
            >
              <Image
                src={imgUrl || "https://placehold.co/600x400?text=No+Image"}
                alt={`${school.name} gallery image ${index + 1}`}
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="ghost" size="sm">
            View All Photos
          </Button>
        </div>
      </div> */}
    </div>
  );
}
