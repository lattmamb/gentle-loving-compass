
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Gauge, Route } from "lucide-react";
import { Vehicle } from "@/data/vehicles";
import FoamCard from "@/components/foam/FoamCard";
import FoamButton from "@/components/foam/FoamButton";

interface VehicleShowcaseProps {
  vehicles: Vehicle[];
  onVehicleSelect?: (vehicle: Vehicle) => void;
}

const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({
  vehicles,
  onVehicleSelect
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const currentVehicle = vehicles[currentIndex];

  const nextVehicle = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    setSelectedColor(0);
  };

  const prevVehicle = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    setSelectedColor(0);
  };

  return (
    <FoamCard className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vehicle Visual */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVehicle.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative h-80 rounded-2xl overflow-hidden foam-block"
            >
              <img
                src={currentVehicle.colorVariants[selectedColor]?.image || currentVehicle.image}
                alt={currentVehicle.model}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation */}
              <button
                onClick={prevVehicle}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextVehicle}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </AnimatePresence>
          
          {/* Color Selector */}
          <div className="flex justify-center space-x-2 mt-4">
            {currentVehicle.colorVariants.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === index ? 'border-white scale-125' : 'border-white/30'
                }`}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-light text-gradient mb-2">
              Tesla {currentVehicle.model}
            </h3>
            <p className="text-white/70 text-lg">{currentVehicle.type}</p>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-4">
            <div className="foam-block p-4 text-center">
              <Route className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="text-lg font-medium">{currentVehicle.specs.range}</div>
              <div className="text-xs text-white/60">Range (mi)</div>
            </div>
            <div className="foam-block p-4 text-center">
              <Gauge className="w-6 h-6 mx-auto mb-2 text-green-400" />
              <div className="text-lg font-medium">{currentVehicle.specs.topSpeed}</div>
              <div className="text-xs text-white/60">Top Speed</div>
            </div>
            <div className="foam-block p-4 text-center">
              <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
              <div className="text-lg font-medium">{currentVehicle.specs.acceleration}s</div>
              <div className="text-xs text-white/60">0-60 mph</div>
            </div>
          </div>

          {/* Subscription Pricing */}
          <div className="foam-block p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <h4 className="font-medium mb-3">Subscription Options</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="text-center">
                <div className="font-medium text-white">${currentVehicle.price.daily}</div>
                <div className="text-white/60">Daily</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-white">${currentVehicle.price.monthly}</div>
                <div className="text-white/60">Monthly</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-white">${currentVehicle.price.yearly}</div>
                <div className="text-white/60">Yearly</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-medium mb-3">Included Features</h4>
            <div className="space-y-2">
              {currentVehicle.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <FoamButton
              variant="primary"
              className="flex-1"
              onClick={() => onVehicleSelect?.(currentVehicle)}
            >
              Subscribe Now
            </FoamButton>
            <FoamButton variant="secondary">
              Learn More
            </FoamButton>
          </div>
        </div>
      </div>
    </FoamCard>
  );
};

export default VehicleShowcase;
