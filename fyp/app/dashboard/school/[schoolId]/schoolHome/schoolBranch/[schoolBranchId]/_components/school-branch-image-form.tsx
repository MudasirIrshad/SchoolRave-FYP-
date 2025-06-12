"use client";
import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ImageIcon, PencilIcon, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";
import { SchoolBranch } from "@/generated/prisma";

interface ImageFormProps {
  schoolBranchId: string;
  schoolId: string;
  initialData: SchoolBranch;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image URL is required",
  }),
});

function ImageForm({ schoolBranchId, schoolId, initialData }: ImageFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Validate the input before submission
      const validatedValues = formSchema.parse(values);

      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        { imageUrl: validatedValues.imageUrl }
      );
      toast.success("School image updated successfully");
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
        School Image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            "Cancel"
          ) : !initialData.imageUrl ? (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Image
            </>
          ) : (
            <>
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit Image
            </>
          )}
        </Button>
      </div>

      {!isEditing ? (
        !initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="School"
              fill
              className="object-cover rounded-md"
              src={initialData.imageUrl}
              priority
            />
          </div>
        )
      ) : (
        <div>
          <FileUpload
            endpoint="schoolImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              } else {
                toast.error("Please select a valid image");
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageForm;
