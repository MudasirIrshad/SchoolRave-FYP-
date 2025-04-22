import { auth } from "@clerk/nextjs/server";
import PaymentSuccessMessage from "./_components/success-message";
import prisma from "@/lib/prisma";
import RedirectPage from "./page-redirect-action";

export default async function PaymentSuccess() {
  const { userId } = await auth();

  const school = await prisma.school.findUnique({
    where: {
      userId: userId!,
    },
  });

  if (school) {
    await prisma.school.update({
      where: {
        userId: userId!,
      },
      data: {
        subscriptionType: "PAID",
      },
    });
  }

  // Return the client-side component for redirect after success message
  return (
    <>
      <PaymentSuccessMessage />
      <RedirectPage />{" "}
      {/* This is the client-side component that handles redirect */}
    </>
  );
}
