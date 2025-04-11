
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
  const baseStyles = "rounded-2xl bg-gradient-to-br from-[#1e2432] to-[#141821] p-6 relative overflow-hidden";
  
  const variantStyles = {
    normal: "",
    interactive: "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)]",
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
        borderStyles,
        variant === "interactive" && "cursor-pointer",
        "shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.07)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FoamBlock;
