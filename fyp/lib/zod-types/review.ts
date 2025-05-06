import { z } from "zod";
import { UserSchema } from "./user";

export const ReviewSchema = z.object({
  id: z.string(),
  rating: z.number(),
  comment: z.string().optional(),
  schoolId: z.string().optional(),
  schoolBranchId: z.string().optional(),
  reviewerId: z.string().optional(),
  reviewer: UserSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const AddReviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5"),
  comment: z.string().optional(),
  entityId: z.string(),
  userId: z.string(),
  entityType: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;
export type AddReview = z.infer<typeof AddReviewSchema>;
