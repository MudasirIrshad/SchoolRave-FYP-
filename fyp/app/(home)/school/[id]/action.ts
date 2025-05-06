"use server";

import prisma from "@/lib/prisma";
import { AddReviewSchema } from "@/lib/zod-types/review";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function addReview(
  formData: FormData | z.infer<typeof AddReviewSchema>
) {
  try {
    console.log("formData: ", formData);
    // Parse and validate input
    const input = AddReviewSchema.parse(
      formData instanceof FormData
        ? Object.fromEntries(formData.entries())
        : formData
    );

    // console.log("DANGER:", input);
    const { rating, comment, entityId, userId, entityType } = input;

    if (entityType === "school") {
      await prisma.review.create({
        data: {
          rating,
          comment,
          schoolId: entityId,
          reviewerId: userId,
        },
      });
    } else {
      await prisma.review.create({
        data: {
          rating,
          comment,
          schoolBranchId: entityId,
          reviewerId: userId,
        },
      });
    }

    revalidatePath("/school");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return {
      error: "Something went wrong, Please try again later.",
    };
  }
}
