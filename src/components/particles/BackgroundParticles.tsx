
import React from "react";
import { useParticleAnimation } from "@/hooks/useParticleAnimation";

const BackgroundParticles = () => {
  const { canvasRef } = useParticleAnimation({
    particleDensity: 50,
    particleSize: 1.5,
    particleColor: "#ffffff"
  });
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default BackgroundParticles;
