
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Users, Zap, TrendingUp, Vote, MapPin } from "lucide-react";

interface AssetData {
  id: string;
  name: string;
  location: string;
  totalTokens: number;
  ownedTokens: number;
  monthlyRevenue: number;
  status: "active" | "construction" | "planned";
  type: "charging_hub" | "solar_farm" | "community_center";
}

const mockAssets: AssetData[] = [
  {
    id: "link-1",
    name: "Carbondale Community Hub",
    location: "Carbondale, IL",
    totalTokens: 10000,
    ownedTokens: 250,
    monthlyRevenue: 3200,
    status: "active",
    type: "charging_hub"
  },
  {
    id: "link-2", 
    name: "Marion Solar Farm",
    location: "Marion, IL",
    totalTokens: 15000,
    ownedTokens: 180,
    monthlyRevenue: 2800,
    status: "construction",
    type: "solar_farm"
  },
  {
    id: "link-3",
    name: "Murphysboro Transit Center",
    location: "Murphysboro, IL",
    totalTokens: 8000,
    ownedTokens: 320,
    monthlyRevenue: 1950,
    status: "active",
    type: "community_center"
  }
];

const TokenizedAssets: React.FC = () => {
  const totalInvestment = mockAssets.reduce((sum, asset) => 
    sum + (asset.ownedTokens * 10), 0
  );
  
  const monthlyEarnings = mockAssets.reduce((sum, asset) => 
    sum + (asset.monthlyRevenue * (asset.ownedTokens / asset.totalTokens)), 0
  );

  return (
    <div className="space-y-8">
      {/* Portfolio Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Your Link Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Coins className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">${totalInvestment.toLocaleString()}</div>
            <div className="text-sm text-white/60">Total Investment</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">${monthlyEarnings.toFixed(0)}</div>
            <div className="text-sm text-white/60">Monthly Earnings</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{mockAssets.length}</div>
            <div className="text-sm text-white/60">Assets Owned</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Vote className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">12.5%</div>
            <div className="text-sm text-white/60">Avg. ROI</div>
          </div>
        </div>
      </motion.div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockAssets.map((asset, index) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-lg">{asset.name}</CardTitle>
                    <div className="flex items-center text-white/60 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{asset.location}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={asset.status === "active" ? "default" : "secondary"}
                    className={
                      asset.status === "active" ? "bg-green-500/20 text-green-400" :
                      asset.status === "construction" ? "bg-orange-500/20 text-orange-400" :
                      "bg-blue-500/20 text-blue-400"
                    }
                  >
                    {asset.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Your Ownership</span>
                  <span className="text-white font-medium">
                    {((asset.ownedTokens / asset.totalTokens) * 100).toFixed(1)}%
                  </span>
                </div>
                
                <div className="luxury-progress">
                  <div 
                    className="luxury-progress-bar"
                    style={{ width: `${(asset.ownedTokens / asset.totalTokens) * 100}%` }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Tokens Owned</span>
                    <div className="text-white font-medium">{asset.ownedTokens.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Monthly Revenue</span>
                    <div className="text-white font-medium">${asset.monthlyRevenue.toLocaleString()}</div>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button className="tesla-button-dark flex-1" size="sm">
                    Buy More Tokens
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white" size="sm">
                    Details
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

export default TokenizedAssets;
