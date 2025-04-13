
import React from "react";
import { cn } from "@/lib/utils";
import { ParticleCanvas } from "./ParticleCanvas";

interface SparklesCoreProps {
  id?: string;
  background?: string;
  particleSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({ 
  id = "tsparticles", 
  background = "transparent", 
  particleSize = 0.8, 
  particleDensity = 50, 
  particleColor = "#3b82f6", 
  className = ""
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id={id} className={cn("relative w-full h-full", className)} style={{ background }}>
      <ParticleCanvas 
        particleDensity={particleDensity}
        particleSize={particleSize}
        particleColor={particleColor}
      />
    </div>
  );
};
