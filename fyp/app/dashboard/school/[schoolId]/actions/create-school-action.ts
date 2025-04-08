"use server";
import { CurriculumType, SchoolType } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface CreateSchoolActionProps {
  name: string;
  email: string;
  address: string;
  medium_of_instruction: string;
  description: string;
  schoolId: string;
  phone: string;
  school_type: SchoolType;
  curriculum_type: CurriculumType;
}
export default async function createSchoolAction({
  name,
  email,
  address,
  medium_of_instruction,
  description,
  schoolId,
  phone,
  school_type,
  curriculum_type,
}: CreateSchoolActionProps) {
  try {
    await prisma.school.create({
      data: {
        name: name,
        email,
        phone,
        address,
        medium_of_instruction,
        description,
        userId: schoolId,
        school_type,
        curriculum_type,
      },
    });
  } catch (error) {
    console.log("ERRO IN CREATE SCHOOL ACTION", error);
  }
}
