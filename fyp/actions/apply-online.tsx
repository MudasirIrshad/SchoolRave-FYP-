import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function applyOnline() {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { schoolId, filledFormUrl } = await req.json();

    if (!schoolId || !filledFormUrl) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if the user already has an application for this school
    const existingApplication = await prisma.application.findFirst({
      where: {
        userId,
        schoolId,
      },
    });

    if (existingApplication) {
      // Update existing application
      await prisma.application.update({
        where: {
          id: existingApplication.id,
        },
        data: {
          filledFormUrl,
          status: "SUBMITTED",
          submittedAt: new Date(),
        },
      });
    } else {
      // Create new application
      await prisma.application.create({
        data: {
          userId,
          schoolId,
          filledFormUrl,
          status: "SUBMITTED",
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[APPLICATION_UPLOAD]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
