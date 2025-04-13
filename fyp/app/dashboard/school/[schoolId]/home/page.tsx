import React from "react";

export default function SchoolDashboard({
  params,
}: {
  params: { schoolId: string };
}) {
  const { schoolId } = params;

  return (
    <div>
      SchoolDashboard
      <span>{schoolId}</span>
    </div>
  );
}
