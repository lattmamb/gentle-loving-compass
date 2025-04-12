
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-[80vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex flex-col items-center justify-center relative z-20 max-w-5xl mx-auto text-center px-4">
        <h1 className={cn("md:text-6xl text-4xl font-bold text-white relative z-20 mb-4 tracking-tighter")}>
          Premium Tesla Experience
        </h1>
        <p className="text-center md:text-xl text-lg text-white/80 relative z-20 max-w-3xl">
          Redefining electric vehicle subscriptions with unparalleled luxury and performance
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="apple-button px-8 py-3 text-base font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all">
            Explore Vehicles
          </button>
          <button className="px-8 py-3 text-base font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
