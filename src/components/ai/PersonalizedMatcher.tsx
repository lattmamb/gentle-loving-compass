
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import { Brain, Heart, Zap, MapPin, Leaf, Star, Target, TrendingUp } from "lucide-react";

interface UserPreferences {
  efficiency: number;
  performance: number;
  comfort: number;
  sustainability: number;
  budget: number;
  distance: number;
}

interface MatchResult {
  vehicle: Vehicle;
  score: number;
  reasons: string[];
  compatibility: number;
}

const PersonalizedMatcher: React.FC = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    efficiency: 70,
    performance: 60,
    comfort: 80,
    sustainability: 90,
    budget: 50,
    distance: 30
  });

  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [personalityType, setPersonalityType] = useState<"eco-warrior" | "performance-seeker" | "comfort-lover" | "balanced">("balanced");

  useEffect(() => {
    analyzePreferences();
  }, [preferences]);

  const analyzePreferences = () => {
    setIsAnalyzing(true);
    
    // Determine personality type based on preferences
    const { efficiency, performance, comfort, sustainability } = preferences;
    if (sustainability > 80 && efficiency > 70) {
      setPersonalityType("eco-warrior");
    } else if (performance > 80) {
      setPersonalityType("performance-seeker");
    } else if (comfort > 80) {
      setPersonalityType("comfort-lover");
    } else {
      setPersonalityType("balanced");
    }

    setTimeout(() => {
      const matchResults = calculateMatches();
      setMatches(matchResults);
      setIsAnalyzing(false);
    }, 1500);
  };

  const calculateMatches = (): MatchResult[] => {
    return vehicles.map(vehicle => {
      let score = 0;
      const reasons: string[] = [];

      // Efficiency scoring
      const efficiencyScore = (vehicle.specs.range / 500) * preferences.efficiency;
      score += efficiencyScore;
      if (vehicle.specs.range > 300) reasons.push("Excellent range efficiency");

      // Performance scoring
      const perfScore = (10 - vehicle.specs.acceleration) * preferences.performance / 10;
      score += perfScore;
      if (vehicle.specs.acceleration < 4) reasons.push("Outstanding acceleration");

      // Comfort scoring (based on model type)
      const comfortScore = vehicle.model.includes("S") ? preferences.comfort * 0.9 : preferences.comfort * 0.7;
      score += comfortScore;
      if (vehicle.model.includes("S")) reasons.push("Premium comfort features");

      // Sustainability scoring
      const sustainScore = vehicle.carbonSavings ? (vehicle.carbonSavings / 5000) * preferences.sustainability : 0;
      score += sustainScore;
      if (vehicle.carbonSavings && vehicle.carbonSavings > 3000) reasons.push("High environmental impact");

      // Budget scoring (inverse relationship)
      const budgetScore = (200 - vehicle.price.daily) * preferences.budget / 200;
      score += Math.max(0, budgetScore);
      if (vehicle.price.daily < 150) reasons.push("Budget-friendly pricing");

      // Availability bonus
      if (vehicle.status === "available") {
        score += 20;
        reasons.push("Available immediately");
      }

      const compatibility = Math.min(100, (score / 300) * 100);

      return {
        vehicle,
        score,
        reasons: reasons.slice(0, 3),
        compatibility: Math.round(compatibility)
      };
    }).sort((a, b) => b.score - a.score);
  };

  const preferenceCategories = [
    { key: "efficiency" as keyof UserPreferences, label: "Range Efficiency", icon: Zap, color: "blue" },
    { key: "performance" as keyof UserPreferences, label: "Performance", icon: TrendingUp, color: "red" },
    { key: "comfort" as keyof UserPreferences, label: "Comfort", icon: Heart, color: "pink" },
    { key: "sustainability" as keyof UserPreferences, label: "Sustainability", icon: Leaf, color: "green" },
    { key: "budget" as keyof UserPreferences, label: "Budget Priority", icon: Target, color: "yellow" },
    { key: "distance" as keyof UserPreferences, label: "Travel Distance", icon: MapPin, color: "purple" }
  ];

  const personalityTypes = {
    "eco-warrior": { 
      label: "Eco Warrior", 
      description: "Environmental impact is your priority",
      color: "green"
    },
    "performance-seeker": { 
      label: "Performance Seeker", 
      description: "Speed and acceleration matter most",
      color: "red"
    },
    "comfort-lover": { 
      label: "Comfort Lover", 
      description: "Luxury and comfort are essential",
      color: "purple"
    },
    "balanced": { 
      label: "Balanced User", 
      description: "You value all aspects equally",
      color: "blue"
    }
  };

  return (
    <div className="space-y-6">
      <Card className="neo-blur border-white/10 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">AI-Powered Vehicle Matching</h3>
            <p className="text-white/60">Neural algorithms analyze your preferences</p>
          </div>
        </div>

        {/* Personality Type Display */}
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <Badge className={`bg-${personalityTypes[personalityType].color}-600/20 text-${personalityTypes[personalityType].color}-400 border-${personalityTypes[personalityType].color}-500/30 mb-2`}>
                <Star size={12} className="mr-1" />
                {personalityTypes[personalityType].label}
              </Badge>
              <p className="text-white/70 text-sm">{personalityTypes[personalityType].description}</p>
            </div>
            {isAnalyzing && (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-purple-400 text-sm">Analyzing...</span>
              </div>
            )}
          </div>
        </div>

        {/* Preference Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {preferenceCategories.map(({ key, label, icon: Icon, color }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon size={16} className={`text-${color}-400`} />
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
                <span className="text-white/60 text-sm">{preferences[key]}%</span>
              </div>
              <Slider
                value={[preferences[key]]}
                onValueChange={([value]) => setPreferences(prev => ({ ...prev, [key]: value }))}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Match Results */}
      <Card className="neo-blur border-white/10 p-6">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-green-400" />
          Perfect Matches
        </h4>

        <div className="space-y-4">
          <AnimatePresence>
            {matches.slice(0, 3).map((match, index) => (
              <motion.div
                key={match.vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={match.vehicle.image}
                    alt={match.vehicle.model}
                    className="w-20 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h5 className="text-white font-medium">{match.vehicle.model}</h5>
                      <Badge className={`${
                        match.compatibility > 90 ? 'bg-green-600/20 text-green-400 border-green-500/30' :
                        match.compatibility > 80 ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' :
                        'bg-yellow-600/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {match.compatibility}% Match
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {match.reasons.map((reason, i) => (
                        <span key={i} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">
                          {reason}
                        </span>
                      ))}
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${match.compatibility}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
};

export default PersonalizedMatcher;
