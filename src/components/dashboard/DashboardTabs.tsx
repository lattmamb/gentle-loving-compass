
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LuxuryDashboard from "@/components/luxury/LuxuryDashboard";
import TokenizedAssets from "@/components/community/TokenizedAssets";
import CommunityGovernance from "@/components/community/CommunityGovernance";
import RuralImpactDashboard from "@/components/rural/RuralImpactDashboard";
import SocialTransitNetwork from "@/components/community/SocialTransitNetwork";
import LocalBusinessIntegration from "@/components/community/LocalBusinessIntegration";
import GamifiedSustainability from "@/components/community/GamifiedSustainability";
import { motion } from "framer-motion";

const DashboardTabs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="luxury-card"
    >
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="glass-luxury border border-white/10 grid w-full grid-cols-7 mb-8">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="social" 
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Social
          </TabsTrigger>
          <TabsTrigger 
            value="business" 
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Business
          </TabsTrigger>
          <TabsTrigger 
            value="rewards" 
            className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Rewards
          </TabsTrigger>
          <TabsTrigger 
            value="assets" 
            className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Assets
          </TabsTrigger>
          <TabsTrigger 
            value="governance" 
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Governance
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs font-medium transition-all duration-300"
          >
            Impact
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuxuryDashboard 
              userCarbonSavings={2847}
              milesElectric={12450}
              activeBookings={2}
            />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="social" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SocialTransitNetwork />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="business" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LocalBusinessIntegration />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="rewards" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GamifiedSustainability />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="assets" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TokenizedAssets />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="governance" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CommunityGovernance />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="impact" className="mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <RuralImpactDashboard />
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default DashboardTabs;
