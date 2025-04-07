
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface ParticleAnimationProps {
  count?: number;
  colors?: string[];
  maxSize?: number;
  minSize?: number;
  speed?: "slow" | "medium" | "fast";
}

export default function ParticleAnimation({
  count = 30,
  colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"],
  maxSize = 5,
  minSize = 1,
  speed = "medium",
}: ParticleAnimationProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Configure animation speed
  const getSpeedMultiplier = () => {
    switch(speed) {
      case "slow": return 1.5;
      case "fast": return 0.6;
      case "medium":
      default: return 1;
    }
  };
  
  const speedMultiplier = getSpeedMultiplier();
  
  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: (2 + Math.random() * 4) * speedMultiplier,
        delay: Math.random() * 2
      });
    }
    
    setParticles(newParticles);
  }, [count, colors, maxSize, minSize, speedMultiplier]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: 0.5
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
