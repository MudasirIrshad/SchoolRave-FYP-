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
import { School } from "@/generated/prisma";
interface ImageFormProps {
  initialData: School;
  schoolId: string;
}
const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image Url is required",
  }),
});
function ImageForm({ initialData }: ImageFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const validatedData = formSchema.parse(values);

      await axios.patch(`/api/school/update-school`, {
        imageUrl: validatedData.imageUrl,
      });
      toast.success("School image updated successfully");
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
        School Image
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditing && <>Cancle</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4" />
              Add Image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <PencilIcon className="h-4 w-4" />
              Edit Image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <>
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
              <ImageIcon className="h-10 w-10 text-slate-500" />
            </div>
          </>
        ) : (
          <>
            <div className="relative aspect-video mt-2">
              <Image
                alt="Upload"
                fill
                className="object-cover rounded-md"
                src={initialData.imageUrl}
              />
            </div>
          </>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="schoolImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
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
