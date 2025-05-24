"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Save, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SchoolCategory } from "@/generated/prisma";

interface SchoolBranchCategoryFormProps {
  schoolBranchId: string;
  schoolId: string;
  schoolBranchCategory: SchoolCategory;
}

function SchoolBranchCategoryForm({
  schoolBranchId,
  schoolId,
  schoolBranchCategory,
}: SchoolBranchCategoryFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [category, setCategory] = useState(schoolBranchCategory);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setCategory(schoolBranchCategory);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        { schoolBranchCategory: category }
      );
      toast.success("School Branch Category updated");
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
          <label className="block font-medium text-sm">
            School Branch Cateogry{" "}
          </label>
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
            value={category}
            onChange={(e) => setCategory(e.target.value as SchoolCategory)}
            disabled={isLoading}
            className="w-full border rounded px-3 py-1.5 text-sm bg-white"
          >
            <option value={SchoolCategory.PRIMARY}>Primary School</option>
            <option value={SchoolCategory.MIDDLE}>Middle School</option>
            <option value={SchoolCategory.HIGH}>High School</option>
          </select>
        ) : (
          <div className="text-sm font-medium px-3 py-1.5 border rounded w-fit bg-gray-100">
            {schoolBranchCategory === "PRIMARY"
              ? "Primary School"
              : schoolBranchCategory === "MIDDLE"
              ? "Middle School"
              : "High School"}
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

export default SchoolBranchCategoryForm;
