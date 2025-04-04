
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 flex flex-col opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-full"
              style={{ marginTop: `${i * 10}vh` }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            />
          ))}
          
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-screen absolute top-0"
              style={{ left: `${i * 10}vw` }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.5 }}
              transition={{ 
                delay: i * 0.1 + 0.5, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
            Your Tesla Experience Awaits
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Subscribe to drive the world's most advanced electric vehicles with flexible plans and no long-term commitments.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group">
            <Link to="/vehicles">
              <span className="inline-block transition-transform group-hover:translate-x-1">
                Browse Vehicles
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10">
            <Link to="/pricing">
              View Pricing
            </Link>
          </Button>
        </motion.div>

        {/* Animated car illustration */}
        <motion.div 
          className="relative w-full h-64 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 flex justify-center"
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, -1, 0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/unity-fleet.webp" 
              alt="Tesla Fleet" 
              className="h-full object-contain neo-glow-blue"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
          className="text-white/80 hover:text-white"
        >
          <motion.svg 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </motion.svg>
        </Button>
      </motion.div>
    </div>
  );
}
