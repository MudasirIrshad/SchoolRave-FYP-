"use client";
// import { useAuth, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
// import SearchInput from "./search-input";
// import { isTeacher } from "@/lib/teacher";

export default function NavbarRoutes() {
  //   const { userId } = useAuth();
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isSchoolPage = pathname?.includes("/school");
  const isUserPage = pathname?.includes("/user");

  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">{/* <SearchInput /> */}</div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isSchoolPage || isUserPage ? (
          <div>
            <Link href={"/"}>
              <Button size={"sm"} variant={"ghost"}>
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {isSchoolPage && (
              <div>
                <Link href={"/school"}>
                  <Button size={"sm"} variant={"ghost"}>
                    School Portal
                  </Button>
                </Link>
              </div>
            )}
            {isUserPage && (
              <div>
                <Link href={"/user"}>
                  <Button size={"sm"} variant={"ghost"}>
                    User Portal
                  </Button>
                </Link>
              </div>
            )}
            {isAdminPage && (
              <div>
                <Link href={"/admin"}>
                  <Button size={"sm"} variant={"ghost"}>
                    Admin Portal
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </>
  );
}
