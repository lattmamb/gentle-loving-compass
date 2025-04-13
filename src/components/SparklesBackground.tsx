
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

interface SparklesCoreProps {
  id?: string;
  background?: string;
  particleSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
}

// Default export as before
export default function SparklesBackground({
  className,
  children
}: SparklesBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const numberOfParticles = Math.min(
        Math.floor(window.innerWidth * window.innerHeight * 0.00005),
        100
      );
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-50"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Add a named export called SparklesCore that matches what's used in Index.tsx
export const SparklesCore: React.FC<SparklesCoreProps> = ({ 
  id = "tsparticles", 
  background = "transparent", 
  particleSize = 0.8, 
  particleDensity = 50, 
  particleColor = "#3b82f6", 
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

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const numberOfParticles = particleDensity;
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * particleSize + particleSize/2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: particleColor,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const rgb = p.color.replace(/^#/, '').match(/.{1,2}/g);
        const r = parseInt(rgb?.[0] || 'ff', 16);
        const g = parseInt(rgb?.[1] || 'ff', 16);
        const b = parseInt(rgb?.[2] || 'ff', 16);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleColor, particleDensity, particleSize]);

  if (!mounted) return null;

  return (
    <div id={id} className={cn("relative w-full h-full", className)} style={{ background }}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
    </div>
  );
};
