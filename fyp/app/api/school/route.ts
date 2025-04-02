import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";

// import { isTeacher } from "@/lib/teacher";
export async function POST(req: Request) {
  try {
    // const { userId } = await auth();
    const {
      schoolname,
      schoolemail,
      schoolcontact,
      schooladdress,
      schoolaffiliation,
      schoolmedium,
      schooldescription,
      schoolType,
      curriculumType,
    } = await req.json();
    // if (!userId || !isTeacher(userId))
    //   return new NextResponse("Unauthorized", { status: 401 });

    const school = await prisma.school.create({
      data: {
        name: schoolname,
        email: schoolemail,
        phone: schoolcontact,
        address: schooladdress,
        affiliation: schoolaffiliation,
        medium_of_instruction: schoolmedium,
        description: schooldescription,
        school_type: schoolType,
        curriculum_type: curriculumType,
      },
    });
    
    return NextResponse.json(school);
  } catch (error) {
    console.log("[SCHOOL]", error);
    return new NextResponse("INternal Error", { status: 500 });
  }
}
