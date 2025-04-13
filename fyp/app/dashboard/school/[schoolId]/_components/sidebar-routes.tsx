"use client";

import {
  BarChart,
  Compass,
  FileText,
  Layout,
  List,
  Newspaper,
} from "lucide-react";
import SidebarItem from "./sidebar-items";
import { useParams, usePathname } from "next/navigation";
export default function SidebarRoutes() {
  const params = useParams();
  const schoolId = params.schoolId;
  const guestRoutes = [
    { icon: Layout, label: "Dashboard", href: "/" },
    { icon: Compass, label: "Browse", href: "/search" },
  ];
  const schoolRoutes = [
    { icon: List, label: "Home", href: `/dashboard/school/${schoolId}/home` },
    {
      icon: FileText,
      label: "Create Post",
      href: `/dashboard/school/${schoolId}/createPost`,
    },
  ];
  const pathname = usePathname();
  const isSchoolPage = pathname?.includes("/school");
  const routes = isSchoolPage ? schoolRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
