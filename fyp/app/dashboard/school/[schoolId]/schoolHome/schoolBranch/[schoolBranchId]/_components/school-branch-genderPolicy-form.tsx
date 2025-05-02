"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Save, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { GenderPolicy } from "@/generated/prisma";

interface GenderPolicyFormProps {
  schoolBranchId: string;
  schoolId: string;
  genderPolicy: GenderPolicy;
}

function SchoolBranchGenderPolicyForm({
  schoolBranchId,
  schoolId,
  genderPolicy,
}: GenderPolicyFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [policy, setPolicy] = useState(genderPolicy);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setPolicy(genderPolicy);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        { gender_policy: policy }
      );
      toast.success("Gender policy updated");
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
    <div className="w-full space-y-2">
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block font-medium text-sm">Gender Policy</label>
          {!isEditing && (
            <Button
              onClick={toggleEdit}
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
            >
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
          )}
        </div>

        {isEditing ? (
          <select
            value={policy}
            onChange={(e) => setPolicy(e.target.value as GenderPolicy)}
            disabled={isLoading}
            className="w-full border rounded px-3 py-1.5 text-sm bg-white"
          >
            <option value={GenderPolicy.CO_EDUCATION}>Co-Education</option>
            <option value={GenderPolicy.BOYS_ONLY}>Boys Only</option>
            <option value={GenderPolicy.GIRLS_ONLY}>Girls Only</option>
          </select>
        ) : (
          <div className="text-sm font-medium px-3 py-1.5 border rounded w-fit bg-gray-100">
            {policy === "CO_EDUCATION"
              ? "Co-Education"
              : policy === "BOYS_ONLY"
              ? "Boys Only"
              : "Girls Only"}
          </div>
        )}
      </div>

      {isEditing && (
        <div className="flex justify-end gap-2">
          <Button
            onClick={handleCancel}
            disabled={isLoading}
            variant="ghost"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            size="sm"
            className="gap-1"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}

export default SchoolBranchGenderPolicyForm;
