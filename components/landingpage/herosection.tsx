import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AvatarCirclesMain } from "@/components/landingpage/avatarcircles";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <div className="text-center lg:text-left">
              <AnimatedShinyText>✨Introducing Neko UI</AnimatedShinyText>
            </div>
            <div className="text-center space-y-2 mx-auto lg:text-left lg:mx-0">
              <h1 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter lg:mx-0">
                Minimal, consistent, and powerful UI library for developers.
              </h1>
            </div>
            <p className="text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              Neko UI provides thoughtfully crafted, responsive components with
              consistent design and fluid interactions, enabling developers to
              accelerate product development, ensure scalability, and deliver
              polished user experiences effortlessly.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="default" className="cursor-pointer">
                Get Started
              </Button>
              <Button variant="outline" className="cursor-pointer">
                Get Templates
              </Button>
            </div>
            <AvatarCirclesMain />
          </div>
          <Image
            alt="Mobile app screenshot"
            className="object-contain rounded-lg w-full h-auto"
            height="396"
            src="https://i.postimg.cc/PJH9XmgZ/Unique-and-realistic-image-of-a-black-cat-sitting-gracefully-under-a-full-moon.jpg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
