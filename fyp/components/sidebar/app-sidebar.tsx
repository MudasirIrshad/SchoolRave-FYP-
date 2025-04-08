import { BookOpen, Bot, SquareTerminal } from "lucide-react";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

const schoolNav = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
    isActive: true,
    items: [
      { title: "Admissions", url: "/dashboard/admissions" },
      { title: "Reviews", url: "/dashboard/reviews" },
    ],
  },
  {
    title: "Profile",
    url: "/school/profile",
    icon: BookOpen,
    items: [
      { title: "Edit Info", url: "/school/profile/edit" },
      { title: "Change Password", url: "/school/profile/password" },
    ],
  },
];

const userNav = [
  {
    title: "Explore Schools",
    url: "/explore",
    icon: Bot,
    isActive: true,
    items: [
      { title: "Top Rated", url: "/explore/top-rated" },
      { title: "Nearby", url: "/explore/nearby" },
    ],
  },
  {
    title: "My Applications",
    url: "/user/applications",
    icon: BookOpen,
    items: [
      { title: "Pending", url: "/user/applications/pending" },
      { title: "Accepted", url: "/user/applications/accepted" },
    ],
  },
];

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const session = await getServerSession(authOptions);

  const user = {
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    avatar: session?.user?.image ?? undefined,
    role: session?.user?.role ?? "USER", // Default role
  };

  // Dynamically select sidebar routes
  const navData = user.role === "SCHOOL" ? schoolNav : userNav;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarContent>
        {navData.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              <Link href={item.url} className="hover:underline">
                <item.icon className="w-4 h-4" />
                {item.title}
              </Link>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((child) => (
                  <SidebarMenuItem key={child.title}>
                    <SidebarMenuButton asChild isActive={child.isActive}>
                      <Link href={child.url}>{child.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
