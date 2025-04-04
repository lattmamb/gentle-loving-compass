
import React from "react";
import { TabsAnimation } from "./ui/tabs-animation";
import { motion } from "framer-motion";
import GlassmorphicCard from "./ui/glassmorphic-card";

export default function TabsSection() {
  const tabs = [
    {
      title: "Model S",
      value: "model-s",
      content: (
        <div className="w-full h-full flex justify-center items-center">
          <GlassmorphicCard title="Model S">
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
          <GlassmorphicCard title="Model 3">
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
          <GlassmorphicCard title="Model X">
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
          <GlassmorphicCard title="Model Y">
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
          <GlassmorphicCard title="Cybertruck">
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
      className="py-16 px-6 relative"
    >
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
