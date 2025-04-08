import InputField from "@/components/form/input-field";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import toast from "react-hot-toast";
import createSchoolAction from "../actions/create-school-action";
import { CurriculumType, SchoolType } from "@/generated/prisma";

const schoolCreationSchema = z.object({
  name: z.string().min(4).max(100),
  email: z.string().email(),
  address: z.string().max(100),
  affiliation: z.string().max(20),
  medium_of_instruction: z.string().max(10),
  description: z.string().max(200),
  schoolId: z.string(),
  phone: z.string().max(15),
  school_type: z.nativeEnum(SchoolType),
  curriculum_type: z.nativeEnum(CurriculumType),
});

type SchoolCreationFormValues = z.infer<typeof schoolCreationSchema>;

interface CreateSchoolProps {
  schoolId: string;
}
function CreateSchool({ schoolId }: CreateSchoolProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<SchoolCreationFormValues>({
    resolver: zodResolver(schoolCreationSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      affiliation: "",
      medium_of_instruction: "",
      description: "",
      phone: "",
      school_type: "PRIVATE"
    },
  });

  const onSubmit = async (data: SchoolCreationFormValues, schoolId: string) => {
    const {
      name,
      email,
      address,
      affiliation,
      phone,
      medium_of_instruction,
      description,
    } = data;
    try {
      setIsLoading(true);
      await createSchoolAction({
        schoolId,
        name,
        email,
        phone,
        address,
        affiliation,
        medium_of_instruction,
        description,
      });
      toast.success("School Created Succesfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="m-2">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-gray-500">Enter your information to get started</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input defaultValue={schoolId} type="hidden" />
            <InputField
              name="name"
              label="Your Name"
              placeholder="John Doe"
              disabled={isLoading}
              type="text"
            />
            <InputField
              name="email"
              label="Email"
              placeholder="your.email@example.com"
              disabled={isLoading}
              type="email"
            />

            <InputField
              name="address"
              label="Address"
              placeholder="quetta pakistan ...."
              disabled={isLoading}
              type="text"
            />

            <InputField
              name="affiliation"
              label="Affiliation"
              placeholder="Government/Private etc."
              disabled={isLoading}
              type="text"
            />

            <InputField
              name="medium_of_instruction"
              label="Medium of instructions"
              placeholder="Urdu/English etc."
              disabled={isLoading}
              type="text"
            />

            <InputField
              name="description"
              label="Description"
              placeholder="This school etc."
              disabled={isLoading}
              type="text"
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating course..." : "Create"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreateSchool;
