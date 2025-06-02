import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { schoolId: string } }
) {
  try {
    console.log("SCHOOLiD:", params.schoolId);
    const school = await prisma.school.findUnique({
      where: { id: params.schoolId },
      select: {
        name: true,
        admissionFormUrl: true,
      },
    });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json(school);
  } catch (error) {
    console.error("Failed to fetch School Form Url:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
