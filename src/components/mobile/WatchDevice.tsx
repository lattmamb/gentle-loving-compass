
import React from 'react';
import { motion } from 'framer-motion';

interface WatchDeviceProps {
  children: React.ReactNode;
  rotation: number;
  scale: number;
  isInteracting?: boolean;
}

const WatchDevice: React.FC<WatchDeviceProps> = ({ 
  children, 
  rotation, 
  scale, 
  isInteracting = false 
}) => {
  return (
    <motion.div 
      className="watch"
      style={{
        transform: `scale(${scale}) rotateY(${rotation}deg)`,
        transformStyle: 'preserve-3d'
      }}
      animate={{
        scale: isInteracting ? scale * 1.02 : scale,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="frame">
        {children}
        
        {/* Digital Crown */}
        <motion.button
          className="sideBtn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        
        {/* Power Button */}
        <div className="powerBtn" />
        
        {/* Watch Band Dots */}
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </motion.div>
  );
};

export default WatchDevice;
