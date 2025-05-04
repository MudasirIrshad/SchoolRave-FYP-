import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function VerifyPayment() {
  const { userId } = await auth();
  const schoolUpdate = await prisma.school.update({
    where: {
      userId: userId,
    },
    data: {
      subscriptionType: "PAID",
    },
  });
  if (schoolUpdate)
    redirect(`${process.env.BASE_URL}/dashboard/school/${userId}/schoolHome`);
  return <div>VerifyPayment</div>;
}

export default VerifyPayment;
