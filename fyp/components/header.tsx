import React from "react";

import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/navbar/hamburger";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="w-full flex justify-between items-center bg-slate-100">
      {/* <div>{userId && <SidebarTrigger className="w-11 h-11" />}</div> */}
      <div>{session && <Hamburger />}</div>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={88} height={88} />
        </Link>
      </div>
      <div className="flex items-center p-4 gap-4 h-16"></div>
    </header>
  );
}
