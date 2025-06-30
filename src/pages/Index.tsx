
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import LuxuryHeroSection from "@/components/luxury/LuxuryHeroSection";
import LuxuryVehicleCard from "@/components/luxury/LuxuryVehicleCard";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Header />
      
      <main className="relative z-10">
        <LuxuryHeroSection />
        
        {/* Featured Vehicles Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="tesla-heading mb-6">
                Premium Electric Fleet
              </h2>
              <p className="tesla-subheading max-w-2xl mx-auto">
                Experience Illinois' finest electric vehicles, powered by clean energy
                and designed for the future of sustainable transportation.
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
        
        {/* Clean Energy Impact Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-12 rounded-3xl text-center"
            >
              <h2 className="tesla-heading mb-6">
                Powering Illinois with Clean Energy
              </h2>
              <p className="tesla-subheading mb-12 max-w-3xl mx-auto">
                Our fleet is powered by Illinois' growing renewable energy grid,
                featuring 42% wind energy and expanding solar infrastructure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-green-400 mb-4">4.2M</div>
                  <div className="text-sm text-white/80">kg CO₂ Saved Annually</div>
                </div>
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-blue-400 mb-4">70%</div>
                  <div className="text-sm text-white/80">Clean Energy Grid</div>
                </div>
                <div className="glass-luxury p-8 rounded-2xl">
                  <div className="text-4xl font-light text-yellow-400 mb-4">42%</div>
                  <div className="text-sm text-white/80">Wind Powered</div>
                </div>
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
