import React from "react";
import SidebarRoutes from "./sidebar-routes";
import Link from "next/link";

async function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex justify-center">
        <Link href="/">
          <h1 className="text-primary font-bold text-2xl font-open">
            SchoolRave
          </h1>
        </Link>
      </div>
      <div>
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
