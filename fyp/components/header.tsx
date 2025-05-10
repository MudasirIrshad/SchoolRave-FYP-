import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { headers } from "next/headers";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  const user = await currentUser();
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Discover" },
    { href: "/search?rating=4.5", label: "Rankings" },
    { href: "#", label: "About" },
  ];

  // Add Dashboard link if user is signed in
  if (user) {
    const userRole = user.publicMetadata?.role || "GENERAL";
    const dashboardLink = {
      href:
        userRole === "SCHOOL" ? `/dashboard/school/${user.id}/schoolHome` : `/`,
      label: "Dashboard",
    };
    navLinks.splice(1, 0, dashboardLink);
  }

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
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        active={isActive(link.href)}
                      >
                        <span
                          className={`font-open ${
                            isActive(link.href)
                              ? "text-primary font-semibold"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <SignedOut>
              <div className="flex items-center space-x-3">
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
          </div>

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
                      <Button asChild className="w-full" variant="outline">
                        <Link href="/sign-up">Sign Up</Link>
                      </Button>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
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
