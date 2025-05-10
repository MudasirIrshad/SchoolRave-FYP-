"use client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, PencilIcon, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

interface SchoolBranchFacilitiesProps {
  schoolBranchId: string;
  schoolfacilities: string[];
  schoolId: string;
}

const formSchema = z.object({
  facilities: z.string().min(1, "Facilities must not be empty"),
});

type FormValues = z.infer<typeof formSchema>;

function SchoolBranchFacilities({
  schoolBranchId,
  schoolfacilities,
  schoolId,
}: SchoolBranchFacilitiesProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facilities: schoolfacilities.join(", "),
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);
      const facilitiesArray = values.facilities
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        {
          facilities: facilitiesArray,
        }
      );
      console.log(facilitiesArray);

      toast.success("Facilities updated successfully");
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update facilities");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        <span>School Branch Facilities</span>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="ghost"
          size="sm"
        >
          {isEditing ? (
            <>
              <X className="h-4 w-4 mr-1" />
              Cancel
            </>
          ) : (
            <>
              <PencilIcon className="h-4 w-4 mr-1" />
              Edit
            </>
          )}
        </Button>
      </div>

      {isEditing ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="facilities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facilities (comma-separated)</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white"
                      disabled={isLoading}
                      placeholder="Library, Computer Lab, Playground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
              ) : null}
              Save
            </Button>
          </form>
        </Form>
      ) : (
        <ul className="list-disc list-inside mt-4 text-sm text-gray-700">
          {schoolfacilities.length === 0 ? (
            <li className="italic text-gray-500">No facilities listed</li>
          ) : (
            schoolfacilities.map((facility, idx) => (
              <li key={idx}>{facility}</li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SchoolBranchFacilities;
