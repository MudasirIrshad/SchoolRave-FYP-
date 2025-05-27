import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // const { courseId } = params;
    const values = await req.json();
    console.log(values);

    const school = await prisma.school.update({
      where: {
        userId,
      },
      data: {
        ...values,
      },
    });
    return NextResponse.json(school);
  } catch (error) {
    console.log("[SCHOOL ID API]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { content, imageUrl } = await req.json();

    // Optional: basic validation
    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

    // Find the school by userId (assuming 1:1 mapping)
    const school = await prisma.school.findUnique({
      where: { userId },
    });

    if (!school) {
      return new NextResponse("School not found", { status: 404 });
    }

    // Create a post associated with the school
    const post = await prisma.post.create({
      data: {
        content,
        image: imageUrl,
        schoolId: school.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("[POST ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
