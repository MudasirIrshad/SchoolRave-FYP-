"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

const signUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["GENERAL", "SCHOOL"]),
});

export async function signUpUser(data: z.infer<typeof signUpSchema>) {
  const validated = signUpSchema.safeParse(data);
  if (!validated.success) {
    throw new Error("Invalid input");
  }

  const { name, email, password, role } = validated.data;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  return { success: true };
}
