"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

// Define schema for user data validation
const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  unsafeMetadata: z.record(z.unknown()).optional(),
});

export async function addUserInDatabase() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return { success: false, error: "No authenticated user" };
    }

    // Validate the user data
    const validatedUser = userSchema.parse({
      id: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      unsafeMetadata: clerkUser.unsafeMetadata,
    });

    // Determine role (with safer type checking)
    const role =
      typeof validatedUser.unsafeMetadata?.role === "string" &&
      validatedUser.unsafeMetadata.role === "SCHOOL"
        ? "SCHOOL"
        : "GENERAL";

    // Create or update user in database
    await prisma.user.create({
      data: {
        id: validatedUser.id,
        email: validatedUser.email,
        name: `${validatedUser.firstName || ""} ${
          validatedUser.lastName || ""
        }`.trim(),
        role,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error adding user to database:", error);

    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid user data format" };
    }

    // Handle Prisma errors (like unique constraint violations)
    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return { success: false, error: "User already exists in database" };
    }

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to add user to database",
    };
  }
}
