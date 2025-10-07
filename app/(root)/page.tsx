"use client";
import { ReactNode } from "react";
import { NavBarComponent } from "@/components/landingpage/nav-bar";
import { HeroSection } from "@/components/landingpage/herosection";
import GlobeSection from "@/components/landingpage/globe-section";
import { HeroScroll } from "@/components/landingpage/heroscroll";
import CaseStudy from "@/components/landingpage/features";
import { MarqueeMain } from "@/components/landingpage/marquedemo";
import { FooterMain } from "@/components/landingpage/footermain";

export default function Home() {
  return (
    <>
      <NavBarComponent />
      <div className="py-20">
        <HeroSection />
        <CaseStudy />
        <HeroScroll />
        <MarqueeMain />
        <GlobeSection />
        <FooterMain />
      </div>
    </>
  );
}
