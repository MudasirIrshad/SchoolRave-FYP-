"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdmissionApproval } from "@/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
      const res = await fetch(`/api/admissions/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus(newStatus.toLowerCase());
      } else {
        console.error("Update failed:", data.error);
      }

      router.refresh();
    } catch (error) {
      console.error("Failed to update status:", error);
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
