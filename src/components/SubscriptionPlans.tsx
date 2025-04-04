
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$1,499",
    period: "/month",
    description: "Perfect for short-term flexibility",
    features: [
      "Cancel anytime",
      "Swap vehicle once per month",
      "Unlimited miles",
      "Insurance included",
      "Basic maintenance included",
    ]
  },
  {
    id: "yearly",
    name: "Annual",
    price: "$999",
    period: "/month",
    description: "Our most popular plan",
    features: [
      "6-month minimum term",
      "Swap vehicle twice per month",
      "Unlimited miles",
      "Full insurance coverage",
      "All maintenance included",
      "Priority booking",
      "Exclusive vehicle access"
    ],
    popular: true
  },
  {
    id: "ownership",
    name: "Ownership",
    price: "$599",
    period: "/month",
    description: "Path to ownership program",
    features: [
      "12-month minimum term",
      "Vehicle ownership option after 3 years",
      "Unlimited miles",
      "Premium insurance",
      "All maintenance included",
      "Priority booking & support",
      "Fleet vehicle upgrades"
    ]
  }
];

export default function SubscriptionPlans() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Flexible Subscription Plans
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that fits your needs with no hidden fees. All plans include insurance, maintenance and unlimited charging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <CardTitle className="text-xl font-bold text-white">
                  {plan.name}
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
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
