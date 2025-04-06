
import React, { memo } from "react";
import UnifiedBackground from "@/components/ui/unified-background";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

// Optimize with memoization to prevent unnecessary re-renders
const HeroBackground = memo(function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <UnifiedBackground 
      type="combined" 
      intensity="medium" 
      className="min-h-[70vh] py-16 flex flex-col justify-center bg-gradient-to-b from-[#11151e] to-[#1a1f2e]"
    >
      {children}
    </UnifiedBackground>
  );
});

export default HeroBackground;

