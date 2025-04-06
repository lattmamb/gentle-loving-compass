
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VehicleHeroHeader from "./VehicleHeroHeader";
import ModelSelector from "./ModelSelector";
import HeroBackground from "./HeroBackground";
import FlyingVehicle from "./FlyingVehicle";

interface VehicleHeroSectionProps {
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

export default function VehicleHeroSection({ 
  onSearchChange,
  searchValue = ""
}: VehicleHeroSectionProps) {
  const [selectedModel, setSelectedModel] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleModelClick = (model: string) => {
    setSelectedModel(model);
    onSearchChange?.(model);
  };

  // Track mouse position for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // Calculate normalized position (-0.5 to 0.5)
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    
    setMousePosition({ x, y });
  };
  
  return (
    <HeroBackground>
      <div 
        className="container mx-auto px-6 relative z-10"
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-col items-center text-center perspective-2000">
          <VehicleHeroHeader />
          
          <SearchBar 
            searchValue={searchValue} 
            onSearchChange={onSearchChange}
          />
          
          <ModelSelector 
            selectedModel={selectedModel}
            onModelClick={handleModelClick}
          />

          <FlyingVehicle mousePosition={mousePosition} />
        </div>
      </div>
    </HeroBackground>
  );
}
