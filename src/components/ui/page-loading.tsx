import React from "react";
import { motion } from "framer-motion";
import { Zap, Battery, Car, Route } from "lucide-react";

interface PageLoadingProps {
  message?: string;
  progress?: number;
}

export const PageLoading: React.FC<PageLoadingProps> = ({ 
  message = "Loading EV Fleet", 
  progress = 75 
}) => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-8 max-w-md">
        {/* Animated Logo */}
        <motion.div
          className="relative mx-auto w-24 h-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        {/* Loading Message */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">{message}</h3>
          
          {/* Battery Progress */}
          <div className="flex items-center justify-center space-x-3">
            <Battery className="w-5 h-5 text-primary" />
            <div className="w-48 h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="flex justify-center space-x-6">
          {[Car, Route, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-8 h-8 text-primary/60"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoading;