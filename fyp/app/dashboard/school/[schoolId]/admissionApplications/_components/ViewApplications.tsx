import { Admission } from "@/generated/prisma";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

interface ViewApplicationsProps {
  schoolId: string;
  admissions: Admission[];
}
async function ViewApplications({ admissions }: ViewApplicationsProps) {
  return (
    <div>
      <DataTable columns={columns} data={admissions!} />
    </div>
  );
}

export default ViewApplications;
