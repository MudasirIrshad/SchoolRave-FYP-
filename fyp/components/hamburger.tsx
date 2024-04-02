"use client";

import React from "react";
import { Menu as MenuIcon } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";

export default function Hamburger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant="ghost" onClick={toggleSidebar}>
      <MenuIcon width={100} height={100} />
    </Button>
  );
}
