
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BackgroundBoxesDemo() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
          Your Tesla Experience Awaits
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
          Subscribe to drive the world's most advanced electric vehicles with flexible plans and no long-term commitments.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700">
            <Link to="/vehicles">
              Browse Vehicles
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10">
            <Link to="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Button 
          variant="ghost" 
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
          className="text-white/80 hover:text-white animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}
