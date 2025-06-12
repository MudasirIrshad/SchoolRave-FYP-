"use client";
import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FileIcon, PencilIcon, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { FileUpload } from "@/components/file-upload";
import { School } from "@/generated/prisma";

interface AttachmentFormProps {
  schoolId: string;
  initialData: School;
}

const formSchema = z.object({
  admissionFormUrl: z.string().min(1, {
    message: "Attachment URL is required",
  }),
});

function AttachmentForm({ initialData }: AttachmentFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // This validates input using Zod
      const validatedData = formSchema.parse(values);

      await axios.patch(`/api/school/update-school`, validatedData);
      toast.success("Attachment updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        School Attachment
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.admissionFormUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Attachment
            </>
          )}
          {!isEditing && initialData.admissionFormUrl && (
            <>
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit Attachment
            </>
          )}
        </Button>
      </div>

      {!isEditing &&
        (!initialData.admissionFormUrl ? (
          <div className="flex items-center justify-center h-20 bg-slate-200 rounded-md">
            <FileIcon className="h-8 w-8 text-slate-500" />
          </div>
        ) : (
          <div className="mt-4 text-sm text-blue-600 underline">
            <a
              href={initialData.admissionFormUrl!}
              target="_blank"
              rel="noreferrer"
            >
              View Admission Form
            </a>
          </div>
        ))}

      {isEditing && (
        <div className="w-full max-w-md mx-auto mt-4">
          <FileUpload
            endpoint="schoolAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ admissionFormUrl: url });
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
