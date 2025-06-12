"use client";
import { FileUpload } from "@/components/file-upload";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { School } from "@/generated/prisma";
import axios from "axios";
import { ImageIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

interface CreatePostProps {
  school: School;
}

const imageSchema = z.object({
  imageUrl: z.string().optional(),
  content: z.string().min(1, {
    message: "Post content is required",
  }),
});

function CreatePost({ school }: CreatePostProps) {
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const router = useRouter();

  const onSubmit = async () => {
    const result = imageSchema.safeParse({ imageUrl, content });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    try {
      await axios.post(`/api/school/${school.userId}`, {
        imageUrl,
        content,
      });
      toast.success("Post created successfully");
      setContent(""); // Clear after post
      setImageUrl(undefined);
      setShowPhotoUpload(false);
      router.refresh();
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full">
      <div className="border rounded-xl p-3 w-full max-w-2xl mx-auto">
        <div className="flex items-start gap-4 mb-3">
          <Avatar>
            <AvatarImage src={school.imageUrl!} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="What's on your mind..."
            className="flex-1 w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {showPhotoUpload && (
          <FileUpload
            endpoint="schoolImage"
            onChange={(url) => {
              if (url) {
                setImageUrl(url);
              }
            }}
          />
        )}

        <div className="flex justify-between mt-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowPhotoUpload(!showPhotoUpload)}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Photo
          </Button>
          <Button size="sm" onClick={onSubmit}>
            <SendIcon className="mr-2 h-4 w-4" />
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
