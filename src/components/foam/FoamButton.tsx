
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FoamButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

const FoamButton: React.FC<FoamButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false
}) => {
  const variants = {
    primary: "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)]",
    secondary: "bg-gradient-to-br from-[#1e2432] to-[#141821] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
    danger: "bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[0_8px_24px_rgba(239,68,68,0.3)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(
        "relative rounded-xl font-medium transition-all duration-300 foam-block",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:-z-10",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default FoamButton;
