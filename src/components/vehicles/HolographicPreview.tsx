
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vehicle } from "@/types";
import { RotateCcw, Maximize, Minimize, Zap, Eye, Layers } from "lucide-react";

interface HolographicPreviewProps {
  vehicle: Vehicle;
  isActive?: boolean;
  onToggle?: () => void;
}

const HolographicPreview: React.FC<HolographicPreviewProps> = ({ 
  vehicle, 
  isActive = false, 
  onToggle = () => {} 
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(false);
  const [viewMode, setViewMode] = useState<"exterior" | "interior" | "wireframe">("exterior");
  const [hologramIntensity, setHologramIntensity] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setHologramIntensity(prev => (prev + 1) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setRotation(prev => ({ ...prev, y: (prev.y + 1) % 360 }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRotating]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateY = ((mouseX - centerX) / centerX) * 30;
    const rotateX = ((centerY - mouseY) / centerY) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <Card className={`neo-blur border-white/10 overflow-hidden transition-all duration-500 ${
      isActive ? 'border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]' : ''
    }`}>
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-white/30'}`} />
          <span className="text-white font-medium">Holographic Preview</span>
          {isActive && <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Active</Badge>}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsRotating(!isRotating)}
            className="text-white/60 hover:text-white hover:bg-white/5"
          >
            <RotateCcw size={16} className={isRotating ? 'animate-spin' : ''} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-white/60 hover:text-white hover:bg-white/5"
          >
            {isActive ? <Minimize size={16} /> : <Maximize size={16} />}
          </Button>
        </div>
      </div>

      <div className="relative">
        {/* Holographic Display Area */}
        <div 
          className={`relative h-64 bg-gradient-radial from-black/50 to-black/90 overflow-hidden cursor-pointer ${
            isActive ? 'bg-gradient-radial from-blue-900/20 to-black/90' : ''
          }`}
          onMouseMove={handleMouseMove}
          onClick={onToggle}
        >
          {/* Grid Background */}
          {isActive && (
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
          )}

          {/* Vehicle Hologram */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: isActive ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'none'
            }}
            animate={isActive ? {
              filter: `brightness(${1 + Math.sin(hologramIntensity * 0.1) * 0.2}) hue-rotate(${hologramIntensity * 3.6}deg)`
            } : {}}
          >
            <div className="relative">
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className={`w-48 h-32 object-cover rounded-lg transition-all duration-300 ${
                  isActive ? 'opacity-80 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'opacity-60'
                }`}
              />
              
              {/* Holographic Effects */}
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-blue-500/30 rounded-lg animate-pulse" />
                  <div className="absolute inset-0 border-2 border-blue-400/50 rounded-lg" />
                  
                  {/* Scanning Lines */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent h-2"
                    animate={{ y: [0, 128, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Wireframe Overlay */}
                  {viewMode === "wireframe" && (
                    <div className="absolute inset-0 border border-blue-400/70 rounded-lg">
                      <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-0">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="border border-blue-400/30" />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>

          {/* Holographic UI Elements */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 left-4 space-y-2"
            >
              <Badge className="bg-blue-600/80 text-white text-xs">
                <Eye size={12} className="mr-1" />
                Holographic Mode
              </Badge>
              <div className="text-xs text-blue-300 font-mono">
                X: {rotation.x.toFixed(1)}° Y: {rotation.y.toFixed(1)}°
              </div>
            </motion.div>
          )}

          {/* Info Panel */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">{vehicle.model}</span>
                <div className="flex items-center space-x-1">
                  <Zap size={12} className="text-green-400" />
                  <span className="text-xs text-green-400">{vehicle.specs.range}mi</span>
                </div>
              </div>
              <div className="flex space-x-2 text-xs text-white/60">
                <span>0-60: {vehicle.specs.acceleration}s</span>
                <span>•</span>
                <span>Top: {vehicle.specs.topSpeed}mph</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* View Mode Controls */}
        {isActive && (
          <div className="p-3 border-t border-white/10 flex justify-center space-x-2">
            {[
              { id: "exterior", label: "Exterior", icon: Eye },
              { id: "interior", label: "Interior", icon: Layers },
              { id: "wireframe", label: "Wireframe", icon: RotateCcw }
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={viewMode === id ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode(id as any)}
                className={`text-xs ${viewMode === id ? "bg-blue-600" : "text-white/60 hover:text-white hover:bg-white/5"}`}
              >
                <Icon size={14} className="mr-1" />
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default HolographicPreview;
