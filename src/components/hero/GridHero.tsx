
import React, { useState } from "react";
import { motion } from "framer-motion";

const GridHero = () => {
  // Number of grid boxes
  const gridItems = Array.from({ length: 16 }, (_, i) => i + 1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-5xl w-full mx-auto">
        {/* Hero Text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unity <span className="text-blue-500">Link</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with the future of transportation through our innovative electric vehicle platform
          </p>
        </motion.div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gridItems.map((item) => (
            <motion.div
              key={item}
              className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4,
                delay: item * 0.05,
              }}
              onHoverStart={() => setHoveredItem(item)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  backgroundSize: '150% 150%',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Content */}
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
                animate={{
                  scale: hoveredItem === item ? 1.1 : 1,
                  opacity: hoveredItem === item ? 1 : 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-400 text-xl font-bold">{item}</span>
                <span className="text-white/60 text-sm mt-2 text-center">
                  {item % 4 === 0 ? "Performance" : 
                   item % 3 === 0 ? "Innovation" : 
                   item % 2 === 0 ? "Sustainability" : "Technology"}
                </span>
              </motion.div>
              
              {/* Hover overlay */}
              <motion.div 
                className="absolute inset-0 bg-blue-600/20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredItem === item ? 0.4 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Call to action button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Explore Vehicles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GridHero;
