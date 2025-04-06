
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  selectedModel: string;
  onModelClick: (model: string) => void;
}

export default function ModelSelector({ selectedModel, onModelClick }: ModelSelectorProps) {
  const models = ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"];
  
  return (
    <motion.div 
      className="flex flex-wrap gap-2 justify-center pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {models.map((model) => (
        <Button 
          key={model}
          variant={selectedModel === model ? "default" : "outline"}
          onClick={() => onModelClick(model)}
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
  );
}
