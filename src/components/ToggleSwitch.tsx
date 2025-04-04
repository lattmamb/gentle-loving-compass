
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const ToggleSwitch = ({
  checked,
  onCheckedChange,
  disabled = false,
  className,
}: ToggleSwitchProps) => {
  return (
    <div
      onClick={() => !disabled && onCheckedChange(!checked)}
      className={cn(
        "ui-toggle",
        checked ? "bg-blue-600" : "bg-gray-700",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      <motion.span
        className="ui-toggle-thumb"
        animate={{
          x: checked ? 24 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
