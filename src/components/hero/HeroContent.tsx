
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroContentProps {
  mousePosition: { x: number; y: number };
}

export default function HeroContent({ mousePosition }: HeroContentProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, z: -30 }}
        animate={{ opacity: 1, y: 0, z: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="transform-style-3d"
        style={{
          transformStyle: "preserve-3d",
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
          z: 30
        }}
      >
        <p className="text-xl md:text-2xl text-blue-100/90 mb-8 max-w-2xl mx-auto font-light">
          Experience premium electric vehicles with flexible subscription plans, powered by our innovative tokenized ownership system.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex flex-col md:flex-row gap-4 justify-center mt-8 transform-style-3d"
        initial={{ opacity: 0, y: 20, z: -20 }}
        animate={{ opacity: 1, y: 0, z: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          x: mousePosition.x * -10,
          y: mousePosition.y * -10,
          z: 20,
        }}
      >
        <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group glass-card border-none">
          <Link to="/vehicles">
            <span className="inline-block transition-transform group-hover:translate-x-1">
              Book Your EV Now
            </span>
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-lg border-white/10 text-white hover:bg-white/5 glass-card backdrop-blur-md">
          <Link to="/visionos">
            Experience Atlas VisionOS
          </Link>
        </Button>
      </motion.div>
    </>
  );
}
