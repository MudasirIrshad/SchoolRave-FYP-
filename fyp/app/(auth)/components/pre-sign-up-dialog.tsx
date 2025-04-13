"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

export default function PreSignUpDialog() {
  const router = useRouter();

  const [role, setRole] = useState("GENERAL");
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    sessionStorage.setItem("role", role);
    console.log("Saved role to session:", role);
    router.push("/sign-up");
    router.refresh();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          Sign up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select what are you?</DialogTitle>
          <DialogDescription>
            Are you a normal User or a School?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <RadioGroup value={role} onValueChange={setRole}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="GENERAL" id="general" />
              <Label htmlFor="general">User</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="SCHOOL" id="school" />
              <Label htmlFor="school">School</Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
