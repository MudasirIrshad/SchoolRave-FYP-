"use client";
import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FileIcon, PencilIcon, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-upload";
import { SchoolBranch } from "@/generated/prisma";

interface AttachmentFormProps {
  schoolBranchId: string;
  schoolId: string;
  initialData: SchoolBranch;
}

const formSchema = z.object({
  attachmentUrl: z.string().min(1, {
    message: "Attachment URL is required",
  }),
});

function AttachmentForm({
  schoolBranchId,
  schoolId,
  initialData,
}: AttachmentFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Validate the input before submission
      const validatedValues = formSchema.parse(values);

      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        { attachmentUrl: validatedValues.attachmentUrl }
      );
      toast.success("Attachment updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        School Attachment
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : !initialData.admissionFormUrl ? (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Attachment
            </>
          ) : (
            <>
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit Attachment
            </>
          )}
        </Button>
      </div>

      {!isEditing ? (
        !initialData.admissionFormUrl ? (
          <div className="flex items-center justify-center h-20 bg-slate-200 rounded-md">
            <FileIcon className="h-8 w-8 text-slate-500" />
          </div>
        ) : (
          <div className="mt-4 text-sm text-blue-600 underline">
            <a
              href={initialData.admissionFormUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Admission Form
            </a>
          </div>
        )
      ) : (
        <div className="w-full max-w-md mx-auto mt-4">
          <FileUpload
            endpoint="schoolAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ attachmentUrl: url });
              } else {
                toast.error("Please upload a valid file");
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-2 text-center">
            Upload documents like PDFs, DOCX, or ZIP files
          </div>
        </div>
      )}
    </div>
  );
}

export default AttachmentForm;
