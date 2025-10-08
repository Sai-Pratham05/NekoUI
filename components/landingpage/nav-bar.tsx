"use client";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ModeToggle } from "@/components/landingpage/modetoggle";

export function NavBarComponent() {
  const navItems = [
    { name: "About", url: "#", icon: Home },
    { name: "Components", url: "#", icon: User },
    { name: "Templates", url: "#", icon: Briefcase },
    { name: "Docs", url: "/docs", icon: FileText },
  ];

  return <NavBar items={navItems} rightComponent={<ModeToggle />} />;
}
