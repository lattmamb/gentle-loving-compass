import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Enhanced Foam Button with multiple variants
interface EnhancedFoamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "gradient" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  glowEffect?: boolean;
}

export const EnhancedFoamButton: React.FC<EnhancedFoamButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  glowEffect = false,
  className,
  ...props
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium rounded-xl";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25",
    secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    glass: "bg-background/20 backdrop-blur-md border border-border/50 hover:bg-background/30 text-foreground",
    gradient: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground",
    outline: "border-2 border-primary bg-transparent hover:bg-primary/10 text-primary"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowEffect && "hover:shadow-lg hover:glow",
        className
      )}
      {...props}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Enhanced Foam Card with neomorphic design
interface EnhancedFoamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "pressed" | "glass" | "luxury";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  interactive?: boolean;
}

export const EnhancedFoamCard: React.FC<EnhancedFoamCardProps> = ({
  variant = "default",
  padding = "md",
  children,
  interactive = false,
  className,
  ...props
}) => {
  const baseClasses = "rounded-2xl border transition-all duration-300";
  
  const variantClasses = {
    default: "bg-card border-border/50 shadow-sm",
    elevated: "bg-card border-border/50 shadow-lg hover:shadow-xl",
    pressed: "bg-card border-border/50 shadow-inner",
    glass: "bg-card/50 backdrop-blur-md border-border/30",
    luxury: "bg-gradient-to-br from-card to-card/80 border-border/50 shadow-lg"
  };

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
    xl: "p-12"
  };

  const interactiveClasses = interactive 
    ? "hover:scale-[1.02] hover:shadow-lg cursor-pointer" 
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        interactiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Enhanced Progress Bar
interface EnhancedProgressProps {
  value: number;
  max?: number;
  variant?: "default" | "battery" | "gradient" | "rainbow";
  size?: "sm" | "md" | "lg";
  showPercentage?: boolean;
  animated?: boolean;
}

export const EnhancedProgress: React.FC<EnhancedProgressProps> = ({
  value,
  max = 100,
  variant = "default",
  size = "md",
  showPercentage = false,
  animated = true
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  const variantClasses = {
    default: "bg-primary",
    battery: "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500",
    gradient: "bg-gradient-to-r from-primary to-primary/60",
    rainbow: "bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500"
  };

  return (
    <div className="space-y-2">
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <motion.div
          className={cn("h-full rounded-full", variantClasses[variant])}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 1 : 0, ease: "easeOut" }}
        />
      </div>
      {showPercentage && (
        <div className="text-right text-sm text-muted-foreground">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

// Enhanced Badge
interface EnhancedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info" | "premium";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  pulse?: boolean;
}

export const EnhancedBadge: React.FC<EnhancedBadgeProps> = ({
  variant = "default",
  size = "md",
  children,
  pulse = false,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium border";
  
  const variantClasses = {
    default: "bg-muted text-muted-foreground border-border",
    success: "bg-green-500/20 text-green-400 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    error: "bg-red-500/20 text-red-400 border-red-500/30",
    info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    premium: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30"
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};