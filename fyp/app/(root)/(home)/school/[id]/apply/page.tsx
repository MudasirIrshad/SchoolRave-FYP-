"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { formSchema, FormData } from "@/lib/zod-types/admission";
import toast from "react-hot-toast";
import StepIndicator from "./components/step-indicator";
import StudentInfoStep from "./components/student-info-step";
import GuardianInfoStep from "./components/guardian-info-step";
import PersonalDetailsStep from "./components/personal-details-step";
import ContactDisabilityStep from "./components/contact-disability-step";
import ReviewStep from "./components/review-step";
import { submitAdmission } from "@/actions/submitAdmission";
export const dynamic = "force-dynamic";

const TOTAL_STEPS = 5;

export default function StudentRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDisabilityFields, setShowDisabilityFields] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const params = useParams();
  const { userId } = useAuth();
  const schoolId = params.id as string;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      studentAge: undefined,
      dateOfBirth: undefined,
      requestedClass: "",
      guardianName: "",
      nicNumber: "",
      guardianQualification: "",
      guardianOccupation: "",
      monthlyIncome: "",
      religion: "",
      nationality: "",
      postalAddress: "",
      presentAddress: "",
      telephoneNumber: "",
      mobileNumber: "",
      disabilityNature: "",
      disabilityCause: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);

    console.log("VALUES URLLLLL:", schoolId);
    console.log("VALUES DNAGER:", values);

    if (!userId) {
      toast.error("You must be logged in to submit an application.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitAdmission({
        ...values,
        schoolId,
        submitterId: userId,
        studentImageUrl: uploadedFiles[0] || "", // Assuming first file is student image
        documents: uploadedFiles,
      });

      if (response.success) {
        toast.success("Application Submitted");
        // toast({
        // title: "Application Submitted",
        // description:
        // "Your admission application has been submitted successfully.",
        // });
      } else {
        toast.error(response.message || "Failed to submit application.");
        // toast({
        // title: "Error",
        // description: response.message || "Failed to submit application.",
        // variant: "destructive",
        // });
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred.");
      // toast({
      // title: "Error",
      // description: "An unexpected error occurred.",
      // variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await form.trigger([
        "studentName",
        "studentAge",
        "dateOfBirth",
        "requestedClass",
      ]);
    } else if (currentStep === 2) {
      isValid = await form.trigger([
        "guardianName",
        "nicNumber",
        "guardianQualification",
        "guardianOccupation",
        "monthlyIncome",
      ]);
    } else if (currentStep === 3) {
      isValid = await form.trigger([
        "religion",
        "nationality",
        "postalAddress",
        "presentAddress",
      ]);
    } else if (currentStep === 4) {
      isValid = await form.trigger(["telephoneNumber", "mobileNumber"]);
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StudentInfoStep form={form} onNext={handleNextStep} />;
      case 2:
        return (
          <GuardianInfoStep
            form={form}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 3:
        return (
          <PersonalDetailsStep
            form={form}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 4:
        return (
          <ContactDisabilityStep
            form={form}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            showDisabilityFields={showDisabilityFields}
            setShowDisabilityFields={setShowDisabilityFields}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        );
      case 5:
        return (
          <ReviewStep
            form={form}
            onPrevious={handlePreviousStep}
            showDisabilityFields={showDisabilityFields}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderCurrentStep()}
        </form>
      </Form>
    </div>
  );
}
