import React from "react";

function SchoolIdPage({ params }: { params: { schoolId: string } }) {
  return <div>{params.schoolId}</div>;
}

export default SchoolIdPage;
