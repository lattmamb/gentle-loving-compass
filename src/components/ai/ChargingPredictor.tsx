
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, MapPin, Clock, Battery, TrendingUp } from "lucide-react";
import FoamCard from "@/components/foam/FoamCard";

interface ChargingPrediction {
  stationName: string;
  distance: string;
  estimatedTime: string;
  chargingTime: string;
  availability: number;
  predictedDemand: "low" | "medium" | "high";
  coordinates: [number, number];
}

const ChargingPredictor: React.FC = () => {
  const [predictions, setPredictions] = useState<ChargingPrediction[]>([]);
  const [currentBattery, setCurrentBattery] = useState(78);

  useEffect(() => {
    // Simulate AI predictions
    const mockPredictions: ChargingPrediction[] = [
      {
        stationName: "Unity Solar Hub - Downtown",
        distance: "2.3 mi",
        estimatedTime: "8 min",
        chargingTime: "24 min",
        availability: 85,
        predictedDemand: "low",
        coordinates: [40.7128, -74.0060]
      },
      {
        stationName: "Community Energy Center",
        distance: "4.7 mi",
        estimatedTime: "12 min",
        chargingTime: "18 min",
        availability: 60,
        predictedDemand: "medium",
        coordinates: [40.7589, -73.9851]
      },
      {
        stationName: "Rural Wind Station",
        distance: "8.1 mi",
        estimatedTime: "18 min",
        chargingTime: "15 min",
        availability: 95,
        predictedDemand: "low",
        coordinates: [40.6782, -73.9442]
      }
    ];
    
    setPredictions(mockPredictions);
  }, []);

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "low": return "text-green-400";
      case "medium": return "text-yellow-400";
      case "high": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <FoamCard className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-light text-gradient">AI Charging Optimization</h3>
        <div className="flex items-center space-x-2">
          <Battery className="w-5 h-5 text-green-400" />
          <span className="text-lg font-medium">{currentBattery}%</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="foam-block p-4 hover:bg-white/5 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <h4 className="font-medium">{prediction.stationName}</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{prediction.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{prediction.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Battery className="w-3 h-3" />
                    <span>Charge: {prediction.chargingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span className={getDemandColor(prediction.predictedDemand)}>
                      {prediction.predictedDemand} demand
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-medium text-green-400">
                  {prediction.availability}%
                </div>
                <div className="text-xs text-white/50">available</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="foam-block p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">AI Recommendation</span>
        </div>
        <p className="text-sm text-white/80">
          Based on your usage patterns, we recommend charging at Unity Solar Hub. 
          Optimal charging window: 2:30 PM - 3:00 PM for minimal wait time.
        </p>
      </div>
    </FoamCard>
  );
};

export default ChargingPredictor;
