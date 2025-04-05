"use client";

import { Menu as MenuIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Hamburger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant="ghost" onClick={toggleSidebar}>
      <MenuIcon width={100} height={100} />
    </Button>
  );
}
