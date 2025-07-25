"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdmissionApproval } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface StatusCellProps {
  id: string;
  initialStatus: AdmissionApproval | null;
}

export const StatusCell: React.FC<StatusCellProps> = ({
  id,
  initialStatus,
}) => {
  const [status, setStatus] = useState(
    initialStatus?.toLowerCase() || "pending"
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStatusChange = async (newStatus: AdmissionApproval) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(`/api/admissions/${id}/status`, {
        status: newStatus,
      });

      if (data.success) {
        setStatus(newStatus.toLowerCase());
      } else {
        console.error("Update failed:", data.error);
      }

      router.refresh();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // TypeScript now knows this is an AxiosError
        console.error(
          "Failed to update status:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        // Fallback for generic errors
        console.error("Failed to update status:", error.message);
      } else {
        // Handle cases where error isn't an Error object
        console.error("Failed to update status:", String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Badge
        className={cn(
          "text-xs px-2 py-1 rounded",
          status === "approved" && "bg-green-100 text-green-800",
          status === "pending" && "bg-yellow-100 text-yellow-800",
          status === "rejected" && "bg-red-100 text-red-800"
        )}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-6 px-2 text-xs"
            disabled={loading}
          >
            {loading ? "Updating..." : "Change"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleStatusChange(AdmissionApproval.APPROVED)}
          >
            Approve
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange(AdmissionApproval.REJECTED)}
          >
            Reject
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange(AdmissionApproval.PENDING)}
          >
            Pending
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
