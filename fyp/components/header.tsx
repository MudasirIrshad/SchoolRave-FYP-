import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { headers } from "next/headers";

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
                  <Button asChild variant="outline">
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                </li>
              </SignedOut>

              <SignedIn>
                <li className="ml-4">
                  <UserButton />
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
