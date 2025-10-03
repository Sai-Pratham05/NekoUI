"use client";
import { NavBarComponent } from "@/components/landingpage/nav-bar";
import { HeroSection } from "@/components/landingpage/herosection";
import DemoOne from "@/components/landingpage/neonlights";

export default function Home() {
  return (
    <>
      <NavBarComponent />
      <HeroSection />
      <DemoOne />
    </>
  );
}
