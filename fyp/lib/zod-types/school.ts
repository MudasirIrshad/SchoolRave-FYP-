import { z } from "zod";
import { ReviewSchema } from "./review";

export const SchoolSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.number().optional(),
  address: z.string().optional(),
  medium_of_instruction: z.string().optional(),
  imageUrl: z.string().optional(),
  description: z.string().optional(),
  rating: z.number(),
  school_type: z.enum(["PRIVATE", "GOVERNMENT", "SEMI_GOVERNMENT"]).optional(),
  curriculum_type: z.enum(["FEDERAL", "BALUCHISTAN"]).optional(),
  reviews: z.array(ReviewSchema),
  subscriptionType: z.string(),

  createdAt: z.string(),
  updatedAt: z.string(),

  studentCount: z.number(),
  gradeRange: z.string(),
  studentTeacherRatio: z.string(),
  collegePlacement: z.number(),
  facilities: z.string().array(),
  galleryImages: z.string().array(),
});

export type School = z.infer<typeof SchoolSchema>;
