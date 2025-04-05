
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SparklesBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  density?: number; // Number of particles
  speed?: number; // Animation speed
  glow?: boolean; // Whether particles should glow
}

export default function SparklesBackground({
  className,
  children,
  density = 50,
  speed = 1,
  glow = true
}: SparklesBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Particle configuration
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }[] = [];

    // Handle resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Create particles
    const initParticles = () => {
      particles.length = 0;
      const numberOfParticles = Math.min(
        density,
        100
      );
      
      // Color variations for magic dust effect
      const colors = [
        "rgba(255, 255, 255, OPACITY)",
        "rgba(173, 216, 230, OPACITY)",
        "rgba(135, 206, 235, OPACITY)",
        "rgba(144, 238, 144, OPACITY)"
      ];
      
      for (let i = 0; i < numberOfParticles; i++) {
        const colorIndex = Math.floor(Math.random() * colors.length);
        const opacity = Math.random() * 0.5 + 0.2;
        const color = colors[colorIndex].replace("OPACITY", opacity.toString());
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: opacity,
          color: color
        });
      }
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((p) => {
        // Draw main particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        if (glow) {
          const glow = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 3
          );
          glow.addColorStop(0, p.color);
          glow.addColorStop(1, "transparent");
          
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Add slight attraction to mouse
        const dx = mousePosition.x - p.x;
        const dy = mousePosition.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          p.x += dx * 0.01;
          p.y += dy * 0.01;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [density, speed, glow]);

  if (!mounted) return null;

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-70"
      />
      <motion.div 
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
