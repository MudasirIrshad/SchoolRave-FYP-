"use server";
import { SchoolType } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface CreateSchoolActionProps {
  schoolId: string;
}
export default async function isSchoolExists({
  schoolId,
}: CreateSchoolActionProps): Promise<SchoolType | null> {
  try {
    const result = await prisma.school.findUnique({
      where: {
        userId: schoolId,
      },
    });

    return result;
  } catch (error) {
    console.log("ERROR IN CREATE SCHOOL ACTION", error);
    return null; // Return null if an error occurs
  }
}
