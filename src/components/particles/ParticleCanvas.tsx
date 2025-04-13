
import React, { useEffect, useRef, useState } from "react";
import { Particle, initializeParticles, drawParticles } from "@/utils/particleAnimations";
import { cn } from "@/lib/utils";

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
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = initializeParticles(canvas, particleDensity, particleSize, particleColor);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawParticles(ctx, particles);
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleDensity, particleSize, particleColor]);

  if (!mounted) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className={cn("absolute inset-0 z-0", className)}
    />
  );
};
