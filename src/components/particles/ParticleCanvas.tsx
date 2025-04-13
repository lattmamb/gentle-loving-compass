
import React from "react";
import { cn } from "@/lib/utils";
import { useParticleAnimation } from "@/hooks/useParticleAnimation";

interface ParticleCanvasProps {
  particleDensity?: number;
  particleSize?: number;
  particleColor?: string;
  className?: string;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ 
  particleDensity = 50,
  particleSize = 2,
  particleColor,
  className = ""
}) => {
  const { canvasRef, mounted } = useParticleAnimation({
    particleDensity,
    particleSize,
    particleColor
  });

  if (!mounted) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className={cn("absolute inset-0 z-0", className)}
    />
  );
};
