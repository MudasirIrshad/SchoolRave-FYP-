"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5"),
  comment: z.string().optional(),
  schoolId: z.string(),
  userId: z.string(),
});

export async function addReview(formData: FormData | z.infer<typeof schema>) {
  try {
    // Parse and validate input
    const input = schema.parse(
      formData instanceof FormData
        ? Object.fromEntries(formData.entries())
        : formData
    );

    console.log("DANGER:", input);
    const { rating, comment, schoolId, userId } = input;

    // Here you would typically save to your database
    await prisma.review.create({
      data: {
        rating,
        comment,
        schoolId,
        reviewerId: userId,
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
