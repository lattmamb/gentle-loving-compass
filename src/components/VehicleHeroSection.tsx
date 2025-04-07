
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ParticleAnimation from "./ParticleAnimation";

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
    <div className="relative min-h-[50vh] py-16 flex flex-col justify-center overflow-hidden bg-[#11151e]">
      {/* Subtle particle animation in background */}
      <ParticleAnimation 
        count={20}
        colors={["#3b82f6", "#60a5fa"]}
        speed="slow"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
              Experience Tesla Electrified
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Browse through our premium Tesla collection with flexible subscription options
            </p>
            
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <Input 
                placeholder="Search vehicles..."
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white w-full"
              />
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"].map((model) => (
                <Button 
                  key={model}
                  variant={selectedModel === model ? "default" : "outline"}
                  onClick={() => handleModelClick(model)}
                  className={cn(
                    "border-white/10 transition-colors",
                    selectedModel === model 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-transparent hover:bg-white/5 text-white/90"
                  )}
                >
                  {model}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
