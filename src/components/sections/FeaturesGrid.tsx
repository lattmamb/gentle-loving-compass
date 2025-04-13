
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/particles/SparklesCore";
import { ShieldCheck, Zap, Clock, HeartPulse, MapPin, ExternalLink } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default function FeaturesGrid() {
  return (
    <motion.section 
      className="py-32 px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleSize={0.8}
          particleDensity={50}
          particleColor="#3b82f6"
          className="w-full h-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Tesla Subscription
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of transportation with flexibility and convenience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck className="text-blue-400" />}
            title="Insurance Included"
            description="Comprehensive coverage with every subscription plan for worry-free driving."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<Zap className="text-blue-400" />}
            title="Unlimited Charging"
            description="Access to Tesla's entire Supercharger network included at no additional cost."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<Clock className="text-blue-400" />}
            title="Flexible Terms"
            description="Choose daily, weekly, or monthly plans to fit your lifestyle and budget."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<HeartPulse className="text-blue-400" />}
            title="Premium Maintenance"
            description="Regular maintenance and service included with every subscription."
            delay={0.7}
          />
          
          <FeatureCard
            icon={<MapPin className="text-blue-400" />}
            title="Delivery & Pickup"
            description="Complimentary white-glove delivery and pickup wherever you need."
            delay={0.9}
          />
          
          <FeatureCard
            icon={<ExternalLink className="text-blue-400" />}
            title="Vehicle Swapping"
            description="Flexibility to change vehicles during your subscription period."
            delay={1.1}
          />
        </div>
      </div>
    </motion.section>
  );
}
