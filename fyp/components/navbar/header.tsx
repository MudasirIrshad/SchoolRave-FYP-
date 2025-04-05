import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/navbar/hamburger";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import SignOutBtn from "./signout-btn";
import PreSignUpDialog from "./pre-sign-up-dialog";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full flex justify-between items-center bg-slate-100">
      <div>{session && <Hamburger />}</div>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={74} height={74} />
        </Link>
      </div>
      <div className="flex items-center p-4 gap-4 h-16 text-black">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <div>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image ?? ""}
                    alt={session?.user?.name ?? ""}
                  />
                  <AvatarFallback>
                    {session?.user?.name?.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {session?.user.name}
                  </span>
                  <span className="truncate text-xs">
                    {session?.user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <span className="font-medium uppercase">
                  {session?.user?.name ?? ""}
                </span>
                {/* <span className="text-gray-500">{user?.email ?? ""}</span> */}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                <SignOutBtn />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          // <DropdownMenu>
          //   <DropdownMenuTrigger asChild>
          //     <Button
          //       size="lg"
          //       className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          //     >
          //       <Avatar className="h-8 w-8 rounded-lg">
          //         <AvatarImage
          //           src={session?.user.image}
          //           alt={session?.user.name}
          //         />
          //         <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          //       </Avatar>
          //       <div className="grid flex-1 text-left text-sm leading-tight">
          //         <span className="truncate font-semibold">
          //           {session?.user.name}
          //         </span>
          //         <span className="truncate text-xs">
          //           {session?.user.email}
          //         </span>
          //       </div>
          //       <ChevronsUpDown className="ml-auto size-4" />
          //     </Button>
          //   </DropdownMenuTrigger>
          //   <DropdownMenuContent
          //     className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          //     side={"right"}
          //     // side={isMobile ? "bottom" : "right"}
          //     align="end"
          //     sideOffset={4}
          //   >
          //     <DropdownMenuLabel className="p-0 font-normal">
          //       <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          //         <Avatar className="h-8 w-8 rounded-lg">
          //           <AvatarImage
          //             src={session?.user.image}
          //             alt={session?.user.name}
          //           />
          //           <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          //         </Avatar>
          //         <div className="grid flex-1 text-left text-sm leading-tight">
          //           <span className="truncate font-semibold">
          //             {session?.user.name}
          //           </span>
          //           <span className="truncate text-xs">
          //             {session?.user.email}
          //           </span>
          //         </div>
          //       </div>
          //     </DropdownMenuLabel>

          //     <DropdownMenuSeparator />
          //     <DropdownMenuItem>
          //       <LogOut />
          //       <SignOutBtn />
          //     </DropdownMenuItem>
          //   </DropdownMenuContent>
          // </DropdownMenu>
          <>
            <Link href={"/sign-in"}>
              <Button variant={"ghost"}>Sign In</Button>
            </Link>
            <PreSignUpDialog />
            {/* <Link href={"/sign-up"}>
              <Button variant={"ghost"}>Sign Up</Button>
            </Link> */}
          </>
        )}
      </div>
    </header>
  );
}
