
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Users, Leaf, Star, GraduationCap } from "lucide-react";

interface PlanFeature {
  icon: React.ReactNode;
  text: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: PlanFeature[];
  badge?: string;
  popular?: boolean;
}

const mockData: SubscriptionPlan[] = [
  {
    id: "flex-ride",
    name: "Flex Ride",
    description: "Perfect for occasional use. Access vehicles as needed with hourly billing.",
    price: 49,
    features: [
      { icon: <Check className="h-4 w-4 text-green-400" />, text: "Pay-as-you-go access" },
      { icon: <Zap className="h-4 w-4 text-green-400" />, text: "No long-term commitment" },
      { icon: <Users className="h-4 w-4 text-green-400" />, text: "Access to community vehicles" },
    ]
  },
  {
    id: "take-home",
    name: "Take-Home",
    description: "Enjoy the convenience of having a dedicated vehicle. Ideal for daily commutes and errands.",
    price: 599,
    features: [
      { icon: <Check className="h-4 w-4 text-green-400" />, text: "Dedicated vehicle" },
      { icon: <Leaf className="h-4 w-4 text-green-400" />, text: "Unlimited mileage" },
      { icon: <Star className="h-4 w-4 text-green-400" />, text: "Priority booking" },
    ],
    badge: "Most Popular",
    popular: true
  },
  {
    id: "all-access",
    name: "All-Access",
    description: "The ultimate subscription for maximum flexibility. Switch between vehicles and enjoy premium perks.",
    price: 999,
    features: [
      { icon: <Check className="h-4 w-4 text-green-400" />, text: "Access to all vehicle types" },
      { icon: <Zap className="h-4 w-4 text-green-400" />, text: "Free charging at all stations" },
      { icon: <GraduationCap className="h-4 w-4 text-green-400" />, text: "Exclusive events" },
    ]
  }
];

const UnityFleetPlans: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {mockData.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative"
        >
          <Card className={`h-full bg-black border-white/10 hover:border-white/20 transition-all duration-300 ${
            plan.popular ? 'border-green-500/50 shadow-lg shadow-green-500/10' : ''
          }`}>
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1 text-xs font-medium rounded-full">
                  {plan.badge}
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-light text-white mb-2">{plan.name}</CardTitle>
              <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Pricing */}
              <div className="text-center border-b border-white/10 pb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-light text-white">${plan.price}</span>
                  <span className="text-white/40 ml-2">/month</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                className={`w-full mt-8 rounded-none py-3 font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-transparent border border-white/30 text-white hover:bg-white hover:text-black'
                }`}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default UnityFleetPlans;
