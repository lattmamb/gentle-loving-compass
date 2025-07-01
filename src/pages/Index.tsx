
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo";
import VehicleShowcase from "@/components/automotive/VehicleShowcase";
import SubscriptionMatcher from "@/components/subscription/SubscriptionMatcher";
import ChargingPredictor from "@/components/ai/ChargingPredictor";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Users, Shield, Star, Car, MapPin, Battery, Cpu } from "lucide-react";
import FoamCard from "@/components/foam/FoamCard";
import FoamButton from "@/components/foam/FoamButton";

const Index = () => {
  const navigate = useNavigate();

  const handleVehicleSelect = (vehicle: any) => {
    navigate(`/vehicles/${vehicle.id}`);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative bg-black">
      <Header />
      
      <main className="relative z-10">
        {/* Revolutionary Hero Section */}
        <section className="relative">
          <BackgroundBoxesDemo />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center gap-4"
          >
            <Link to="/vehicles">
              <FoamButton variant="primary" size="lg">
                <span className="flex items-center space-x-2">
                  <Car className="w-5 h-5" />
                  <span>Explore Vehicles</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </FoamButton>
            </Link>
            <Link to="/dashboard">
              <FoamButton variant="secondary" size="lg">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>My Dashboard</span>
                </span>
              </FoamButton>
            </Link>
          </motion.div>
        </section>

        {/* AI-Powered Subscription Matching */}
        <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
                AI-Powered Subscriptions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Revolutionary subscription matching that learns your lifestyle and optimizes your mobility experience.
              </p>
            </motion.div>
            
            <SubscriptionMatcher />
          </div>
        </section>

        {/* Vehicle Showcase */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
                Next-Gen Fleet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Automotive excellence reimagined for the subscription economy. Every vehicle equipped for the autonomous future.
              </p>
            </motion.div>
            
            <VehicleShowcase 
              vehicles={vehicles} 
              onVehicleSelect={handleVehicleSelect}
            />
          </div>
        </section>

        {/* AI Charging Ecosystem */}
        <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
                Intelligent Charging
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Predictive charging optimization that learns your patterns and prepares for autonomous fleet coordination.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ChargingPredictor />
              
              <div className="space-y-6">
                <FoamCard className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Battery className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-light text-gradient">Smart Grid Integration</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Vehicle-to-grid technology that optimizes energy distribution and reduces charging costs through predictive load balancing.
                  </p>
                  <div className="foam-block p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10">
                    <div className="text-sm font-medium text-green-400 mb-1">Active Integration</div>
                    <div className="text-xs text-white/60">Contributing 2.4 kW to community grid</div>
                  </div>
                </FoamCard>
                
                <FoamCard className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-light text-gradient">Autonomous Preparation</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Infrastructure ready for full autonomous operations with predictive maintenance and dynamic fleet redistribution.
                  </p>
                  <div className="foam-block p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <div className="text-sm font-medium text-purple-400 mb-1">Readiness Score</div>
                    <div className="text-xs text-white/60">92% autonomous compatibility</div>
                  </div>
                </FoamCard>
              </div>
            </div>
          </div>
        </section>

        {/* Revolutionary Features */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
                Future-Ready Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Technology that adapts, learns, and evolves with your needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FoamCard className="text-center p-6" variant="interactive">
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-medium mb-2">Predictive Charging</h3>
                <p className="text-white/60 text-sm">AI-optimized charging schedules based on usage patterns and grid demand</p>
              </FoamCard>
              
              <FoamCard className="text-center p-6" variant="interactive">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-lg font-medium mb-2">Community Network</h3>
                <p className="text-white/60 text-sm">Connected ecosystem of subscribers sharing resources and experiences</p>
              </FoamCard>
              
              <FoamCard className="text-center p-6" variant="interactive">
                <Shield className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-medium mb-2">Autonomous Ready</h3>
                <p className="text-white/60 text-sm">Infrastructure prepared for full self-driving integration and fleet coordination</p>
              </FoamCard>
              
              <FoamCard className="text-center p-6" variant="interactive">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-medium mb-2">Lifestyle Learning</h3>
                <p className="text-white/60 text-sm">Personalized recommendations that improve with every journey</p>
              </FoamCard>
            </div>
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
