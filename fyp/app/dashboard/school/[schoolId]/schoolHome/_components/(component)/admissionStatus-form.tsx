"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { AdmissionStatus } from "@/generated/prisma";

interface AdmissionStatusFormProps {
  schoolId: string;
  admissionStatus: AdmissionStatus;
}

const formSchema = z.object({
  admission_status: z.enum([AdmissionStatus.OPEN, AdmissionStatus.CLOSED]),
});

function AdmissionStatusForm({
  schoolId,
  admissionStatus,
}: AdmissionStatusFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      admission_status:
        admissionStatus === "OPEN" || admissionStatus === "CLOSED"
          ? admissionStatus
          : AdmissionStatus.CLOSED,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/school/update-school`, values);
      toast.success("Admission status updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Admission Status
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit Admission Status
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <div
          className={`text-sm mt-2 font-medium px-3 py-1.5 border rounded w-fit ${
            admissionStatus === "OPEN"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {admissionStatus}
        </div>
      )}

      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="admission_status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full border-black border-2 bg-white">
                        <SelectValue placeholder="Select admission status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={AdmissionStatus.OPEN}>
                          OPEN
                        </SelectItem>
                        <SelectItem value={AdmissionStatus.CLOSED}>
                          CLOSED
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

export default AdmissionStatusForm;
