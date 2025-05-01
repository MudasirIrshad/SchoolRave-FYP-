import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowLeft,
  LayoutDashboard,
  EyeIcon,
  VideoIcon,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import SchoolBranchTitleForm from "./_components/school-branch-title-form";

async function SchoolBranchPage({
  params,
}: {
  params: {
    schoolBranchId: string;
    schoolId: string;
  };
}) {
  const { userId } = await auth();
  if (!userId) return redirect("/");
  const school = await prisma.school.findUnique({
    where: {
      userId: params.schoolId,
    },
  });

  const schoolBranch = await prisma.schoolBranch.findUnique({
    where: {
      id: params.schoolBranchId,
    },
  });

  if (!schoolBranch) return redirect("/dashboard");

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/dashboard/school/${params.schoolId}/schoolHome`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to School Setup
            </Link>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">School Branch</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <div className="border border-sky-500 bg-sky-100 rounded-full p-1">
                <LayoutDashboard className="text-sky-600" />
              </div>
              <h2 className="text-xl">Customize your school branch</h2>
            </div>
            {/* Placeholder for removed components */}
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchTitleForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchName={schoolBranch.name!}
                schoolId={school?.id!}
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="border rounded-md p-4 bg-slate-100">
              <SchoolBranchTitleForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchName={schoolBranch.name!}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <div className="bg-sky-100 p-1 border rounded-full border-sky-500">
                <ImageIcon className="text-sky-600" />
              </div>
              <h2 className="text-xl">Add a image</h2>
            </div>
            <div className="border rounded-md p-4 mt-4">
              Image Form Placeholder
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolBranchPage;
