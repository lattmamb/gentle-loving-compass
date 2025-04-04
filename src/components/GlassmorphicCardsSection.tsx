
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassmorphicCard from "./ui/glassmorphic-card";

export default function GlassmorphicCardsSection() {
  const { scrollY } = useScroll();
  
  // Create parallax effect based on scroll position
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -120]);
  
  const cards = [
    { title: "Premium Interior", content: "Luxury materials and finishes", y: y1 },
    { title: "Long Range", content: "Up to 405 miles on a single charge", y: y2 },
    { title: "Performance", content: "0-60 mph in as little as 1.99 seconds", y: y3 },
    { title: "Autopilot", content: "Advanced driver assistance features", y: y4 },
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
            Tesla Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover what makes Tesla vehicles exceptional
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ y: card.y }}
              className="shadow-3d"
            >
              <GlassmorphicCard 
                title={card.title}
                expanded={true}
                mouseTracking={true}
                parallaxIntensity={15}
              >
                <p className="px-4 pb-4">{card.content}</p>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
