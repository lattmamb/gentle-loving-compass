
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Battery, Gauge, Zap } from "lucide-react";
import NeoCard from "@/components/NeoCard";
import { vehicles } from "@/data/vehicles";

const ModelHighlight = () => {
  // Get the Model 3 data
  const model3 = vehicles.find(v => v.id === "model-3");
  
  if (!model3) return null;
  
  const model3RedVariant = model3.colorVariants.find(v => v.color === "#a82a2a") || model3.colorVariants[0];
  
  return (
    <section className="py-24 px-6 relative">
      {/* Background styling */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/0 to-red-950/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/0 to-red-950/10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src={model3RedVariant.image || model3.image} 
                alt="Tesla Model 3" 
                className="rounded-xl shadow-2xl shadow-red-500/20"
              />
              
              {/* Highlight circles */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
            
            {/* Floating specs cards */}
            <motion.div 
              className="absolute -bottom-12 -left-4 max-w-[200px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NeoCard variant="elevated" glow glowColor="blue" className="p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Battery className="text-blue-400" />
                  <div>
                    <p className="text-sm text-white/70">Range</p>
                    <p className="font-bold">{model3.specs.range} miles</p>
                  </div>
                </div>
              </NeoCard>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-12 right-1/4 max-w-[200px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NeoCard variant="elevated" glow glowColor="green" className="p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Gauge className="text-green-400" />
                  <div>
                    <p className="text-sm text-white/70">0-60 mph</p>
                    <p className="font-bold">{model3.specs.acceleration}s</p>
                  </div>
                </div>
              </NeoCard>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-12 right-4 max-w-[200px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NeoCard variant="elevated" glow glowColor="purple" className="p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Zap className="text-purple-400" />
                  <div>
                    <p className="text-sm text-white/70">Top Speed</p>
                    <p className="font-bold">{model3.specs.topSpeed} mph</p>
                  </div>
                </div>
              </NeoCard>
            </motion.div>
          </motion.div>
          
          {/* Content section */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-red-500/20 rounded-full">
              <div className="flex items-center gap-2">
                <Flame className="text-red-500 animate-pulse" size={18} />
                <span className="text-red-400 font-medium">Featured Vehicle</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Tesla {model3.model}
              <span className="text-red-500"> Red</span>
            </h2>
            
            <p className="text-white/70 text-lg mb-8">
              Experience the thrill of driving the all-electric Tesla Model 3. Combining sleek design, cutting-edge technology, and exhilarating performance, the Model 3 offers an unparalleled driving experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Range", value: `${model3.specs.range} mi` },
                { label: "Top Speed", value: `${model3.specs.topSpeed} mph` },
                { label: "0-60 mph", value: `${model3.specs.acceleration}s` },
                { label: "Type", value: model3.type }
              ].map((spec, index) => (
                <div key={index} className="foam-block p-4">
                  <p className="text-white/50 text-sm">{spec.label}</p>
                  <p className="text-xl font-bold">{spec.value}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full">
                <Link to={`/vehicles/${model3.id}`}>
                  <span>View Details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
                <Link to={`/book/${model3.id}`}>
                  <span>Book Now</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelHighlight;
