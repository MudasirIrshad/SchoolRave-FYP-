import { Admission } from "@/generated/prisma";
import { File } from "lucide-react";
import Image from "next/image";

export default function ApplicationsTab({
  applications,
}: {
  applications: Admission[];
}) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h2>

      {applications.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-32 h-32 text-gray-400 mb-4 flex justify-center items-center">
            <File className="w-16 h-16" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            No applications found
          </h3>
          <p className="mt-2 text-gray-500">
            You haven&apos;t submitted any applications yet.
          </p>
        </div>
      ) : (
        applications.map((application) => (
          <div
            key={application.id}
            className="border border-gray-200 rounded-lg p-4 mb-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  {application.student_name} ({application.student_age} years
                  old)
                </h3>
                <p className="text-gray-600">
                  Date of Birth:{" "}
                  {new Date(application.date_of_birth).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  Submitted on{" "}
                  {new Date(application.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {application.approval}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {application.image_url && (
                <div className="w-16 h-16 rounded overflow-hidden relative">
                  <Image
                    src={application.image_url}
                    alt={`${application.student_name}'s photo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">
                  Last updated:{" "}
                  {new Date(application.updatedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  School ID: {application.schoolId}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
