import React from "react";
import { motion } from "framer-motion";
import { Battery, Zap, Car, Route, Timer } from "lucide-react";

// EV Battery Charging Animation
export const BatteryChargingLoader: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <Battery className="w-8 h-8 text-primary/60" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
      <span className="text-sm text-muted-foreground">{progress}%</span>
    </div>
  );
};

// Vehicle Assembly Animation
export const VehicleAssemblyLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-4 h-4 bg-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};

// Route Planning Animation
export const RoutePlanningLoader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Route className="w-5 h-5 text-primary animate-pulse" />
      <div className="flex space-x-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [-5, 0, -5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Subscription Card Animation
export const SubscriptionCardLoader: React.FC = () => {
  return (
    <div className="w-64 h-40 bg-card/50 rounded-xl border border-border/50 p-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          x: [-100, 300]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="space-y-3">
        <div className="h-4 bg-muted/50 rounded animate-pulse" />
        <div className="h-3 bg-muted/30 rounded w-3/4 animate-pulse" />
        <div className="h-6 bg-muted/40 rounded w-1/2 animate-pulse" />
      </div>
    </div>
  );
};

// Fleet Movement Animation
export const FleetMovementLoader: React.FC = () => {
  return (
    <div className="relative w-32 h-8 bg-muted/20 rounded-full overflow-hidden">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        animate={{
          x: [-20, 140]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Car className="w-6 h-6 text-primary" />
      </motion.div>
      
      {/* Multiple vehicles */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        animate={{
          x: [-40, 120]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.3,
          ease: "easeInOut"
        }}
      >
        <Car className="w-5 h-5 text-primary/60" />
      </motion.div>
    </div>
  );
};

// Vehicle Availability Pulse
export const VehicleAvailabilityPulse: React.FC<{ available: boolean }> = ({ available }) => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className={`w-3 h-3 rounded-full ${available ? 'bg-green-400' : 'bg-yellow-400'}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
      <span className="text-sm text-muted-foreground">
        {available ? 'Available' : 'In Transit'}
      </span>
    </div>
  );
};

// ETA Timer Animation
export const ETATimerLoader: React.FC<{ eta: string }> = ({ eta }) => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Timer className="w-4 h-4 text-primary" />
      </motion.div>
      <span className="text-sm font-medium">ETA: {eta}</span>
    </div>
  );
};

// Skeleton Loader for Vehicle Cards
export const VehicleCardSkeleton: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 space-y-4">
      <div className="aspect-video bg-muted/50 rounded-lg animate-pulse" />
      <div className="space-y-2">
        <div className="h-6 bg-muted/50 rounded animate-pulse" />
        <div className="h-4 bg-muted/30 rounded w-3/4 animate-pulse" />
        <div className="flex space-x-2">
          <div className="h-8 bg-muted/40 rounded flex-1 animate-pulse" />
          <div className="h-8 bg-muted/40 rounded w-20 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Page Loading Animation
export const PageLoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <motion.div
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Loading EV Fleet</h3>
          <BatteryChargingLoader progress={75} />
        </div>
      </div>
    </div>
  );
};