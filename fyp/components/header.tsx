// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import PreSignUpDialog from "@/app/(auth)/components/pre-sign-up-dialog";

// import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
// import { LogOut } from "lucide-react";
// export default async function Header() {
//   return (
//     <header className="flex justify-end items-center p-4 gap-4 h-16">
//       <SignedOut>
//         <Link href={"/sign-in"}>
//           <Button variant={"ghost"}>Sign In</Button>
//         </Link>
//         <PreSignUpDialog />
//         {/* <SignInButton />
//               <SignUpButton /> */}
//       </SignedOut>
//     </header>
//   );
// }

// "use client ";

// import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import PreSignUpDialog from "@/app/(auth)/components/pre-sign-up-dialog";
import { headers } from "next/headers";

export default function Header() {
  // const pathname = usePathname();

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Discover" },
    { href: "/search?rating=4.5", label: "Rankings" },
    { href: "#", label: "About" },
  ];

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/">
              <div className="text-primary font-bold text-2xl mr-2 font-open cursor-pointer">
                SchoolRave
              </div>
            </Link>
            <span className="bg-secondary text-white text-xs px-2 py-1 rounded">
              BETA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-open">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <div
                      className={`${
                        isActive(link.href)
                          ? "text-primary font-semibold"
                          : "text-textColor hover:text-primary transition"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild>
                  <Link href="/search">Sign In</Link>
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                      <div
                        className={`${
                          isActive(link.href)
                            ? "text-primary font-semibold"
                            : "text-textColor hover:text-primary transition"
                        } text-lg`}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                  <SignedOut>
                    <Button className="mt-4" asChild>
                      <Link href="/sign-in">Sign In</Link>
                    </Button>

                    <PreSignUpDialog />
                  </SignedOut>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
