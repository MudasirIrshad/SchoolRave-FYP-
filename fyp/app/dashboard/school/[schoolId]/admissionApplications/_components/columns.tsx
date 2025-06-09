"use client";
import { ArrowUpDown, MoreHorizontal, Pencil, ViewIcon } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { Admission, AdmissionApproval } from "@/generated/prisma";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<Admission>[] = [
  {
    accessorKey: "studentName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Student Name <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "studentAge",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Age <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        D.O.B <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.original.dateOfBirth;
      return date ? format(new Date(date), "dd MMM yyyy") : "-";
    },
  },
  {
    accessorKey: "requestedClass",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Requested Class <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "nicNumber",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        NIC No. <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "religion",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Religion <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "mobileNumber",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Mobile No. <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "approval",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const { id, approval } = row.original;
      const [status, setStatus] = useState(
        approval?.toLowerCase() || "pending"
      );
      const [loading, setLoading] = useState(false);
      const router = useRouter();
      const handleStatusChange = async (newStatus: string) => {
        setLoading(true);
        try {
          const res = await fetch(`/api/admissions/${id}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
          });
          const data = await res.json();

          if (data.success) {
            setStatus(newStatus);
          } else {
            console.error("Update failed:", data.error);
          }
          router.refresh();
        } catch (error) {
          console.error("Failed to update status:", error);
          // Optionally show user error feedback here
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
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Submission Date <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.original.createdAt;
      return date ? format(new Date(date), "dd MMM yyyy") : "-";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-4 w-4 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4 p-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/admissions/applicant/${id}`}>
              <DropdownMenuItem>
                <ViewIcon className="h-4 w-4 mr-2" />
                View
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
