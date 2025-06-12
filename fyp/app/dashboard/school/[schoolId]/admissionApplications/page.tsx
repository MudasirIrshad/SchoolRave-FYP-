import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import ViewApplications from "./_components/ViewApplications";

async function AdmissionApplicationsPage() {
  const { userId } = await auth();
  const school = await prisma.school.findUnique({
    where: {
      userId: userId!,
    },
    include: {
      Admission: true,
    },
  });
  return (
    <div>
      <ViewApplications
        schoolId={school?.id!}
        admissions={school?.Admission!}
      />
    </div>
  );
}

export default AdmissionApplicationsPage;
