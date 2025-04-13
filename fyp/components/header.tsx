import Link from "next/link";
import { Button } from "@/components/ui/button";
import PreSignUpDialog from "@/app/(auth)/components/pre-sign-up-dialog";

import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
export default async function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <Link href={"/sign-in"}>
          <Button variant={"ghost"}>Sign In</Button>
        </Link>
        <PreSignUpDialog />
        {/* <SignInButton />
              <SignUpButton /> */}
      </SignedOut>
      <SignedIn>
        {/* <UserButton /> */}
        <SignOutButton>
          <span>
            <LogOut />
            <button>Logged Out</button>
          </span>
        </SignOutButton>
      </SignedIn>
    </header>
  );
}
