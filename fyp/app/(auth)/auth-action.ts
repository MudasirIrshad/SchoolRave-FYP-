"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function saveUserRole(role: "SCHOOL" | "GENERAL") {
  try {
    const clerkUser = await currentUser();
    const client = await clerkClient();

    if (!clerkUser?.id) {
      throw new Error("User not authenticated");
    }

    // Get user info from Clerk
    const email = clerkUser.emailAddresses[0].emailAddress as string;
    const username = clerkUser.username as string;

    // Save or update user in database
    await prisma.user.upsert({
      where: { id: clerkUser.id },
      update: { role },
      create: {
        id: clerkUser.id,
        email,
        name: username,
        role,
      },
    });

    await client.users.updateUserMetadata(clerkUser.id, {
      publicMetadata: {
        role,
      },
    });
    return clerkUser.id;
  } catch (error) {
    console.error("Error saving user role:", error);
    throw error;
  }
}
