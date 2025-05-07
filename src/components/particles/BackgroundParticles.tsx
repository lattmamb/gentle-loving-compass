
import React from "react";
import { useParticleAnimation } from "@/hooks/useParticleAnimation";

const BackgroundParticles = () => {
  const { canvasRef } = useParticleAnimation({
    particleDensity: 35,
    particleSize: 1.2,
    particleColor: "#ffffff"
  });
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default BackgroundParticles;
