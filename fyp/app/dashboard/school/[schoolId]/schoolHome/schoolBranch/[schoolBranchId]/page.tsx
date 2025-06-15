import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, LayoutDashboard, ImageIcon, Paperclip } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import SchoolBranchTitleForm from "./_components/school-branch-title-form";
import SchoolBranchEmailForm from "./_components/school-branch-email-form";
import SchoolBranchAddressForm from "./_components/school-branch-address-form";
import SchoolBranchPhoneForm from "./_components/school-branch-phone-form";
import SchoolBranchCityForm from "./_components/school-branch-city-form";
import SchoolBranchDescriptionForm from "./_components/school-branch-description-form";
import SchoolBranchAdmissionStatusForm from "./_components/school-branch-admissionStatus-form";
import SchoolBranchGenderPolicyForm from "./_components/school-branch-genderPolicy-form";
import SchoolBranchFacilities from "./_components/school-branch-facility-form";
import ImageForm from "./_components/school-branch-image-form";
import AttachmentForm from "./_components/school-branch-attachment-form";
import SchoolBranchCategoryForm from "./_components/school-branch-category-form";
export const dynamic = "force-dynamic";

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

  if (!school) return redirect("/dashboard");

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
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchEmailForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchEmail={schoolBranch.email!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchCityForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchCity={schoolBranch.city!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchAdmissionStatusForm
                schoolBranchId={params.schoolBranchId}
                admissionStatus={schoolBranch.admission_status!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchFacilities
                schoolBranchId={params.schoolBranchId}
                schoolfacilities={schoolBranch.facilities!}
                schoolId={school.id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="bg-sky-100 p-1 border rounded-full border-sky-500">
                  <ImageIcon className="text-sky-600" />
                </div>
                <h2 className="text-xl">Add a image</h2>
              </div>
              <div className="border rounded-md p-4 mt-4">
                <ImageForm
                  schoolBranchId={params.schoolBranchId}
                  initialData={schoolBranch}
                  schoolId={school.id}
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------- */}
          {/* ------------------------------------ */}
          <div className="space-y-4">
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchAddressForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchAddress={schoolBranch.address!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchPhoneForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchPhone={schoolBranch.phone!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchDescriptionForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchDescription={schoolBranch.description!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchGenderPolicyForm
                schoolBranchId={params.schoolBranchId}
                genderPolicy={schoolBranch.gender_policy!}
                schoolId={school.id}
              />
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <SchoolBranchCategoryForm
                schoolBranchId={params.schoolBranchId}
                schoolBranchCategory={schoolBranch.schoolBranchCategory!}
                schoolId={school.id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2 mb-4">
                <div className="bg-sky-100 p-1 border rounded-full border-sky-500">
                  <Paperclip className="text-sky-600" />
                </div>
                <h2 className="text-xl">Admission Form&apos;s Pdf</h2>
              </div>
              <div className="border bg-slate-100 rounded-md p-4">
                <div>
                  <AttachmentForm
                    schoolBranchId={params.schoolBranchId}
                    initialData={schoolBranch}
                    schoolId={school.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolBranchPage;
