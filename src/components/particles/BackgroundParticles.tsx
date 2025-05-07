
import React from "react";
import { useParticleAnimation } from "@/hooks/useParticleAnimation";

const BackgroundParticles = () => {
  const { canvasRef } = useParticleAnimation({
    particleDensity: 35,
    particleSize: 1.2,
    particleColor: "#ffffff",
    particleOpacity: 0.3,
    particleSpeed: 0.4
  });
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default BackgroundParticles;
