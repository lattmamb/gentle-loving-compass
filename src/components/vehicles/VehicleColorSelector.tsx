
import React from "react";
import { ColorVariant } from "@/types";

interface VehicleColorSelectorProps {
  colorVariants: ColorVariant[];
  selectedColor: ColorVariant;
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorVariant>>;
}

const VehicleColorSelector: React.FC<VehicleColorSelectorProps> = ({
  colorVariants,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className="mb-8">
      <h3 className="font-medium text-lg mb-3">Color Options</h3>
      <div className="flex space-x-3">
        {colorVariants.map((color) => (
          <button
            key={color.name}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor.name === color.name
                ? "border-blue-500"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color.color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select ${color.name} color`}
          ></button>
        ))}
      </div>
      <p className="text-sm text-white/60 mt-2">{selectedColor.name}</p>
    </div>
  );
};

export default VehicleColorSelector;
