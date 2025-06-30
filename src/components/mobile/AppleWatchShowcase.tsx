
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WatchDevice from './WatchDevice';
import WatchApp from './WatchApp';
import { useScrollPhysics, useWatchInteraction } from '@/hooks/useScrollPhysics';

const appSequence = ['home', 'fleet', 'charging', 'impact', 'notifications'] as const;

const AppleWatchShowcase: React.FC = () => {
  const { progress, isActive, elementRef } = useScrollPhysics({
    trigger: '.watch-showcase'
  });
  
  const { currentApp, setCurrentApp, isInteracting, handleCrownScroll } = useWatchInteraction();
  
  // Calculate transformations based on scroll progress
  const rotation = progress * 360 - 180;
  const scale = 0.5 + (progress * 0.5);
  const watchScale = Math.max(0.4, 0.7 + (Math.sin(progress * Math.PI) * 0.3));
  
  // Auto-advance through apps based on scroll position
  useEffect(() => {
    const appIndex = Math.floor(progress * appSequence.length);
    const clampedIndex = Math.max(0, Math.min(appSequence.length - 1, appIndex));
    setCurrentApp(clampedIndex);
  }, [progress, setCurrentApp]);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="watch-showcase relative min-h-[400vh] bg-black"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
          animate={{
            scale: isActive ? 1.2 : 1,
            opacity: isActive ? 0.6 : 0.2
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            y: Math.sin(progress * 4) * 20,
            x: Math.cos(progress * 2) * 15,
            opacity: isActive ? 0.8 : 0.2
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-3 h-3 bg-green-400/20 rounded-full"
          animate={{
            y: Math.cos(progress * 3) * 25,
            x: Math.sin(progress * 2) * 20,
            opacity: isActive ? 0.6 : 0.1
          }}
        />
        
        {/* Main Watch Container */}
        <motion.div
          className="relative z-10"
          animate={{
            rotateX: progress * 15 - 7.5,
            rotateY: rotation * 0.3,
            z: isActive ? 50 : 0
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <WatchDevice
            rotation={rotation * 0.1}
            scale={watchScale}
            isInteracting={isInteracting}
          >
            <WatchApp
              appType={appSequence[currentApp]}
              isActive={isActive}
            />
          </WatchDevice>
        </motion.div>
        
        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
          animate={{ opacity: isActive ? 1 : 0.3 }}
        >
          {appSequence.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentApp ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </motion.div>
        
        {/* Side Text */}
        <motion.div
          className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4"
          animate={{ 
            opacity: isActive ? 1 : 0.5,
            x: isActive ? 0 : -20
          }}
        >
          <div className="text-white/60 text-sm uppercase tracking-wider transform -rotate-90 origin-center whitespace-nowrap">
            Unity Fleet Mobile
          </div>
        </motion.div>
        
        <motion.div
          className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4"
          animate={{ 
            opacity: isActive ? 1 : 0.5,
            x: isActive ? 0 : 20
          }}
        >
          <div className="text-white/60 text-sm uppercase tracking-wider transform rotate-90 origin-center whitespace-nowrap">
            watchOS Ready
          </div>
        </motion.div>
      </div>
      
      {/* Feature Highlights */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          animate={{
            opacity: progress > 0.8 ? 1 : 0,
            y: progress > 0.8 ? 0 : 30
          }}
        >
          <h3 className="text-2xl font-light text-white mb-4">
            Unity Fleet on Your Wrist
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Seamlessly manage your electric vehicle experience with quick access to 
            fleet status, charging stations, and community impact metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppleWatchShowcase;
