
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import AIAssistant from "@/components/AIAssistant";
import LuxuryDashboard from "@/components/luxury/LuxuryDashboard";
import TokenizedAssets from "@/components/community/TokenizedAssets";
import CommunityGovernance from "@/components/community/CommunityGovernance";
import RuralImpactDashboard from "@/components/rural/RuralImpactDashboard";

const user = {
  name: "Alex Johnson",
  email: "alex@example.com",
  subscription: "Unity Fleet Take-Home",
  location: "Carbondale, IL",
  communityRole: "Community Coordinator"
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {user.name}
              </h1>
              <p className="text-green-400 font-medium">
                {user.subscription} • {user.location}
              </p>
              <p className="text-sm text-white/60">
                {user.communityRole} • Building sustainable rural transportation
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
                <Link to="/vehicles">Fleet Vehicles</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/book/model-3">Book Transit</Link>
              </Button>
            </div>
          </div>
          
          {/* Unity Fleet Dashboard Tabs */}
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
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Dashboard;
