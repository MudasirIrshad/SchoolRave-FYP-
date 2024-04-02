import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";

export default async function Header() {
  const { userId } = await auth();

  return (
    <header className="flex justify-between items-center bg-slate-100">
      {/* <div>{userId && <SidebarTrigger className="w-11 h-11" />}</div> */}
      <div>{userId && <Hamburger />}</div>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={88} height={88} />
        </Link>
      </div>
      <div className="flex items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
