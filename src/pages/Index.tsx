
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import LuxuryHeroSection from "@/components/luxury/LuxuryHeroSection";
import LuxuryVehicleCard from "@/components/luxury/LuxuryVehicleCard";
import UnityFleetPlans from "@/components/subscriptions/UnityFleetPlans";
import RuralImpactDashboard from "@/components/rural/RuralImpactDashboard";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section with Unity Fleet messaging */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
              alt="Rural Illinois Electric Transportation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="absolute inset-0 ambient-glow z-10" />
          
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="tesla-heading leading-tight">
                  Unity Fleet &amp; The Link
                  <br />
                  <span className="text-green-400">Ecosystem</span>
                </h1>
                <p className="tesla-subheading max-w-3xl mx-auto">
                  Transforming rural Illinois through community-owned electric transportation, 
                  sustainable charging infrastructure, and workforce empowerment. 
                  Building the future together, one community at a time.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                <div className="glass-luxury p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-green-400 mb-2">247</div>
                  <div className="text-sm text-white/80">Jobs Created</div>
                </div>
                <div className="glass-luxury p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-blue-400 mb-2">15</div>
                  <div className="text-sm text-white/80">Communities Served</div>
                </div>
                <div className="glass-luxury p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-purple-400 mb-2">$2.8M</div>
                  <div className="text-sm text-white/80">Local Economic Impact</div>
                </div>
                <div className="glass-luxury p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-yellow-400 mb-2">156</div>
                  <div className="text-sm text-white/80">Training Graduates</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="tesla-button group">
                  <span>Join the Community</span>
                </button>
                <button className="tesla-button-dark group">
                  <span>View Impact Dashboard</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Rural Impact Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <RuralImpactDashboard />
          </div>
        </section>
        
        {/* Featured Vehicles Section - Updated messaging */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="tesla-heading mb-6">
                Community Electric Fleet
              </h2>
              <p className="tesla-subheading max-w-3xl mx-auto">
                Reliable, clean transportation designed for rural Illinois. 
                Every mile drives community prosperity and environmental stewardship.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.slice(0, 3).map((vehicle, index) => (
                <LuxuryVehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Unity Fleet Subscription Plans */}
        <UnityFleetPlans />
        
        {/* Community Ownership Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-12 rounded-3xl text-center"
            >
              <h2 className="tesla-heading mb-6">
                Own Your Energy Future
              </h2>
              <p className="tesla-subheading mb-12 max-w-4xl mx-auto">
                The Link charging network is owned by the communities it serves. 
                Purchase tokens to earn from clean energy infrastructure while 
                supporting local economic development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-green-400 mb-4">Solar Powered</div>
                  <div className="text-sm text-white/80">100% renewable energy from community-owned solar farms</div>
                </div>
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-blue-400 mb-4">Tokenized</div>
                  <div className="text-sm text-white/80">Community ownership through blockchain-based tokens</div>
                </div>
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-purple-400 mb-4">Profitable</div>
                  <div className="text-sm text-white/80">Earn returns while supporting rural development</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="tesla-button">
                  Explore Token Ownership
                </button>
                <button className="tesla-button-dark">
                  View Link Network
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIAssistant />
      <NavBarDemo />
    </div>
  );
};

export default Index;
