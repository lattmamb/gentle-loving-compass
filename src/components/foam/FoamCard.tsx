
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FoamCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "elevated" | "pressed" | "interactive";
  glow?: boolean;
  onClick?: () => void;
}

const FoamCard: React.FC<FoamCardProps> = ({
  children,
  className,
  variant = "elevated",
  glow = false,
  onClick
}) => {
  const variants = {
    elevated: "foam-block hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
    pressed: "bg-[#0f1419] shadow-[inset_8px_8px_16px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(255,255,255,0.05)]",
    interactive: "foam-block foam-block-hover cursor-pointer"
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        variants[variant],
        glow && "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-blue-500/10 after:to-purple-500/10 after:blur-xl after:-z-10",
        className
      )}
      onClick={onClick}
      whileHover={{ scale: variant === "interactive" ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FoamCard;
