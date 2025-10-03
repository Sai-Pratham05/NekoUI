"use client";   
import { NavBarComponent } from "@/components/landingpage/nav-bar"
import { HeroSection } from "@/components/landingpage/herosection"
import { GradientBars } from '@/components/ui/gradientbars';

export default function Home() {
  return (
    <>
      <GradientBars />
      <NavBarComponent />
      <HeroSection />
    </>
  );
}
