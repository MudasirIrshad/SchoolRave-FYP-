"use client";
import { SchoolBranch as SchoolBranchType } from "@/generated/prisma";
import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface SchoolBranchProps {
  initialData: SchoolBranchType[];
  schoolId: string;
}

function SchoolBranch({ initialData, schoolId }: SchoolBranchProps) {
  const router = useRouter();
  return (
    <div className="max-h-44 overflow-y-auto space-y-3 p-2 bg-gray-50 rounded-lg">
      {initialData.map((branch) => (
        <div
          key={branch.id}
          className="flex items-center justify-between p-3 bg-white shadow-sm rounded-md hover:shadow-md transition"
        >
          <div className="text-sm font-semibold text-gray-800 truncate max-w-[75%]">
            {branch.name || "Unnamed Branch"}
          </div>
          <button className="text-gray-500 hover:text-gray-700 transition">
            <PencilIcon
              onClick={() => {
                router.push(
                  `/dashboard/school/${schoolId}/schoolHome/schoolBranch/${branch.id}`
                );
              }}
              className="w-4 h-4"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default SchoolBranch;
