import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export const revalidate = 0;

export async function PATCH(
  req: Request,
  { params }: { params: { schoolId: string; schoolBranchId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // const { courseId } = params;
    const values = await req.json();
    console.log(values);

    const schoolBranch = await prisma.schoolBranch.update({
      where: {
        id: params.schoolBranchId,
      },
      data: {
        ...values,
      },
    });
    return NextResponse.json(schoolBranch);
  } catch (error) {
    console.log("[SCHOOL ID API]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
