
import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, MapPin, Users, Car, Leaf } from 'lucide-react';

interface WatchAppProps {
  appType: 'home' | 'fleet' | 'charging' | 'impact' | 'notifications';
  isActive: boolean;
}

const appConfigs = {
  home: {
    title: 'Unity Fleet',
    icon: <Car size={24} className="text-green-400" />,
    content: (
      <div className="space-y-3 text-center">
        <div className="text-2xl font-bold text-white">Model 3</div>
        <div className="text-sm text-green-400">Available</div>
        <div className="flex items-center justify-center space-x-2">
          <Battery size={12} className="text-blue-400" />
          <span className="text-xs text-white/80">85%</span>
        </div>
      </div>
    )
  },
  fleet: {
    title: 'Fleet',
    icon: <Users size={24} className="text-blue-400" />,
    content: (
      <div className="space-y-2 text-center">
        <div className="text-lg font-semibold text-white">3 Available</div>
        <div className="text-xs text-white/60">Model S • Model 3 • Model Y</div>
        <div className="w-full bg-white/20 rounded-full h-1 mt-2">
          <div className="bg-green-400 h-1 rounded-full w-3/4"></div>
        </div>
      </div>
    )
  },
  charging: {
    title: 'Charging',
    icon: <Zap size={24} className="text-yellow-400" />,
    content: (
      <div className="space-y-2 text-center">
        <div className="text-lg font-bold text-white">The Link</div>
        <div className="flex items-center justify-center space-x-1">
          <MapPin size={12} className="text-red-400" />
          <span className="text-xs text-white/80">0.3 mi</span>
        </div>
        <div className="text-xs text-green-400">Available</div>
      </div>
    )
  },
  impact: {
    title: 'Impact',
    icon: <Leaf size={24} className="text-emerald-400" />,
    content: (
      <div className="space-y-2 text-center">
        <div className="text-sm font-semibold text-white">CO₂ Saved</div>
        <div className="text-xl font-bold text-emerald-400">2.1k kg</div>
        <div className="text-xs text-white/60">This Month</div>
      </div>
    )
  },
  notifications: {
    title: 'Alerts',
    icon: <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>,
    content: (
      <div className="space-y-2 text-center">
        <div className="text-sm font-semibold text-white">Booking Confirmed</div>
        <div className="text-xs text-white/60">Model 3 • Tomorrow 9AM</div>
        <div className="text-xs text-green-400">Ready for pickup</div>
      </div>
    )
  }
};

const WatchApp: React.FC<WatchAppProps> = ({ appType, isActive }) => {
  const config = appConfigs[appType];

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.8,
        y: isActive ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-4"
        animate={{ 
          scale: isActive ? 1.1 : 1,
          rotateY: isActive ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
      >
        {config.icon}
      </motion.div>
      
      <div className="text-xs font-medium text-white/80 mb-3 uppercase tracking-wider">
        {config.title}
      </div>
      
      {config.content}
    </motion.div>
  );
};

export default WatchApp;
