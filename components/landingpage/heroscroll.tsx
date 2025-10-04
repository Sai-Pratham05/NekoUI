"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pb-[5px] pt-7">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-[6rem] font-bold leading-tight">
              Ready to Use Component Library<br />
              <span className="block text-2xl font-semibold text-black dark:text-white mt-2 leading-tight text-center mx-auto max-w-4xl">
              Neko UI supports startups in rapidly building and launching products with accessible, productivity-driven tools.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://i.postimg.cc/VLWtZZ2x/dashboard2-0.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
