import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import PreSignUpDialog from "@/app/(auth)/components/pre-sign-up-dialog";
import { headers } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Discover" },
    { href: "/search?rating=4.5", label: "Rankings" },
    { href: "#", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-primary font-bold text-2xl font-open">
              SchoolRave
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-open transition-colors ${
                      isActive(link.href)
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <SignedOut>
                <li className="ml-4 flex items-center space-x-3">
                  <Button asChild>
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <PreSignUpDialog />
                </li>
              </SignedOut>

              <SignedIn>
                <li className="ml-4">
                  <UserDropdown />
                </li>
              </SignedIn>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-open ${
                        isActive(link.href)
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <SignedOut>
                    <div className="flex flex-col space-y-3 pt-4">
                      <Button asChild className="w-full">
                        <Link href="/sign-in">Sign In</Link>
                      </Button>
                      <PreSignUpDialog />
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <div className="pt-4 border-t">
                      <UserDropdown mobile />
                    </div>
                  </SignedIn>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

async function UserDropdown({ mobile = false }: { mobile?: boolean }) {
  const user = await currentUser();

  // console.log("USERDANGER: ", user);

  const initials = `${user?.firstName?.charAt(0) || ""}${
    user?.lastName?.charAt(0) || ""
  }`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`relative h-8 w-8 rounded-full ${
            mobile ? "w-full justify-start gap-2 p-2" : ""
          }`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          {mobile && (
            <span className="font-medium">
              {user?.firstName} {user?.lastName}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="w-full cursor-pointer">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="w-full cursor-pointer">
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
