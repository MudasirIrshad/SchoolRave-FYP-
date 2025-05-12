"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import LoadingSpinner from "@/components/loading-spinner";
import { saveUserRole } from "@/app/(auth)/auth-action";

export default function ChooseRoleForm() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"SCHOOL" | "GENERAL" | null>(
    null
  );
  const [isPending, startTransition] = useTransition();
  const { signOut } = useClerk();

  const handleRoleSelection = (role: "SCHOOL" | "GENERAL") => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (!selectedRole) return;

    startTransition(async () => {
      try {
        // Save the role using server action
        const userId = await saveUserRole(selectedRole);

        // Redirect based on role
        if (selectedRole === "SCHOOL") {
          router.push(`/dashboard/school/${userId}/schoolHome`);
        } else {
          // router.push(`/dashboard/user/${userId}`);
          router.push(`/`);
        }
      } catch (error) {
        console.error("Error saving user role:", error);
      }
    });
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-up");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Select Your Role</CardTitle>
          <CardDescription>
            Please choose how you&apos;ll be using our platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Button
              variant={selectedRole === "SCHOOL" ? "default" : "outline"}
              onClick={() => handleRoleSelection("SCHOOL")}
              disabled={isPending}
            >
              I&apos;m a School
            </Button>
            <Button
              variant={selectedRole === "GENERAL" ? "default" : "outline"}
              onClick={() => handleRoleSelection("GENERAL")}
              disabled={isPending}
            >
              I&apos;m a Normal User
            </Button>
          </div>

          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={!selectedRole || isPending}
          >
            {isPending ? <LoadingSpinner color="white" /> : "Continue"}
          </Button>
        </CardContent>
        <div className="p-4 text-center">
          <Button variant="link" onClick={handleSignOut}>
            Back to Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
}
