"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CreateSchool from "./_components/create-school-form";
import isSchoolExists from "./actions/check-school-exist"; // assuming this is an async function

type SchoolDashboardProps = {
  schoolId: string;
};

function SchoolDashboard({ schoolId }: SchoolDashboardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [schoolExists, setSchoolExists] = useState<boolean | null>(null); // To hold the result

  // Use useEffect to handle the async check for school existence
  useEffect(() => {
    const checkSchoolExistence = async () => {
      try {
        const exists = await isSchoolExists({ schoolId });
        setSchoolExists(!!exists); // Update state based on the result (null or undefined will be converted to false)
      } catch (error) {
        console.error("Error checking school existence:", error);
        setSchoolExists(false); // Handle errors (e.g., server issues)
      }
    };

    if (schoolId) {
      checkSchoolExistence(); // Only check if schoolId exists
    }
  }, [schoolId]); // Dependency on schoolId to trigger the effect

  const onClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <div>
        {schoolExists === null ? (
          <p>Loading...</p>
        ) : schoolExists ? (
          <p>School Exists!</p>
        ) : (
          <>
            <Button onClick={onClick}>
              {isLoading ? "Cancel" : "Create School"}
            </Button>
            {isLoading && <CreateSchool schoolId={schoolId} />}
          </>
        )}
      </div>
    </div>
  );
}

export default SchoolDashboard;
