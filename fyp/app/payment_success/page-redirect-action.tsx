"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect, useRouter } from "next/navigation";

export default async function RedirectPage() {
  const { userId } = await auth();

  redirect(`/dashboard/school/${userId}/schoolHome`);
  return <></>;
}
