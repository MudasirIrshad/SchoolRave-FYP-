"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { School } from "@/generated/prisma";
import { saveToFavorites } from "@/actions/favorite-actions";
import Link from "next/link";

export default function SchoolDetailSidebar({
  school,
  isFavorited,
}: {
  school: School;
  isFavorited: boolean;
}) {
  const [favorited, setFavorited] = useState(isFavorited);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      try {
        const res = await saveToFavorites(school.id);
        if (res.success) setFavorited(true);
      } catch (err) {
        console.error("Failed to favorite school:", err);
      }
    });
  };

  const isAdmissionOpen = school.admission_status === "OPEN";

  return (
    <div className="lg:w-1/3">
      {/* School Actions */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">
          Interested in this school?
        </h3>
        <div className="space-y-3">
          <Link href={`/school/${school.id}/apply`}>
            <Button className="w-full" disabled={!isAdmissionOpen}>
              {isAdmissionOpen ? "Apply Online" : "Admissions Closed"}
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleSave}
            disabled={favorited || isPending}
          >
            {favorited ? "Saved to Favorites" : "Save to Favorites"}
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
    </div>
  );
}
