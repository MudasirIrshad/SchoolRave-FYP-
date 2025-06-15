import prisma from "@/lib/prisma";
import CreateSchoolForm from "./_components/create-school-form";
import SchoolDetail from "./_components/school-detail";
export const dynamic = "force-dynamic";

export default async function SchoolDashboard({
  params,
}: {
  params: { schoolId: string };
}) {
  const school = await prisma.school.findUnique({
    where: {
      userId: params.schoolId,
    },
  });

  return (
    <div>
      {school ? (
        <SchoolDetail />
      ) : (
        // <CreateSchoolForm schoolId={params.schoolId} />
        <CreateSchoolForm />
      )}
    </div>
  );
}
