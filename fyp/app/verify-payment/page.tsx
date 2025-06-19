import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic";

async function VerifyPayment() {
  const { userId } = await auth();

  if (!userId) redirect("/dashboard");

  const schoolUpdate = await prisma.school.update({
    where: {
      userId: userId,
      
    },
    data: {
      subscriptionType: "PAID",
    },
  });
  if (schoolUpdate)
    // redirect(`${process.env.BASE_URL}/dashboard/school/${userId}/schoolHome`);
    redirect(
      `https://school-rave-fyp.vercel.app/dashboard/school/${userId}/schoolHome`
    );
  return <div>VerifyPayment</div>;
}

export default VerifyPayment;
