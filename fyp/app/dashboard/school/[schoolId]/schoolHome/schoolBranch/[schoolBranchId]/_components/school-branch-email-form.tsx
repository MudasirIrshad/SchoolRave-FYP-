"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SchoolBranchEmailFormProps {
  schoolBranchId: string;
  schoolBranchEmail: string;
  schoolId: string;
}

function SchoolBranchEmailForm({
  schoolBranchId,
  schoolBranchEmail,
  schoolId,
}: SchoolBranchEmailFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(schoolBranchEmail);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setEmail(schoolBranchEmail);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        {
          email,
        }
      );
      toast.success("School Branch Email Updated");
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      Branch Email
      {isEditing ? (
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-white"
              placeholder="school1@gmail.com"
            />
            <Button
              onClick={handleCancel}
              disabled={isLoading}
              size="sm"
              variant="ghost"
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-end w-full">
            <Button
              onClick={handleSave}
              disabled={isLoading}
              size="sm"
              className="gap-1"
            >
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full gap-2">
          <h3 className="text-sm font-medium truncate flex-1">
            {email ? (
              <>{email}</>
            ) : (
              <div className="text-gray-500 italic">No Email Found</div>
            )}
          </h3>
          <Button
            onClick={toggleEdit}
            variant="ghost"
            size="sm"
            className="text-muted-foreground shrink-0"
          >
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}

export default SchoolBranchEmailForm;
