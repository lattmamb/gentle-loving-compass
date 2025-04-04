
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassmorphicCard from "./ui/glassmorphic-card";
import { cn } from "@/lib/utils";

export default function GlassmorphicCardsSection() {
  const { scrollY } = useScroll();
  
  // Create parallax effect based on scroll position
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -120]);
  
  const cards = [
    { 
      title: "Premium Interior", 
      content: "Luxury materials and finishes", 
      y: y1,
      bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop",
      hoverBgImage: "https://i.giphy.com/media/26DN5pBQzhqgAufPq/giphy.gif"
    },
    { 
      title: "Long Range", 
      content: "Up to 405 miles on a single charge", 
      y: y2,
      bgImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1740&auto=format&fit=crop",
      hoverBgImage: "https://i.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif"
    },
    { 
      title: "Performance", 
      content: "0-60 mph in as little as 1.99 seconds", 
      y: y3,
      bgImage: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=1587&auto=format&fit=crop",
      hoverBgImage: "https://i.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif"
    },
    { 
      title: "Autopilot", 
      content: "Advanced driver assistance features", 
      y: y4,
      bgImage: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1588&auto=format&fit=crop",
      hoverBgImage: "https://i.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif"
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
              <div
                className={cn(
                  "group cursor-pointer overflow-hidden rounded-xl shadow-xl",
                  "transition-all duration-500"
                )}
              >
                <GlassmorphicCard 
                  title={card.title}
                  expanded={true}
                  mouseTracking={true}
                  parallaxIntensity={15}
                  className={cn(
                    `bg-[url(${card.bgImage})] bg-cover`,
                    `before:bg-[url(${card.hoverBgImage})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
                    `hover:bg-[url(${card.hoverBgImage})]`,
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-30",
                  )}
                >
                  <p className="px-4 pb-4 relative z-10">{card.content}</p>
                </GlassmorphicCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
