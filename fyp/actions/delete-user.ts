"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProfileImage(userId: string, imageUrl: string) {
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        imageUrl: imageUrl,
      },
    });

    // Revalidate the profile page to show the updated image
    revalidatePath("/profile");

    return { success: true };
  } catch (error) {
    console.error("Failed to update profile image:", error);
    throw new Error("Failed to update profile image");
  }
}

// =================================================================================

export async function deleteUserAccount() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    // Delete user-related data first
    await prisma.favorite.deleteMany({ where: { userId } });
    await prisma.review.deleteMany({ where: { reviewerId: userId } });
    await prisma.admission.deleteMany({ where: { submitterId: userId } });
    await prisma.payment.deleteMany({ where: { userId } });

    // Delete user from Prisma
    await prisma.user.delete({ where: { id: userId } });

    // Delete user from Clerk
    const client = await clerkClient();
    await client.users.deleteUser(userId);
    // await clerkClient.users.deleteUser(userId);

    // Optionally clear cache or revalidate
    revalidatePath("/profile");

    // Redirect to goodbye or home page
    redirect("/goodbye");
  } catch (error) {
    console.error("[DeleteUserAccount ERROR]", error);
    throw new Error("Something went wrong while deleting your account.");
  }
}
