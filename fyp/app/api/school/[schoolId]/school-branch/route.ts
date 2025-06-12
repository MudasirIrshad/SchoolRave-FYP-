import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { schoolId: string } }
) {
  try {
    const { userId } = await auth();

    const { name } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const schoolOwner = await prisma.school.findUnique({
      where: {
        id: params.schoolId,
        userId,
      },
    });

    if (!schoolOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.schoolBranch.create({
      data: {
        name: name,
        schoolId: params.schoolId,
      },
    });

    return NextResponse.json(params.schoolId);
  } catch (error) {
    console.log("[SCHOOL_BRANCH_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
