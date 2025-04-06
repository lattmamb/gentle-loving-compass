
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VehicleHeroHeader from "./VehicleHeroHeader";
import ModelSelector from "./ModelSelector";
import HeroBackground from "./HeroBackground";

interface VehicleHeroSectionProps {
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

export default function VehicleHeroSection({ 
  onSearchChange,
  searchValue = ""
}: VehicleHeroSectionProps) {
  const [selectedModel, setSelectedModel] = useState("");
  
  const handleModelClick = (model: string) => {
    setSelectedModel(model);
    onSearchChange?.(model);
  };
  
  return (
    <HeroBackground>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <VehicleHeroHeader />
          
          <SearchBar 
            searchValue={searchValue} 
            onSearchChange={onSearchChange}
          />
          
          <ModelSelector 
            selectedModel={selectedModel}
            onModelClick={handleModelClick}
          />
        </div>
      </div>
    </HeroBackground>
  );
}
