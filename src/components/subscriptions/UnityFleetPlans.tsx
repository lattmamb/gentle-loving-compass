
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Car, Home, Infinity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  community?: boolean;
}

const unityFleetPlans: SubscriptionPlan[] = [
  {
    id: "flexride",
    name: "FlexRide",
    price: "$299",
    period: "/month",
    description: "Perfect for occasional community travel and errands",
    icon: <Car className="h-6 w-6" />,
    features: [
      "40 hours monthly usage",
      "Community hub pickup/dropoff",
      "Insurance included",
      "Basic maintenance covered",
      "Mobile app access",
      "Community event transportation"
    ]
  },
  {
    id: "takehome",
    name: "Take-Home",
    price: "$599",
    period: "/month",
    description: "Ideal for families needing reliable daily transportation",
    icon: <Home className="h-6 w-6" />,
    popular: true,
    features: [
      "Vehicle at your home",
      "Unlimited personal miles",
      "Full insurance coverage",
      "All maintenance included",
      "Priority vehicle selection",
      "Family account management",
      "Home charging setup",
      "24/7 roadside assistance"
    ]
  },
  {
    id: "allaccess",
    name: "All-Access",
    price: "$899",
    period: "/month",
    description: "Complete mobility freedom with community benefits",
    icon: <Infinity className="h-6 w-6" />,
    community: true,
    features: [
      "Any vehicle, anytime",
      "Unlimited fleet swapping",
      "Premium insurance",
      "Concierge maintenance",
      "Community governance voting",
      "Link token earnings",
      "Priority customer support",
      "Beta feature access",
      "Corporate account options"
    ]
  }
];

const UnityFleetPlans: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="tesla-heading mb-6">Unity Fleet Subscription Plans</h2>
          <p className="tesla-subheading max-w-3xl mx-auto">
            Choose the plan that fits your rural lifestyle. All plans support community 
            ownership and sustainable transportation across Southern Illinois.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {unityFleetPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "luxury-card relative overflow-hidden transition-all duration-500",
                plan.popular && "scale-105 border-blue-400/50",
                plan.community && "border-purple-400/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-blue-600 text-white rounded-none rounded-bl-lg px-3 py-1">
                    <Star size={12} className="mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              {plan.community && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-purple-600 text-white rounded-none rounded-bl-lg px-3 py-1">
                    <Users size={12} className="mr-1" />
                    COMMUNITY
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    plan.popular ? "bg-blue-500/20 text-blue-400" :
                    plan.community ? "bg-purple-500/20 text-purple-400" :
                    "bg-green-500/20 text-green-400"
                  )}>
                    {plan.icon}
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-light text-white mb-2">
                  {plan.name}
                </CardTitle>
                
                <div className="mb-4">
                  <span className="text-4xl font-light text-white">{plan.price}</span>
                  <span className="text-white/70 text-lg">{plan.period}</span>
                </div>
                
                <p className="text-sm text-white/70">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full transition-all duration-300",
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" :
                    plan.community ? "bg-purple-600 hover:bg-purple-700" :
                    "tesla-button-dark"
                  )}
                >
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Community Benefits */}
        <div className="mt-16 glass-card p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-light text-white mb-4">Community Benefits</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Every Unity Fleet subscription contributes to local economic development, 
            workforce training, and community-owned clean energy infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-luxury p-4 rounded-xl">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-medium">Local Jobs</div>
              <div className="text-white/60 text-sm">Support rural employment</div>
            </div>
            <div className="glass-luxury p-4 rounded-xl">
              <GraduationCap className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-medium">Skills Training</div>
              <div className="text-white/60 text-sm">Build technical expertise</div>
            </div>
            <div className="glass-luxury p-4 rounded-xl">
              <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-medium">Community Ownership</div>
              <div className="text-white/60 text-sm">Share in the success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnityFleetPlans;
