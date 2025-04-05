
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function FloatingNavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Vehicles",
      link: "/vehicles",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Locations",
      link: "/locations",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "Pricing",
      link: "/pricing",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
