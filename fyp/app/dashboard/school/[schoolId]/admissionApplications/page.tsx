import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import ViewApplications from "./_components/ViewApplications";
export const dynamic = "force-dynamic";

async function AdmissionApplicationsPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  const school = await prisma.school.findUnique({
    where: {
      userId: userId,
    },
    include: {
      Admission: true,
    },
  });

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
      <ViewApplications schoolId={school.id} admissions={school.Admission} />
    </div>
  );
}

export default AdmissionApplicationsPage;
