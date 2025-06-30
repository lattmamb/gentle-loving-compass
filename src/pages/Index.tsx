
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Shield, Star } from "lucide-react";

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
                  Unity Fleet &amp; The Link
                  <br />
                  <span className="text-green-400 font-normal">Ecosystem</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Transforming rural Illinois through community-owned electric transportation, 
                  sustainable charging infrastructure, and workforce empowerment.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-4 text-lg font-medium">
                  <Link to="/vehicles">
                    <span>Explore Vehicles</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 rounded-none px-12 py-4 text-lg font-medium">
                  <Link to="/dashboard">
                    <span>View Impact</span>
                  </Link>
                </Button>
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

        {/* Stats Section - Tesla-style clean metrics */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-green-400 mb-2">247</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">15</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-purple-400 mb-2">$2.8M</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Economic Impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-yellow-400 mb-2">156</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Training Graduates</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Vehicles Section - Tesla-style product showcase */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Community Electric Fleet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Reliable, clean transportation designed for rural Illinois. 
                Every mile drives community prosperity and environmental stewardship.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {vehicles.slice(0, 3).map((vehicle, index) => (
                <LuxuryVehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 rounded-none px-8 py-3">
                <Link to="/vehicles">
                  <span>View All Vehicles</span>
                </Link>
              </Button>
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

        {/* The Link Network Section - Tesla-style feature highlight */}
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
                      <p className="text-white/60">Tokenized ownership model for local investment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Profitable Returns</h3>
                      <p className="text-white/60">Earn while supporting rural development</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 rounded-none px-8 py-3">
                  Learn About Token Ownership
                </Button>
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
                Rural Impact Dashboard
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
