
import { useEffect, useRef, useState } from "react";
import { Particle, initializeParticles, drawParticles } from "@/utils/particleAnimations";

interface UseParticleAnimationProps {
  particleDensity: number;
  particleSize: number;
  particleColor?: string;
  particleSpeed?: number;
}

export const useParticleAnimation = ({
  particleDensity,
  particleSize,
  particleColor = "#ffffff",
  particleSpeed = 0.3
}: UseParticleAnimationProps) => {
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
      particles = initializeParticles(canvas, particleDensity, particleSize, particleColor, particleSpeed);
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
  }, [particleDensity, particleSize, particleColor, particleSpeed]);

  return { canvasRef, mounted };
};
