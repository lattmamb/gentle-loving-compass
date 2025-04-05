
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  isDarkTheme?: boolean;
  showGradient?: boolean;
}

export default function GridBackground({
  children,
  className,
  containerClassName,
  isDarkTheme = true,
  showGradient = true,
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full", containerClassName)}>
      {/* Grid background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          isDarkTheme
            ? "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            : "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          className
        )}
      />
      
      {/* Radial gradient overlay for depth effect */}
      {showGradient && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/10 to-black/5 dark:from-blue-900/20 dark:to-black/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
