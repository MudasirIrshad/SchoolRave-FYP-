import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { schoolId, filledFormUrl, userId } = await request.json();
    console.log("schoolId:", schoolId);
    console.log("filledFormUrl:", filledFormUrl);
    console.log("userId:", userId);
    // Save the filled form URL to your database
    // This is just an example - adjust according to your schema
    const submission = await prisma.admission.create({
      data: {
        schoolId,
        formUrl: filledFormUrl,
        submitterId: userId,
        approval: "PENDING",
        // Add other necessary fields like userId, submissionDate, etc.
      },
    });

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Failed to submit filled form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
