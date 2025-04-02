"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const schoolTypes = ["PUBLIC", "PRIVATE", "SEMI_PUBLIC"] as const;
const curriculumTypes = ["FEDERAL", "BALUCHISTAN"] as const;

const formSchema = z.object({
  schoolname: z.string().min(5, "School Name required").max(150),
  schoolemail: z.string().email("Invalid Email").max(150),
  schoolcontact: z.string().min(8, "Contact must be at least 8 digits").max(15),
  schooladdress: z.string().min(5, "Address required").max(150),
  schoolaffiliation: z.string().min(5, "Affiliation required").max(150),
  schooldescription: z.string().min(5, "Description required").max(500),
  schoolmedium: z.string().min(5, "Medium required").max(150),
  schoolType: z.enum(schoolTypes),
  curriculumType: z.enum(curriculumTypes),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateSchool() {
  const [enums, setEnums] = useState({ schoolTypes: [], curriculumTypes: [] });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolname: "",
      schoolemail: "",
      schoolcontact: "",
      schooladdress: "",
      schoolaffiliation: "",
      schoolmedium: "",
      schooldescription: "",
      schoolType: "PUBLIC",
      curriculumType: "BALUCHISTAN",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/school`, values);

      router.push(`/school/${response.data.id}`);
      toast.success("School Created Successfully");
    } catch (error) {
      console.log("Error while submitting:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Create School</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="schoolname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter school name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolemail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter school email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolcontact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter contact number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schooladdress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolaffiliation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Affiliation</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter affiliation" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolmedium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medium</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schooldescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* School Type Dropdown */}
          <FormField
            control={form.control}
            name="schoolType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select school type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {schoolTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Curriculum Type Dropdown */}
          <FormField
            control={form.control}
            name="curriculumType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Curriculum Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select curriculum type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {curriculumTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
