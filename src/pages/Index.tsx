
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import LuxuryVehicleCard from "@/components/luxury/LuxuryVehicleCard";
import UnityFleetPlans from "@/components/subscriptions/UnityFleetPlans";
import RuralImpactDashboard from "@/components/rural/RuralImpactDashboard";
import InteractiveButton from "@/components/ui/interactive-button";
import FleetIntelligenceDashboard from "@/components/fleet/FleetIntelligenceDashboard";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Shield, Star, Car, MapPin, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative bg-black">
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section - Tesla-style full viewport */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
              alt="Rural Illinois Electric Transportation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
          </div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                  Unity Fleet
                  <br />
                  <span className="text-green-400 font-normal">Transportation</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Community-owned electric vehicle fleet serving rural Illinois with 
                  sustainable transportation solutions and local economic development.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <Link to="/vehicles">
                  <InteractiveButton variant="blue" className="text-white">
                    <span className="flex items-center space-x-2">
                      <Car className="w-5 h-5" />
                      <span>Browse Vehicles</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </InteractiveButton>
                </Link>
                <Link to="/dashboard">
                  <InteractiveButton variant="magenta" className="text-white">
                    <span className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>My Dashboard</span>
                    </span>
                  </InteractiveButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Fleet Intelligence Dashboard Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Fleet Management
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Real-time fleet monitoring, vehicle availability, and booking management 
                for efficient community transportation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <FleetIntelligenceDashboard />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center card-3d-hover">
                <div className="text-4xl md:text-5xl font-light text-green-400 mb-2">247</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Active Vehicles</div>
              </div>
              <div className="text-center card-3d-hover">
                <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">98%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Availability Rate</div>
              </div>
              <div className="text-center card-3d-hover">
                <div className="text-4xl md:text-5xl font-light text-purple-400 mb-2">1,247</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Community Members</div>
              </div>
              <div className="text-center card-3d-hover">
                <div className="text-4xl md:text-5xl font-light text-yellow-400 mb-2">85%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Carbon Reduction</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Vehicles Section */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Available Vehicles
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Reliable, clean transportation designed for rural Illinois. 
                Every mile drives community prosperity and environmental stewardship.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {vehicles.slice(0, 3).map((vehicle, index) => (
                <div key={vehicle.id} className="card-3d-hover">
                  <LuxuryVehicleCard
                    vehicle={vehicle}
                    index={index}
                  />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link to="/vehicles">
                <InteractiveButton variant="black" className="text-white">
                  View All Vehicles
                </InteractiveButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Flexible subscription options designed for every lifestyle and community need.
              </p>
            </motion.div>
            
            <UnityFleetPlans />
          </div>
        </section>

        {/* The Link Network Section */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-8">
                  The Link
                  <br />
                  <span className="text-green-400">Charging Network</span>
                </h2>
                <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
                  Community-owned solar charging hubs that power local economic development 
                  while providing reliable, clean energy for our fleet.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">100% Solar Powered</h3>
                      <p className="text-white/60">Renewable energy from community-owned solar farms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Community Owned</h3>
                      <p className="text-white/60">Local ownership model for community investment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Sustainable Returns</h3>
                      <p className="text-white/60">Invest while supporting rural development</p>
                    </div>
                  </div>
                </div>

                <InteractiveButton variant="facebook" className="text-white">
                  Learn About Community Ownership
                </InteractiveButton>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-96"
              >
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=800&q=80"
                  alt="Solar Charging Station"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Rural Impact Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Community Impact
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Track our collective progress in transforming rural communities through sustainable transportation.
              </p>
            </motion.div>
            
            <RuralImpactDashboard />
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
