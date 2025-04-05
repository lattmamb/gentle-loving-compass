
import React from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import ParticleAnimation from "@/components/ParticleAnimation";
import { motion } from "framer-motion";

export interface LoadingAnimationProps {
  variant?: "fullscreen" | "inline" | "button";
  size?: "sm" | "md" | "lg";
  message?: string | null;
  className?: string;
}

export function LoadingAnimation({
  variant = "inline",
  size = "md",
  message = null,
  className,
}: LoadingAnimationProps) {
  // Size mapping for the loader
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  // Fullscreen loading overlay with particles
  if (variant === "fullscreen") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
      >
        <div className="relative h-40 w-40">
          <ParticleAnimation
            count={20}
            colors={["#3b82f6", "#60a5fa", "#93c5fd"]}
            maxSize={3}
            minSize={1}
            speed="medium"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className={cn("text-primary animate-spin", sizeMap[size])} />
          </div>
        </div>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-center text-muted-foreground"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    );
  }

  // Button loading spinner (smaller, inline)
  if (variant === "button") {
    return <Loader className={cn("animate-spin", sizeMap.sm, className)} />;
  }

  // Default inline loading spinner
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Loader className={cn("animate-spin", sizeMap[size])} />
      {message && <span className="text-muted-foreground">{message}</span>}
    </div>
  );
}
