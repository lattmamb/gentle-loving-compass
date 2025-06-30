
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, MapPin, Clock, Percent, Gift, Star } from "lucide-react";

interface LocalBusiness {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  discount: number;
  description: string;
  specialOffer: string;
  isPartner: boolean;
  sustainabilityScore: number;
}

const LocalBusinessIntegration: React.FC = () => {
  const [businesses] = useState<LocalBusiness[]>([
    {
      id: "biz-1",
      name: "Green Leaf Café",
      category: "Restaurant",
      address: "123 Main St, Carbondale",
      rating: 4.7,
      discount: 15,
      description: "Farm-to-table dining with locally sourced ingredients",
      specialOffer: "Free coffee with any breakfast purchase",
      isPartner: true,
      sustainabilityScore: 92
    },
    {
      id: "biz-2",
      name: "EcoMarket",
      category: "Grocery",
      address: "456 Oak Ave, Carbondale",
      rating: 4.5,
      discount: 10,
      description: "Organic groceries and zero-waste products",
      specialOffer: "20% off bulk items",
      isPartner: true,
      sustainabilityScore: 88
    },
    {
      id: "biz-3",
      name: "Solar Solutions",
      category: "Energy",
      address: "789 Energy Blvd, Springfield",
      rating: 4.9,
      discount: 25,
      description: "Residential and commercial solar installations",
      specialOffer: "Free energy audit with consultation",
      isPartner: true,
      sustainabilityScore: 98
    }
  ]);

  const [loyaltyStats] = useState({
    totalPoints: 2450,
    rewardsEarned: 18,
    partnerVisits: 67,
    carbonOffset: 145
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "restaurant": return "🍽️";
      case "grocery": return "🛒";
      case "energy": return "⚡";
      case "retail": return "🏪";
      default: return "🏢";
    }
  };

  const getSustainabilityColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-yellow-400";
    if (score >= 70) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-8">
      {/* Loyalty Program Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Local Business Network</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Gift className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{loyaltyStats.totalPoints.toLocaleString()}</div>
            <div className="text-sm text-white/60">Loyalty Points</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{loyaltyStats.rewardsEarned}</div>
            <div className="text-sm text-white/60">Rewards Earned</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Store className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{loyaltyStats.partnerVisits}</div>
            <div className="text-sm text-white/60">Partner Visits</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <MapPin className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{loyaltyStats.carbonOffset}</div>
            <div className="text-sm text-white/60">kg CO₂ Offset</div>
          </div>
        </div>
      </motion.div>

      {/* Partner Businesses */}
      <div className="space-y-4">
        <h3 className="text-2xl font-light text-white mb-6">Partner Businesses</h3>
        
        {businesses.map((business, index) => (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{getCategoryIcon(business.category)}</div>
                    <div>
                      <div className="text-white font-medium text-lg">{business.name}</div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <MapPin className="h-3 w-3" />
                        <span>{business.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-sm text-white/60">{business.rating}</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          Partner
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{business.discount}%</div>
                    <div className="text-sm text-white/60">Discount</div>
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4">{business.description}</p>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gift className="h-4 w-4 text-purple-400" />
                    <span className="text-white font-medium">Special Offer</span>
                  </div>
                  <p className="text-purple-400 text-sm ml-6">{business.specialOffer}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60 text-sm">Sustainability Score:</span>
                    <span className={`font-medium ${getSustainabilityColor(business.sustainabilityScore)}`}>
                      {business.sustainabilityScore}/100
                    </span>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {business.category}
                  </Badge>
                </div>

                <div className="flex space-x-3">
                  <Button className="bg-green-600 hover:bg-green-700 flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Visit Store
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white">
                    <Percent className="h-4 w-4 mr-2" />
                    Claim Discount
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocalBusinessIntegration;
