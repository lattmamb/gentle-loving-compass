
import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Shield, Star } from "lucide-react";
import FoamCard from "@/components/foam/FoamCard";

const FeaturesSection: React.FC = () => {
  return (
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
  );
};

export default FeaturesSection;
