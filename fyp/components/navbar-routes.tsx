"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function NavbarRoutes() {
  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
