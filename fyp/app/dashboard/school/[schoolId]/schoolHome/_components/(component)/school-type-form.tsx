"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { School, SchoolType } from "@/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SchoolTypeFormProps {
  initialData: School;
  schoolId: string;
}

const formSchema = z.object({
  school_type: z.enum([
    SchoolType.GOVERNMENT,
    SchoolType.PRIVATE,
    SchoolType.SEMI_GOVERNMENT,
  ]),
});

function SchoolTypeForm({ initialData, schoolId }: SchoolTypeFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_type:
        initialData.school_type === "GOVERNMENT" ||
        initialData.school_type === "SEMI_GOVERNMENT" ||
        initialData.school_type === "PRIVATE"
          ? initialData.school_type
          : SchoolType.PRIVATE, // default fallback
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/school/update-school`, values);
      toast.success("School Updated Successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        School Type
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit Type
            </>
          )}
        </Button>
      </div>

      {!isEditing && <p className="text-sm mt-2">{initialData.school_type}</p>}

      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="school_type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full border-black border-2 bg-white">
                        <SelectValue placeholder="Select medium" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={SchoolType.GOVERNMENT}>
                          GOVERNMENT
                        </SelectItem>
                        <SelectItem value={SchoolType.PRIVATE}>
                          PRIVATE
                        </SelectItem>
                        <SelectItem value={SchoolType.SEMI_GOVERNMENT}>
                          SEMI_GOVERNMENT
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

export default SchoolTypeForm;
