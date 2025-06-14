import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AdmissionPageProps {
  applicantId: string;
}

const ViewApplicationPage = async ({ applicantId }: AdmissionPageProps) => {
  const admission = await prisma.admission.findUnique({
    where: { id: applicantId },
  });
  const { userId } = await auth();

  if (!admission) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl font-semibold">
        Admission not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10 bg-white min-h-screen rounded-lg shadow-lg border border-blue-200">
      {/* Back Navigation */}
      <div className="flex items-center mb-10 space-x-3 cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <Link href={`/dashboard/school/${userId}/admissionApplications`}>
          <Button size={"sm"}>
            <ArrowLeft className="w-6 h-6" />
            <h2 className="text-sm font-semibold select-none">
              Back to School
            </h2>
          </Button>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 border-b-4 border-blue-400 pb-4 tracking-wide">
        Admission Application Details
      </h1>

      {/* Card */}
      <Card className="shadow-2xl border border-blue-300 rounded-xl overflow-hidden">
        <CardContent className="p-10 bg-gradient-to-br from-white to-blue-50">
          <div className="flex flex-col md:flex-row gap-14">
            {/* Left Image */}
            <div className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-blue-300 w-64 h-64 transition-transform hover:scale-105">
              <Image
                src={admission.studentImageUrl || "/placeholder.jpg"}
                alt="Student"
                width={256} // matches your w-64 (64 * 4 = 256)
                height={256} // matches your h-64
                className="w-full h-full object-cover"
                unoptimized={true} // only if you don't want Next.js to optimize the image
              />
            </div>

            {/* Right Details */}
            <ScrollArea className="flex-1 h-[520px] pr-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base font-semibold">
                {[
                  { label: "Student Name", value: admission.studentName },
                  { label: "Age", value: admission.studentAge },
                  {
                    label: "Date of Birth",
                    value: new Date(admission.dateOfBirth).toLocaleDateString(),
                  },
                  { label: "Guardian Name", value: admission.guardianName },
                  { label: "NIC Number", value: admission.nicNumber },
                  {
                    label: "Qualification",
                    value: admission.guardianQualification,
                  },
                  { label: "Occupation", value: admission.guardianOccupation },
                  { label: "Monthly Income", value: admission.monthlyIncome },
                  { label: "Religion", value: admission.religion },
                  { label: "Nationality", value: admission.nationality },
                  {
                    label: "Postal Address",
                    value: admission.postalAddress,
                    colSpan: true,
                  },
                  {
                    label: "Present Address",
                    value: admission.presentAddress,
                    colSpan: true,
                  },
                  {
                    label: "Telephone Number",
                    value: admission.telephoneNumber,
                  },
                  { label: "Mobile Number", value: admission.mobileNumber },
                  {
                    label: "Disability Nature",
                    value: admission.disabilityNature,
                  },
                  {
                    label: "Disability Cause",
                    value: admission.disabilityCause,
                  },
                  { label: "Requested Class", value: admission.requestedClass },
                  { label: "Approval Status", value: admission.approval },
                  {
                    label: "Submission Date",
                    value: new Date(admission.createdAt).toLocaleDateString(),
                  },
                ].map(({ label, value, colSpan }, i) => (
                  <div
                    key={i}
                    className={`${
                      colSpan ? "col-span-2" : ""
                    } bg-white rounded-md p-4 shadow-sm border border-blue-100`}
                  >
                    <p className="text-sm mb-1">{label}</p>
                    <p className="text-blue-900">{value || "-"}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewApplicationPage;
