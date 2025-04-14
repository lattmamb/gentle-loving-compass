
import React from "react";
import { ColorVariant } from "@/types";
import { motion } from "framer-motion";

interface ColorVariantPreviewProps {
  variants: ColorVariant[];
  isModel3?: boolean;
}

const ColorVariantPreview: React.FC<ColorVariantPreviewProps> = ({ variants, isModel3 }) => {
  return (
    <div className="absolute bottom-4 left-4 flex space-x-1.5">
      {variants.slice(0, 5).map((variant, index) => (
        <motion.div 
          key={index}
          className={`rounded-full border ${
            isModel3 && variant.color === "#a82a2a" 
              ? "border-red-300 ring-2 ring-red-500/50" 
              : "border-white/50"
          }`}
          style={{ 
            backgroundColor: variant.color,
            width: isModel3 && variant.color === "#a82a2a" ? "24px" : "16px",
            height: isModel3 && variant.color === "#a82a2a" ? "24px" : "16px",
          }}
          title={variant.name}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default ColorVariantPreview;
