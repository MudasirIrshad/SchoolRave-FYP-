"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CreateSchool from "./_components/create-school-form";
import { useSession } from "next-auth/react";

interface SchoolDashboardProps {
  schoolId: string;
}

function SchoolDashboard({ schoolId }: SchoolDashboardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = () => {
    setIsLoading(!isLoading);
  };
  const { data: session } = useSession();
  console.log("From school page.tsx", schoolId);

  return (
    <div>
      <div>
        <Button onClick={onClick}>Create School</Button>
        {isLoading && (
          <>
            <CreateSchool schoolId={schoolId} />
          </>
        )}
      </div>
    </div>
  );
}

export default SchoolDashboard;
