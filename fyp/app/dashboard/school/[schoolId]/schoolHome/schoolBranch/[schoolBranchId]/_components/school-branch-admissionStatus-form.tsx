"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Save, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AdmissionStatus } from "@/generated/prisma";

interface AdmissionStatusFormProps {
  schoolBranchId: string;
  schoolId: string;
  admissionStatus: AdmissionStatus;
}

function SchoolBranchAdmissionStatusForm({
  schoolBranchId,
  schoolId,
  admissionStatus,
}: AdmissionStatusFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(admissionStatus);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setStatus(admissionStatus);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await axios.patch(
        `/api/school/${schoolId}/school-branch/${schoolBranchId}`,
        { admission_status: status }
      );
      toast.success("Admission status updated");
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
          <label className="block font-medium text-sm">Admission Status</label>
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
            value={status}
            onChange={(e) => setStatus(e.target.value as AdmissionStatus)}
            disabled={isLoading}
            className="w-full border rounded px-3 py-1.5 text-sm bg-white"
          >
            <option value={AdmissionStatus.OPEN}>Open</option>
            <option value={AdmissionStatus.CLOSED}>Closed</option>
          </select>
        ) : (
          <div
            className={`text-sm font-medium px-3 py-1.5 border rounded w-fit ${
              status === "OPEN"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
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

export default SchoolBranchAdmissionStatusForm;
