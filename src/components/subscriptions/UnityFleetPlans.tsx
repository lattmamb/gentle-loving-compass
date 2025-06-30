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
    badge: "Most Popular"
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mockData.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="luxury-card h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">{plan.name}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-white/70">{plan.description}</div>
              
              <div className="text-4xl font-bold text-green-400">${plan.price}</div>
              <div className="text-white/60">per month</div>
              
              <ul className="space-y-2 mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-white/80">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 mt-6">
                Get Started
              </Button>

              {plan.badge && (
                <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                  {plan.badge}
                </Badge>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default UnityFleetPlans;
