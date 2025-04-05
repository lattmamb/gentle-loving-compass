
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  tooltip?: string;
}

const plans: Plan[] = [
  {
    id: "weekly",
    name: "Weekly",
    price: "$249",
    period: "/week",
    description: "Perfect for short-term flexibility",
    features: [
      "Cancel anytime",
      "Swap vehicle once per week",
      "200 miles included per day",
      "Insurance included",
      "Basic maintenance included",
    ],
    tooltip: "Approximately $30/day with weekly commitment"
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$849",
    period: "/month",
    description: "Our most popular plan",
    features: [
      "30-day minimum term",
      "Swap vehicle twice per month",
      "Unlimited miles",
      "Full insurance coverage",
      "All maintenance included",
      "Priority booking",
      "Exclusive vehicle access"
    ],
    popular: true,
    tooltip: "Best value for regular drivers"
  },
  {
    id: "quarterly",
    name: "3-Month",
    price: "$699",
    period: "/month",
    description: "Committed subscription with savings",
    features: [
      "3-month minimum term",
      "Swap vehicle twice per month",
      "Unlimited miles",
      "Premium insurance",
      "All maintenance included",
      "Priority booking & support",
      "Fleet vehicle upgrades",
      "Token rewards program"
    ],
    tooltip: "Save 18% compared to monthly plan"
  },
  {
    id: "semiannual",
    name: "6-Month",
    price: "$590",
    period: "/month",
    description: "Path to ownership program",
    features: [
      "6-month minimum term",
      "Swap vehicle twice per month",
      "Unlimited miles",
      "Premium insurance",
      "All maintenance included",
      "Priority booking & support",
      "Fleet vehicle upgrades",
      "Token rewards program",
      "Ownership option after 6 months"
    ],
    tooltip: "Save 30% compared to monthly plan with ownership options"
  }
];

export default function SubscriptionPlans() {
  return (
    <TooltipProvider>
      <section className="py-16 px-6" id="subscription-plans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Flexible Subscription Plans
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the plan that fits your needs with no hidden fees. All plans include insurance, maintenance and roadside assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "backdrop-blur-xl border-white/10 shadow-lg relative overflow-hidden",
                  plan.popular ? "bg-blue-900/20" : "bg-white/5"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    {plan.name}
                    {plan.tooltip && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={16} className="text-white/70 hover:text-white cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{plan.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/70">{plan.period}</span>
                  </div>
                  <p className="text-sm text-white/70 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3 text-blue-400">
                          <Check size={16} />
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={cn(
                      "w-full",
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-white/10 hover:bg-white/20"
                    )}
                    asChild
                  >
                    <Link to="/book">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}

import { Link } from "react-router-dom";
