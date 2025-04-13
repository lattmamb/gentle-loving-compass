
import React from "react";
import { ColorVariant } from "@/types";

interface ColorVariantPreviewProps {
  variants: ColorVariant[];
  isModel3?: boolean;
}

const ColorVariantPreview: React.FC<ColorVariantPreviewProps> = ({ variants, isModel3 }) => {
  return (
    <div className="absolute bottom-4 left-4 flex space-x-1">
      {variants.slice(0, 5).map((variant, index) => (
        <div 
          key={index}
          className={`w-4 h-4 rounded-full border ${
            isModel3 && variant.color === "#a82a2a" ? "border-red-300 w-5 h-5 ring-2 ring-red-500/30" : "border-white/50"
          }`}
          style={{ backgroundColor: variant.color }}
          title={variant.name}
        />
      ))}
    </div>
  );
};

export default ColorVariantPreview;
