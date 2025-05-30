import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import TitleForm from "./(component)/title-form";
import {
  ImageIcon,
  LayoutDashboard,
  Paperclip,
  PaperclipIcon,
  School2Icon,
} from "lucide-react";
import DescriptionForm from "./(component)/description-form";
import EmailForm from "./(component)/email-form";
import PhoneForm from "./(component)/phone-form";
import AddressForm from "./(component)/address-form";
import MediumofInstructionForm from "./(component)/medium-of-instruction-form copy";
import SchoolTypeForm from "./(component)/school-type-form";
import CurriculumTypeForm from "./(component)/curriculum-type-form copy";
import ImageForm from "./(component)/image-form";
import { Button } from "@/components/ui/button";
import SubscriptionCard from "../../../../../../components/subscription-card";
import CreateSchoolBranch from "./(component)/school-branch";
import AttachmentForm from "./(component)/attachment-form";
import AdmissionStatusForm from "./(component)/admissionStatus-form";
async function SchoolDetail() {
  const { userId } = await auth();
  if (!userId) return redirect("/dashboard");

  const school = await prisma.school.findUnique({
    where: {
      userId: userId,
    },
    include: {
      schoolBranch: true,
    },
  });

  if (!school) return <div>Loading ...</div>;

  // TODO ADD BANNER FOR PREMIUM

  return (
    <>
      <div className="flex items-center gap-x-2 mt-4">
        <LayoutDashboard />
        <h2 className="text-xl">Customize School</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div>
            <TitleForm initialData={school} schoolId={school.id} />
            <DescriptionForm initialData={school} schoolId={school.id} />
            <PhoneForm initialData={school} schoolId={school.id} />
            <EmailForm initialData={school} schoolId={school.id} />
            <AdmissionStatusForm
              admissionStatus={school.admission_status!}
              schoolId={school?.id!}
            />
          </div>
        </div>

        <div>
          <div>
            <AddressForm initialData={school} schoolId={school.id} />
            <MediumofInstructionForm
              initialData={school}
              schoolId={school.id}
            />
            <SchoolTypeForm initialData={school} schoolId={school.id} />
            <CurriculumTypeForm initialData={school} schoolId={school.id} />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-x-2">
            <ImageIcon className="w-5 h-5" />
            <h2 className="text-xl">School's Image</h2>
          </div>
          <div>
            <ImageForm initialData={school} schoolId={school.id} />
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center gap-x-2 mb-4">
              <div>
                <PaperclipIcon className="w-5 h-5" />
              </div>
              <h2 className="text-xl">Admission Form's Pdf</h2>
            </div>
            <div className="border bg-slate-100 rounded-md p-4">
              <div>
                <AttachmentForm initialData={school} schoolId={school?.id!} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <School2Icon className="w-5 h-5" />
            <h2 className="text-xl">School's Branches</h2>
          </div>
          <div className="mt-6">
            {school.subscriptionType === "FREE" ? (
              <SubscriptionCard />
            ) : (
              <div className="font-medium">
                <CreateSchoolBranch initialData={school} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolDetail;
