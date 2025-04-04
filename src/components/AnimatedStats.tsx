
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedStat: React.FC<StatProps> = ({ value, label, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        if (currentCount === end) {
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 20);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
      >
        {isInView ? (
          <>
            {count.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            })}
            {suffix}
          </>
        ) : (
          "0"
        )}
      </motion.div>
      <p className="text-white/70">{label}</p>
    </motion.div>
  );
};

export default function AnimatedStats() {
  const stats = [
    { value: 25000, label: "Happy Drivers", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%", decimals: 1 },
    { value: 1000000, label: "Electric Miles", suffix: "+" },
    { value: 12, label: "US Cities", suffix: "" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute w-full h-64 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 8,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-blue mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Delivering exceptional electric driving experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
