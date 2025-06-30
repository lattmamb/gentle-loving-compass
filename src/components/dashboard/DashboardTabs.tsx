
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LuxuryDashboard from "@/components/luxury/LuxuryDashboard";
import TokenizedAssets from "@/components/community/TokenizedAssets";
import CommunityGovernance from "@/components/community/CommunityGovernance";
import RuralImpactDashboard from "@/components/rural/RuralImpactDashboard";

const DashboardTabs: React.FC = () => {
  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="bg-white/5 border border-white/10 grid w-full grid-cols-4">
        <TabsTrigger value="overview" className="data-[state=active]:bg-green-600">
          Overview
        </TabsTrigger>
        <TabsTrigger value="assets" className="data-[state=active]:bg-green-600">
          My Assets
        </TabsTrigger>
        <TabsTrigger value="governance" className="data-[state=active]:bg-green-600">
          Governance
        </TabsTrigger>
        <TabsTrigger value="impact" className="data-[state=active]:bg-green-600">
          Impact
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <LuxuryDashboard 
          userCarbonSavings={2847}
          milesElectric={12450}
          activeBookings={2}
        />
      </TabsContent>
      
      <TabsContent value="assets" className="mt-6">
        <TokenizedAssets />
      </TabsContent>
      
      <TabsContent value="governance" className="mt-6">
        <CommunityGovernance />
      </TabsContent>
      
      <TabsContent value="impact" className="mt-6">
        <RuralImpactDashboard />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
