
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

interface FilterContentProps {
  vehicleTypes: string[];
  selectedTypes: string[];
  toggleType: (type: string) => void;
  allFeatures: string[];
  selectedFeatures: string[];
  toggleFeature: (feature: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  resetFilters: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterContent: React.FC<FilterContentProps> = ({
  vehicleTypes,
  selectedTypes,
  toggleType,
  allFeatures,
  selectedFeatures,
  toggleFeature,
  priceRange,
  setPriceRange,
  resetFilters,
  isMobile = false,
  onClose
}) => {
  return (
    <>
      {isMobile && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Filters</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8"
          >
            <X size={16} />
          </Button>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Price Range (Daily)</h3>
        <div className="mb-2">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={1000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as number[])}
            className="py-4"
          />
        </div>
        <div className="flex justify-between text-sm text-white/70">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Vehicle Type</h3>
        <div className="space-y-2">
          {vehicleTypes.map((type) => (
            <label key={type} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500 border-white/20 bg-transparent"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              <span className="ml-2 text-white/80">{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Features</h3>
        <div className="space-y-2">
          {allFeatures.slice(0, 5).map((feature) => (
            <label key={feature} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500 border-white/20 bg-transparent"
                checked={selectedFeatures.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />
              <span className="ml-2 text-white/80">{feature}</span>
            </label>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="w-full mt-4 border-white/10 text-white hover:bg-white/10"
      >
        Reset Filters
      </Button>
    </>
  );
};

export default FilterContent;
