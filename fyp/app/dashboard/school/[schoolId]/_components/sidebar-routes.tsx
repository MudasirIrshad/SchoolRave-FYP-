"use client";

import { FileText, InboxIcon, List } from "lucide-react";
import SidebarItem from "./sidebar-items";
import { useParams } from "next/navigation";

export default function SidebarRoutes() {
  const params = useParams();

  const schoolId = params.schoolId;

  const schoolRoutes = [
    {
      icon: List,
      label: "Home",
      href: `/dashboard/school/${schoolId}/schoolHome`,
    },
    {
      icon: FileText,
      label: "Create Post",
      href: `/dashboard/school/${schoolId}/createPost`,
    },
    {
      icon: InboxIcon,
      label: "Admission Applications",
      href: `/dashboard/school/${schoolId}/admissionApplications`,
    },
  ];
  const routes = schoolRoutes;
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
