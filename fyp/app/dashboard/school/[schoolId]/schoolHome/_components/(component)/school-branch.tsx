import { School, SchoolBranch } from "@/generated/prisma";
import React from "react";

interface SchoolBranchProps {
  initialData: School;
  items?: SchoolBranch[];
}
function CreateSchoolBranch({ initialData, items }: SchoolBranchProps) {
  return <div>SchoolBranch</div>;
}

export default CreateSchoolBranch;
