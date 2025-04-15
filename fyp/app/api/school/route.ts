import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress || "";

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const {
      title,
      phone,
      address,
      medium_of_instruction,
      description,
      school_type,
      curriculum_type,
    } = await req.json();

    const school = await prisma.school.create({
      data: {
        name: title,
        userId,
        email,
        phone,
        address,
        medium_of_instruction,
        description,
        school_type,
        curriculum_type,
      },
    });

    return NextResponse.json(school);
  } catch (error) {
    console.log("[SCHOOL_CREATE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
