
import React from "react";
import { TabsAnimation } from "./ui/tabs-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassmorphicCard from "./ui/glassmorphic-card";

export default function TabsSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const tabs = [
    {
      title: "Model S",
      value: "model-s",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard 
            title="Model S"
            mouseTracking={true}
            parallaxIntensity={10}
          >
            <p className="px-4 pb-4">The high-performance sedan with unmatched range</p>
          </GlassmorphicCard>
        </div>
      ),
    },
    {
      title: "Model 3",
      value: "model-3",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard 
            title="Model 3"
            mouseTracking={true}
            parallaxIntensity={10}
          >
            <p className="px-4 pb-4">The most affordable Tesla electric vehicle</p>
          </GlassmorphicCard>
        </div>
      ),
    },
    {
      title: "Model X",
      value: "model-x",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard 
            title="Model X"
            mouseTracking={true}
            parallaxIntensity={10}
          >
            <p className="px-4 pb-4">The high-performance SUV with unmatched versatility</p>
          </GlassmorphicCard>
        </div>
      ),
    },
    {
      title: "Model Y",
      value: "model-y",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard 
            title="Model Y"
            mouseTracking={true}
            parallaxIntensity={10}
          >
            <p className="px-4 pb-4">The compact SUV with cutting-edge technology</p>
          </GlassmorphicCard>
        </div>
      ),
    },
    {
      title: "Cybertruck",
      value: "cybertruck",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard 
            title="Cybertruck"
            mouseTracking={true}
            parallaxIntensity={10}
          >
            <p className="px-4 pb-4">The future-forward pickup with bulletproof design</p>
          </GlassmorphicCard>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-6 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/5 to-transparent opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-blue">
            Explore Tesla Models
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Navigate through our electric vehicle lineup
          </p>
        </motion.div>

        <div className="h-[400px]">
          <TabsAnimation 
            tabs={tabs}
            containerClassName="flex justify-center mb-8"
            activeTabClassName="bg-blue-600/20 backdrop-blur-sm"
            tabClassName="text-white font-medium"
          />
        </div>
      </div>
    </motion.section>
  );
}
