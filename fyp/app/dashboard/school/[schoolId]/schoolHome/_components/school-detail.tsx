import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import TitleForm from "./(component)/title-form";
import { LayoutDashboard } from "lucide-react";
import DescriptionForm from "./(component)/description-form";
import EmailForm from "./(component)/email-form";

async function SchoolDetail() {
  const { userId } = await auth();
  if (!userId) return redirect("/dashboard");

  const school = await prisma.school.findUnique({
    where: {
      userId: userId,
    },
  });

  console.log(school);

  if (!school) return <div>Loading ...</div>;

  // TODO ADD BANNER FOR PREMIUM

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="flex items-center gap-x-2">
          <LayoutDashboard />
          <h2 className="text-xl">Customize School</h2>
        </div>

        <div>
          <TitleForm initialData={school} schoolId={school.id} />
          <DescriptionForm initialData={school} schoolId={school.id} />
          <EmailForm initialData={school} schoolId={school.id} />
        </div>
      </div>
    </div>
  );
}

export default SchoolDetail;
