"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileUpload } from "@/components/file-upload";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import { updateProfileImage } from "@/actions/delete-user";
import toast from "react-hot-toast";

interface ProfileImageUploadProps {
  userId: string;
  currentImageUrl?: string | null;
  userName?: string | null;
  className?: string;
}

export default function ProfileImageUpload({
  userId,
  currentImageUrl,
  userName,
  className,
}: ProfileImageUploadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImageUrl);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleImageUpload = async (url?: string) => {
    if (!url) return;

    setIsUpdating(true);
    try {
      await updateProfileImage(userId, url);
      setImageUrl(url);
      setIsOpen(false);
      toast.success("Profile image updated successfully!");
    } catch (error) {
      console.error("Failed to update profile image:", error);
      toast.error("Failed to update profile image. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer">
          <Avatar className={className}>
            <AvatarImage src={imageUrl ?? ""} />
            <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Profile Picture</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={imageUrl ?? ""} />
            <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <FileUpload endpoint="userImage" onChange={handleImageUpload} />
          {isUpdating && (
            <p className="text-sm text-gray-500">Updating profile image...</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
