"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";
import SidebarMenu from "./sidebar-menu";

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SidebarMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}
