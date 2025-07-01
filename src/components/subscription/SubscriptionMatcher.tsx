
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Users, MapPin, Zap, Star, ArrowRight } from "lucide-react";
import FoamCard from "@/components/foam/FoamCard";
import FoamButton from "@/components/foam/FoamButton";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  vehicleTypes: string[];
  mileageLimit: string;
  chargingIncluded: boolean;
  aiScore: number;
  recommended?: boolean;
}

const SubscriptionMatcher: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    weeklyMiles: 150,
    preferredVehicles: ["sedan", "suv"],
    chargingNeeds: "home",
    usage: "commute"
  });

  const [matchedPlans, setMatchedPlans] = useState<SubscriptionPlan[]>([]);

  useEffect(() => {
    // AI-powered plan matching simulation
    const plans: SubscriptionPlan[] = [
      {
        id: "unity-commuter",
        name: "Unity Commuter",
        price: 299,
        features: ["Weekday Access", "Home Charging", "Maintenance Included"],
        vehicleTypes: ["Model 3", "Model Y"],
        mileageLimit: "1,000 mi/month",
        chargingIncluded: true,
        aiScore: 96,
        recommended: true
      },
      {
        id: "unity-explorer",
        name: "Unity Explorer",
        price: 449,
        features: ["Unlimited Access", "Supercharger Network", "Premium Vehicles"],
        vehicleTypes: ["Model S", "Model X", "Model Y"],
        mileageLimit: "2,500 mi/month",
        chargingIncluded: true,
        aiScore: 84
      },
      {
        id: "unity-family",
        name: "Unity Family",
        price: 599,
        features: ["Multi-Vehicle Access", "Family Sharing", "Concierge Service"],
        vehicleTypes: ["Model X", "Model Y", "Model S"],
        mileageLimit: "3,500 mi/month",
        chargingIncluded: true,
        aiScore: 78
      }
    ];
    
    setMatchedPlans(plans);
  }, [userProfile]);

  return (
    <div className="space-y-6">
      <FoamCard>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-light text-gradient">AI Subscription Matching</h3>
          <div className="flex items-center space-x-2 text-sm text-white/70">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Personalized for you</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="foam-block p-3 text-center">
            <Car className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <div className="text-sm text-white/70">Weekly Miles</div>
            <div className="font-medium">{userProfile.weeklyMiles}</div>
          </div>
          <div className="foam-block p-3 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
            <div className="text-sm text-white/70">Usage</div>
            <div className="font-medium capitalize">{userProfile.usage}</div>
          </div>
          <div className="foam-block p-3 text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <div className="text-sm text-white/70">Preferred</div>
            <div className="font-medium">Sedan, SUV</div>
          </div>
          <div className="foam-block p-3 text-center">
            <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
            <div className="text-sm text-white/70">Charging</div>
            <div className="font-medium capitalize">{userProfile.chargingNeeds}</div>
          </div>
        </div>
      </FoamCard>

      <div className="space-y-4">
        {matchedPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FoamCard 
              className={`relative ${plan.recommended ? 'border-2 border-blue-500/30' : ''}`}
              variant="interactive"
              glow={plan.recommended}
            >
              {plan.recommended && (
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  AI Recommended
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-medium mb-1">{plan.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-light text-gradient">${plan.price}</span>
                    <span className="text-white/60">/month</span>
                    <div className="flex items-center space-x-1 ml-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{plan.aiScore}% match</span>
                    </div>
                  </div>
                </div>
                <FoamButton variant="primary" size="sm">
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FoamButton>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="text-sm font-medium mb-2 text-white/80">Features</h5>
                  <ul className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-white/70 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2 text-white/80">Vehicle Access</h5>
                  <div className="flex flex-wrap gap-2">
                    {plan.vehicleTypes.map((vehicle, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs">
                        {vehicle}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    {plan.mileageLimit}
                  </div>
                </div>
              </div>
              
              <div className="foam-block p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Charging Included</span>
                </div>
                <p className="text-xs text-white/70 mt-1">
                  Unlimited access to Unity charging network with renewable energy sources
                </p>
              </div>
            </FoamCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionMatcher;
