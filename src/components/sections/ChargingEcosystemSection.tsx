
import React from "react";
import { motion } from "framer-motion";
import { Battery, Cpu } from "lucide-react";
import ChargingPredictor from "@/components/ai/ChargingPredictor";
import FoamCard from "@/components/foam/FoamCard";

const ChargingEcosystemSection: React.FC = () => {
  return (
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
  );
};

export default ChargingEcosystemSection;
