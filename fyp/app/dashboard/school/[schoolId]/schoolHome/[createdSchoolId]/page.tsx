"use client";
import { useParams } from "next/navigation";
import React from "react";

function SchoolIdPage() {
  const params = useParams();
  const createdSchoolId = params.createdSchoolId;
  return (
    <div>
      SchoolIdPage
      <div> {createdSchoolId} </div>
    </div>
  );
}

export default SchoolIdPage;
