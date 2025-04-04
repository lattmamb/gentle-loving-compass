
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassmorphicCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  expanded?: boolean;
}

export default function GlassmorphicCard({
  title,
  children,
  className,
  expanded = false,
}: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ skewX: 10 }}
      whileHover={{ 
        height: expanded ? 254 : undefined, 
        skewX: 0,
        transition: { duration: 0.4 }
      }}
      className={cn(
        "w-[190px] h-[120px] p-2 bg-[rgba(198,198,198,0.34)] rounded-lg backdrop-blur-md",
        "border-b-[3px] border-b-[rgba(255,255,255,0.44)]", 
        "border-l-2 border-l-[rgba(255,255,255,0.545)]",
        "shadow-[-40px_50px_30px_rgba(0,0,0,0.28)]",
        "transform skew-x-[10deg] transition-all duration-400 overflow-hidden",
        "text-white",
        className
      )}
    >
      <div className="p-4 flex flex-row gap-[5px] self-start">
        <div className="w-[10px] h-[10px] rounded-full bg-[#ff605c] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd44] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#00ca4e] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></div>
      </div>
      {title && (
        <h1 className="text-center m-5 text-[rgb(218,244,237)] text-shadow-[-10px_5px_10px_rgba(0,0,0,0.573)]">
          {title}
        </h1>
      )}
      {children}
    </motion.div>
  );
}
