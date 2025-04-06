
import React, { useState, useEffect, useRef, memo } from "react";
import SearchBar from "./SearchBar";
import VehicleHeroHeader from "./VehicleHeroHeader";
import ModelSelector from "./ModelSelector";
import HeroBackground from "./HeroBackground";
import FlyingVehicle from "./FlyingVehicle";

interface VehicleHeroSectionProps {
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

// Use memo to prevent unnecessary re-renders of the entire section
const VehicleHeroSection = memo(function VehicleHeroSection({ 
  onSearchChange,
  searchValue = ""
}: VehicleHeroSectionProps) {
  const [selectedModel, setSelectedModel] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleModelClick = (model: string) => {
    setSelectedModel(model);
    onSearchChange?.(model);
  };

  // Track mouse position for parallax effect with throttling for performance
  const handleMouseMove = (e: React.MouseEvent) => {
    // Use requestAnimationFrame for better performance
    window.requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      
      // Calculate normalized position (-0.5 to 0.5)
      const x = ((clientX - left) / width - 0.5) * 2;
      const y = ((clientY - top) / height - 0.5) * 2;
      
      setMousePosition({ x, y });
    });
  };
  
  // Use Intersection Observer for better performance
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef}>
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

            {/* Only render the heavy component when visible for performance */}
            {isVisible && <FlyingVehicle mousePosition={mousePosition} />}
          </div>
        </div>
      </HeroBackground>
    </div>
  );
});

export default VehicleHeroSection;

