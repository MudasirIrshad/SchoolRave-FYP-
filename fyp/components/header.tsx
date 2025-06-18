import Link from "next/link";
import { headers } from "next/headers";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default async function Header() {
  let user = null;
  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  const pathname = headers().get("x-invoke-path") || "/";

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Discover" },
  ];

  // Only define dashboardHref if user exists
  const userRole = user?.publicMetadata?.role || "GENERAL";
  let userDashboardHref: string | null = null;

  if (user) {
    if (userRole === "SCHOOL") {
      userDashboardHref = `/dashboard/school/${user.id}/schoolHome`;
    } else if (userRole === "ADMIN") {
      userDashboardHref = "/dashboard/admin";
    } else {
      userDashboardHref = "/profile";
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-primary font-bold text-2xl font-open">
            SchoolRave
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map(({ href, label }) => (
                  <NavigationMenuItem key={href}>
                    <Link href={href} passHref legacyBehavior>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span
                          className={`font-open ${
                            isActive(href)
                              ? "text-primary font-semibold"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {label}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {userDashboardHref && (
                  <NavigationMenuItem>
                    <Link href={userDashboardHref} passHref legacyBehavior>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span
                          className={`font-open ${
                            isActive(userDashboardHref)
                              ? "text-primary font-semibold"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {userRole === "GENERAL" ? "Profile" : "Dashboard"}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <SignedOut>
              <div className="flex space-x-3">
                <Button asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
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
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`text-lg font-open ${
                        isActive(href)
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}

                  {userDashboardHref && (
                    <Link
                      href={userDashboardHref}
                      className={`text-lg font-open ${
                        isActive(userDashboardHref)
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {userRole === "GENERAL" ? "Profile" : "Dashboard"}
                    </Link>
                  )}

                  <SignedOut>
                    <div className="flex flex-col space-y-3 pt-4">
                      <Button asChild className="w-full">
                        <Link href="/sign-in">Sign In</Link>
                      </Button>
                      <Button asChild className="w-full" variant="outline">
                        <Link href="/sign-up">Sign Up</Link>
                      </Button>
                    </div>
                  </SignedOut>

                  <SignedIn>
                    <div className="pt-4">
                      <UserButton />
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
