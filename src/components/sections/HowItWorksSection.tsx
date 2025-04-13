
import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const StepCard = ({ number, title, description, delay = 0 }: StepCardProps) => {
  return (
    <motion.div 
      className="text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 p-[2px]">
        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {number}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the future of mobility in three simple steps
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StepCard
            number="01"
            title="Choose Your Tesla"
            description="Browse our fleet of premium Tesla vehicles and select your perfect match."
            delay={0.1}
          />
          
          <StepCard
            number="02"
            title="Select Your Plan"
            description="Pick a subscription that fits your lifestyle and budget needs."
            delay={0.3}
          />
          
          <StepCard
            number="03"
            title="Drive & Enjoy"
            description="We'll deliver your Tesla to your door. Just drive and enjoy the experience."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
