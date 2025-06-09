import { NextRequest, NextResponse } from "next/server";
import { AdmissionApproval } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();

    // Validate status as AdmissionApproval enum type

    const updatedApplication = await prisma.admission.update({
      where: { id: params.id },
      data: { approval: status as AdmissionApproval },
    });

    return NextResponse.json({ success: true, data: updatedApplication });
  } catch (error) {
    console.error("Failed to update status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update status" },
      { status: 500 }
    );
  }
}
