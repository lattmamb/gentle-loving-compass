
import React from "react";
import { motion } from "framer-motion";
import SubscriptionMatcher from "@/components/subscription/SubscriptionMatcher";

const AISubscriptionSection: React.FC = () => {
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
            AI-Powered Subscriptions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Revolutionary subscription matching that learns your lifestyle and optimizes your mobility experience.
          </p>
        </motion.div>
        
        <SubscriptionMatcher />
      </div>
    </section>
  );
};

export default AISubscriptionSection;
