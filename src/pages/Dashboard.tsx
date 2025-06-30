
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

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
          <DashboardWelcome user={user} />
          <DashboardTabs />
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Dashboard;
