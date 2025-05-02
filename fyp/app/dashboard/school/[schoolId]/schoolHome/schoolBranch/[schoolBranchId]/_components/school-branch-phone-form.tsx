"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SchoolBranchPhoneFormProps {
  schoolBranchId: string;
  schoolBranchPhone: string;
  schoolId: string;
}

function SchoolBranchPhoneForm({
  schoolBranchId,
  schoolBranchPhone,
  schoolId,
}: SchoolBranchPhoneFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState(schoolBranchPhone);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setPhone(schoolBranchPhone);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        {
          phone,
        }
      );
      toast.success("School Branch Phone Number Updated");
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
      Branch Phone Number
      {isEditing ? (
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-white"
              placeholder="+92 335.....991"
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
            {phone ? (
              <>{phone}</>
            ) : (
              <div className="text-gray-500 italic">No Phone Number Yet</div>
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

export default SchoolBranchPhoneForm;
