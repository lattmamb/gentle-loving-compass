import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnhancedSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vehicle-card" | "list-item" | "hero";
  animated?: boolean;
}

function EnhancedSkeleton({
  className,
  variant = "default",
  animated = true,
  ...props
}: EnhancedSkeletonProps) {
  const baseClasses = "bg-muted/50 rounded-md";
  
  const shimmerEffect = animated ? (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      animate={{
        x: [-100, 300]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  ) : null;

  switch (variant) {
    case "vehicle-card":
      return (
        <div className="bg-card rounded-xl border border-border p-4 space-y-4 relative overflow-hidden">
          {shimmerEffect}
          <div className="aspect-video bg-muted/50 rounded-lg" />
          <div className="space-y-2">
            <div className="h-6 bg-muted/50 rounded w-3/4" />
            <div className="h-4 bg-muted/30 rounded w-1/2" />
            <div className="flex space-x-2">
              <div className="h-8 bg-muted/40 rounded flex-1" />
              <div className="h-8 bg-muted/40 rounded w-20" />
            </div>
          </div>
        </div>
      );
    
    case "list-item":
      return (
        <div className="flex items-center space-x-4 p-4 relative overflow-hidden">
          {shimmerEffect}
          <div className="w-16 h-16 bg-muted/50 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-muted/50 rounded w-3/4" />
            <div className="h-4 bg-muted/30 rounded w-1/2" />
          </div>
          <div className="h-8 w-20 bg-muted/40 rounded" />
        </div>
      );
    
    case "hero":
      return (
        <div className="w-full h-96 bg-muted/50 rounded-2xl relative overflow-hidden">
          {shimmerEffect}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="h-12 bg-muted/60 rounded w-80 mx-auto" />
              <div className="h-6 bg-muted/40 rounded w-64 mx-auto" />
              <div className="h-10 bg-muted/50 rounded w-32 mx-auto" />
            </div>
          </div>
        </div>
      );
    
    default:
      return (
        <div
          className={cn(baseClasses, "relative overflow-hidden", className)}
          {...props}
        >
          {shimmerEffect}
        </div>
      );
  }
}

// Vehicle Grid Skeleton
export const VehicleGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <EnhancedSkeleton key={i} variant="vehicle-card" />
      ))}
    </div>
  );
};

// Page Loading Skeleton
export const PageLoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <EnhancedSkeleton variant="hero" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <VehicleGridSkeleton count={9} />
            </div>
            <div className="space-y-4">
              <EnhancedSkeleton className="h-32" />
              <EnhancedSkeleton className="h-48" />
              <EnhancedSkeleton className="h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Skeleton
export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <EnhancedSkeleton key={i} className="h-32" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnhancedSkeleton className="h-64" />
        <EnhancedSkeleton className="h-64" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <EnhancedSkeleton key={i} variant="list-item" />
        ))}
      </div>
    </div>
  );
};

export { EnhancedSkeleton };