import CreateBranch from "./(school_branch_components)/create-branch-form";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
// import { School } from "@/generated/prisma";

// interface SchoolBranchProps {
//   initialData: School;
// }
// async function CreateSchoolBranch({ initialData }: SchoolBranchProps) {
async function CreateSchoolBranch() {
  const { userId } = await auth();

  const school = await prisma.school.findUnique({
    where: {
      userId: userId!,
    },
    include: {
      schoolBranch: true,
    },
  });

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
      <CreateBranch initialData={school} schoolId={school.id} />
    </div>
  );
}

export default CreateSchoolBranch;
