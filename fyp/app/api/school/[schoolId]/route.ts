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
