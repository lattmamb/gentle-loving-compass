
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Vehicle } from "@/types";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import NeoCard from "@/components/NeoCard";
import ToggleSwitch from "@/components/ToggleSwitch";

type VehicleType = "all" | "Sedan" | "SUV" | "Truck" | "Sports";

const PricingCard = ({ 
  title, 
  price, 
  yearlyPrice, 
  isYearly, 
  features, 
  isRecommended = false,
  ctaText = "Choose Plan"
}: { 
  title: string;
  price: number;
  yearlyPrice: number;
  isYearly: boolean;
  features: string[];
  isRecommended?: boolean;
  ctaText?: string;
}) => {
  const currentPrice = isYearly ? yearlyPrice : price;
  const savings = ((price * 12) - yearlyPrice) / (price * 12) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`ui-card-3d ${isRecommended ? "neo-glow-blue" : ""}`}
    >
      <div className="neo-card h-full flex flex-col">
        {isRecommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            RECOMMENDED
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="mt-2">
            <span className="text-3xl font-bold text-white">{formatCurrency(currentPrice)}</span>
            <span className="text-white/70">/month</span>
          </div>
          {isYearly && (
            <div className="mt-1 text-green-400 text-sm">
              Save {Math.round(savings)}% with annual billing
            </div>
          )}
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-3 text-blue-400 bg-blue-500/10 p-1 rounded-full">
                  <Check size={14} />
                </div>
                <span className="text-sm text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className={`ui-glow-button w-full ${isRecommended ? "bg-blue-600 hover:bg-blue-700" : "bg-white/10 hover:bg-white/20"}`}
        >
          <span className="py-2 px-4 w-full inline-block">{ctaText}</span>
        </Button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedType, setSelectedType] = useState<VehicleType>("all");
  
  const filteredVehicles = vehicles.filter(vehicle => 
    selectedType === "all" ? true : vehicle.type === selectedType
  );

  const plans = [
    {
      title: "Basic",
      price: 799,
      yearlyPrice: 699 * 12,
      features: [
        "Access to standard models",
        "Monthly vehicle swap",
        "Basic insurance included",
        "100 miles/day included",
        "Basic maintenance included"
      ]
    },
    {
      title: "Premium",
      price: 1299,
      yearlyPrice: 1099 * 12,
      features: [
        "Access to all models",
        "Bi-weekly vehicle swap",
        "Full insurance coverage",
        "Unlimited miles",
        "All maintenance included",
        "Priority support",
        "Free supercharging"
      ],
      isRecommended: true
    },
    {
      title: "Ultimate",
      price: 1999,
      yearlyPrice: 1799 * 12,
      features: [
        "Early access to new models",
        "Weekly vehicle swap",
        "Premium insurance",
        "Unlimited miles",
        "All maintenance included",
        "24/7 concierge support",
        "Free supercharging",
        "Airport delivery & pickup"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-20 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the perfect plan for your lifestyle with no hidden fees or commitments
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-sm ${!isYearly ? "text-white" : "text-white/60"}`}>Monthly</span>
              <ToggleSwitch checked={isYearly} onCheckedChange={setIsYearly} />
              <span className={`text-sm ${isYearly ? "text-white" : "text-white/60"}`}>Yearly</span>
              <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/50">
                Save up to 20%
              </Badge>
            </div>
          </div>
          
          {/* Vehicle Type Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(["all", "Sedan", "SUV", "Truck", "Sports"] as const).map((type) => (
              <motion.button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedType === type 
                    ? "neo-pressed text-blue-400" 
                    : "neo-elevated hover:scale-105 text-white/70"
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {type === "all" ? "All Types" : type}
              </motion.button>
            ))}
          </div>
          
          {/* Subscription Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                yearlyPrice={plan.yearlyPrice}
                isYearly={isYearly}
                features={plan.features}
                isRecommended={plan.isRecommended}
              />
            ))}
          </div>
          
          {/* Vehicle Pricing Table */}
          <NeoCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Individual Vehicle Pricing</h2>
              <p className="text-white/70">Compare prices for our available vehicles</p>
            </div>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-left">Vehicle</TableHead>
                    <TableHead className="text-left">Type</TableHead>
                    <TableHead className="text-right">Monthly</TableHead>
                    <TableHead className="text-right">Annual</TableHead>
                    <TableHead className="text-center">Available</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVehicles.map((vehicle) => (
                    <TableRow key={vehicle.id} className="border-white/10 hover:bg-white/5">
                      <TableCell className="text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-md overflow-hidden">
                            <img
                              src={vehicle.image}
                              alt={vehicle.model}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-white">Tesla {vehicle.model}</div>
                            <div className="text-xs text-white/60">
                              {vehicle.type === "Sedan" ? "Electric Luxury Sedan" : 
                               vehicle.type === "SUV" ? "Electric Family SUV" :
                               vehicle.type === "Truck" ? "Electric Utility Vehicle" :
                               "Electric Sports Car"}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-white/5">
                          {vehicle.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {formatCurrency(vehicle.price.daily * 30)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-medium">{formatCurrency(vehicle.price.yearly / 12)}</div>
                        <div className="text-xs text-green-400">
                          Save {Math.round(((vehicle.price.daily * 30 * 12) - vehicle.price.yearly) / (vehicle.price.daily * 30 * 12) * 100)}%
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {vehicle.status === "available" ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10">
                            <Check size={16} className="text-green-400" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
                            <X size={16} className="text-red-400" />
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button asChild variant="outline" className="neo-button w-full">
                          <Link to={`/vehicles/${vehicle.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </NeoCard>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NeoCard>
                <h3 className="text-xl font-bold mb-3 text-white">How does the subscription work?</h3>
                <p className="text-white/70">Our subscription is simple - choose a plan, select your vehicle, and we'll deliver it to your door. You can swap vehicles according to your subscription tier, and everything from insurance to maintenance is included.</p>
              </NeoCard>
              
              <NeoCard>
                <h3 className="text-xl font-bold mb-3 text-white">Can I cancel anytime?</h3>
                <p className="text-white/70">Yes, you can cancel your monthly subscription with 30 days notice. Annual subscriptions can be cancelled with a small fee after the first 3 months.</p>
              </NeoCard>
              
              <NeoCard>
                <h3 className="text-xl font-bold mb-3 text-white">Is insurance included?</h3>
                <p className="text-white/70">Yes, all subscriptions include comprehensive insurance coverage. Premium and Ultimate plans include zero-deductible coverage for added peace of mind.</p>
              </NeoCard>
              
              <NeoCard>
                <h3 className="text-xl font-bold mb-3 text-white">What about maintenance?</h3>
                <p className="text-white/70">We handle all scheduled maintenance and repairs for your vehicle. Simply let us know through the app and we'll take care of everything.</p>
              </NeoCard>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <NeoCard className="neo-glow-blue px-8 py-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to experience the future of mobility?</h2>
              <p className="text-xl text-white/70 mb-8">Join thousands of satisfied customers who are driving the world's most advanced electric vehicles.</p>
              <Button size="lg" className="ui-glow-button text-lg">
                <span className="py-2 px-6">Start Your Journey</span>
              </Button>
            </NeoCard>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
