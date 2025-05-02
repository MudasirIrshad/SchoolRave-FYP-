import { School, SchoolBranch } from "@/generated/prisma";
import React from "react";
import CreateBranch from "./(school_branch_components)/create-branch-form";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

interface SchoolBranchProps {
  initialData: School;
}
async function CreateSchoolBranch({ initialData }: SchoolBranchProps) {
  const { userId } = await auth();

  const school = await prisma.school.findUnique({
    where: {
      userId: userId!,
    },
  });
  return (
    <div>
      <CreateBranch
        initialData={initialData}
        schoolId={school?.id}
      />
    </div>
  );
}

export default CreateSchoolBranch;
