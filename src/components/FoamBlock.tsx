
import React from "react";
import { cn } from "@/lib/utils";

interface FoamBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "normal" | "interactive" | "glow";
  borderless?: boolean;
  className?: string;
  children: React.ReactNode;
}

const FoamBlock = ({ 
  variant = "normal",
  borderless = false,
  className,
  children,
  ...props 
}: FoamBlockProps) => {
  // Use the foam-block class from our refactored CSS
  const baseStyles = "foam-block";
  
  const variantStyles = {
    normal: "",
    interactive: "foam-block-hover cursor-pointer",
    glow: "after:absolute after:inset-0 after:bg-gradient-to-tr after:from-blue-500/0 after:to-blue-500/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
  };
  
  const borderStyles = borderless 
    ? "" 
    : "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-b before:from-white/10 before:to-transparent before:-z-10";
  
  return (
    <div 
      className={cn(
        baseStyles,
        variantStyles[variant],
        !borderless && borderStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FoamBlock;
