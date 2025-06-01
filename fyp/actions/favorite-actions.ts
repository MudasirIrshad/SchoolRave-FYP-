"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function saveToFavorites(schoolId: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Not authenticated");
  }

  // Check if already favorited
  const existing = await prisma.favorite.findUnique({
    where: {
      userId_schoolId: {
        userId,
        schoolId,
      },
    },
  });

  if (existing) {
    return { alreadyFavorited: true };
  }

  await prisma.favorite.create({
    data: {
      userId,
      schoolId,
    },
  });

  return { success: true };
}
