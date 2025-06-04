// app/admission/apply/actions.ts
"use server";

import { AdmissionApproval } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function submitAdmission(formData: {
  studentName: string;
  studentAge: number;
  dateOfBirth: Date;
  studentImageUrl: string;
  requestedClass: string;
  guardianName: string;
  nicNumber: string;
  guardianQualification: string;
  guardianOccupation: string;
  monthlyIncome: string;
  religion: string;
  nationality: string;
  postalAddress: string;
  presentAddress: string;
  telephoneNumber: string;
  mobileNumber: string;
  disabilityNature?: string;
  disabilityOnsetDate?: Date;
  disabilityCause?: string;
  documents: string[];
  schoolId: string;
  submitterId: string;
}) {
  try {
    const admission = await prisma.admission.create({
      data: {
        studentName: formData.studentName,
        studentAge: formData.studentAge,
        dateOfBirth: formData.dateOfBirth,
        studentImageUrl: formData.studentImageUrl,
        requestedClass: formData.requestedClass,
        guardianName: formData.guardianName,
        nicNumber: formData.nicNumber,
        guardianQualification: formData.guardianQualification,
        guardianOccupation: formData.guardianOccupation,
        monthlyIncome: formData.monthlyIncome,
        religion: formData.religion,
        nationality: formData.nationality,
        postalAddress: formData.postalAddress,
        presentAddress: formData.presentAddress,
        telephoneNumber: formData.telephoneNumber,
        mobileNumber: formData.mobileNumber,
        disabilityNature: formData.disabilityNature,
        disabilityOnsetDate: formData.disabilityOnsetDate,
        disabilityCause: formData.disabilityCause,
        approval: AdmissionApproval.PENDING,
        schoolId: formData.schoolId,
        submitterId: formData.submitterId,
        documents: {
          create: formData.documents.map((url) => ({
            url,
            type: "OTHER", // You might want to categorize documents
          })),
        },
      },
    });

    // // Create document records
    // await prisma.document.createMany({
    //   data: formData.documents.map((url) => ({
    //     url,
    //     type: "ADMISSION",
    //     admissionId: admission.id,
    //   })),
    // });

    return { success: true, admissionId: admission.id };
  } catch (error) {
    console.error("Error submitting admission:", error);
    return { success: false, message: "Failed to submit admission" };
  } finally {
    await prisma.$disconnect();
  }
}
