"use client";
import InputField from "@/components/form/input-field";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import toast from "react-hot-toast";
import createSchoolAction from "../actions/create-school-action";
import { CurriculumType, SchoolType } from "@/generated/prisma";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schoolCreationSchema = z.object({
  name: z.string().min(4).max(100),
  email: z.string().email(),
  address: z.string().max(100),
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
  console.log("from create form", schoolId);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<SchoolCreationFormValues>({
    resolver: zodResolver(schoolCreationSchema),
    defaultValues: {
      schoolId, // Add the schoolId here as a default value
      name: "",
      email: "",
      address: "",
      medium_of_instruction: "",
      description: "",
      phone: "",
      school_type: SchoolType.PRIVATE,
      curriculum_type: CurriculumType.FEDERAL,
    },
  });

  const onSubmit = async (data: SchoolCreationFormValues) => {
    const {
      name,
      email,
      address,
      phone,
      medium_of_instruction,
      description,
      school_type,
      curriculum_type,
    } = data;

    try {
      setIsLoading(true);
      await createSchoolAction({
        schoolId,
        name,
        email,
        phone,
        address,
        medium_of_instruction,
        description,
        school_type,
        curriculum_type,
      });
      toast.success("School Created Successfully");
      router.refresh();
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
          <h1 className="text-2xl font-bold">Create School</h1>
          <p className="text-gray-500">
            Enter school information to get started
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Removed hidden input, as it's handled in defaultValues */}
            <InputField
              name="name"
              label="School Name"
              placeholder="Model Public High School"
              disabled={isLoading}
              type="text"
            />
            <InputField
              name="email"
              label="Email"
              placeholder="school.email@example.com"
              disabled={isLoading}
              type="email"
            />
            <InputField
              name="address"
              label="Address"
              placeholder="Quetta, Pakistan ..."
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

            <div className="space-y-2">
              <label
                htmlFor="school_type"
                className="text-sm font-medium text-gray-700"
              >
                School Type
              </label>
              <Controller
                control={form.control}
                name="school_type"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="school_type">
                      <SelectValue placeholder="Select school type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={SchoolType.PRIVATE}>
                          Private
                        </SelectItem>
                        <SelectItem value={SchoolType.GOVERNMENT}>
                          Government
                        </SelectItem>
                        <SelectItem value={SchoolType.SEMI_GOVERNMENT}>
                          Semi Govt
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="curriculum_type"
                className="text-sm font-medium text-gray-700"
              >
                Curriculum Type
              </label>
              <Controller
                control={form.control}
                name="curriculum_type"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="curriculum_type">
                      <SelectValue placeholder="Select Curriculum Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={CurriculumType.FEDERAL}>
                          Federal
                        </SelectItem>
                        <SelectItem value={CurriculumType.BALUCHISTAN}>
                          Baluchistan
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <InputField
              name="description"
              label="Description"
              placeholder="This school is... etc."
              disabled={isLoading}
              type="text"
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating school..." : "Create"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreateSchool;
