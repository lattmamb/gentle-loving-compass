
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=80"
          alt="Tesla Model S"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 ambient-glow z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="tesla-heading leading-tight">
              Illinois Clean Energy
              <br />
              Transit Revolution
            </h1>
            <p className="tesla-subheading max-w-2xl mx-auto">
              Premium electric vehicle subscriptions powered by 100% renewable energy. 
              Experience the future of sustainable transportation across Illinois.
            </p>
          </div>
          
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
          >
            <div className="glass-luxury p-6 rounded-2xl text-center">
              <div className="text-3xl font-light text-white mb-2">70%</div>
              <div className="text-sm text-white/70">Illinois Clean Grid</div>
            </div>
            <div className="glass-luxury p-6 rounded-2xl text-center">
              <div className="text-3xl font-light text-white mb-2">42%</div>
              <div className="text-sm text-white/70">Wind Energy Powered</div>
            </div>
            <div className="glass-luxury p-6 rounded-2xl text-center">
              <div className="text-3xl font-light text-white mb-2">4.2k</div>
              <div className="text-sm text-white/70">kg CO₂ Saved/Year</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/vehicles" className="tesla-button group">
              <span className="flex items-center space-x-2">
                <span>Explore Fleet</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <button className="tesla-button-dark group">
              <span className="flex items-center space-x-2">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </span>
            </button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;
