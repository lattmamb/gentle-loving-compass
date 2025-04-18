
import React from "react";
import { cn } from "@/lib/utils";

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "flat" | "elevated" | "pressed";
  glow?: boolean;
  glowColor?: "blue" | "green" | "purple";
}

const NeoCard = ({ 
  children, 
  className, 
  variant = "elevated", 
  glow = false,
  glowColor = "blue",
  ...props 
}: NeoCardProps) => {
  let variantClass = "";
  
  switch (variant) {
    case "flat":
      variantClass = "neo-flat";
      break;
    case "pressed":
      variantClass = "neo-pressed";
      break;
    case "elevated":
    default:
      variantClass = "neo-elevated";
      break;
  }
  
  let glowClass = "";
  if (glow) {
    switch (glowColor) {
      case "green":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-green-500/20 after:blur-xl after:-z-10";
        break;
      case "purple":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-purple-500/20 after:blur-xl after:-z-10";
        break;
      case "blue":
      default:
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-blue-500/20 after:blur-xl after:-z-10";
        break;
    }
  }
  
  return (
    <div 
      className={cn("p-6 rounded-xl", variantClass, glowClass, className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export default NeoCard;
