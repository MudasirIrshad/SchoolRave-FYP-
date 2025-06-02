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
    const imageUrl = clerkUser.imageUrl;

    // Save or update user in database
    await prisma.user.upsert({
      where: { email },
      update: {
        role,
        imageUrl,
      },
      create: {
        id: clerkUser.id,
        email,
        name: username,
        role,
        imageUrl,
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
