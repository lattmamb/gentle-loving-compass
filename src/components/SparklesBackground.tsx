
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ParticleCanvas } from "@/components/particles/ParticleCanvas";

interface SparklesBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SparklesBackground({
  className,
  children
}: SparklesBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("relative w-full h-full", className)}>
      <ParticleCanvas 
        particleDensity={Math.min(
          Math.floor(window.innerWidth * window.innerHeight * 0.00005),
          100
        )}
        particleSize={2}
        className="opacity-50"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
