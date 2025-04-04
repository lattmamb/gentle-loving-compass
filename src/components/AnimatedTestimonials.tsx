
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function AnimatedTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Executive",
      quote: "The Tesla subscription service has completely transformed my commute. The flexibility to switch models is a game-changer.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Entrepreneur",
      quote: "I was skeptical at first, but the all-inclusive pricing and white-glove service won me over. Best driving experience of my life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Alexis Rivera",
      role: "Creative Director",
      quote: "The Model S Performance is phenomenal, and being able to swap to the Model X when I need more space is perfect for my lifestyle.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        
        {/* Animated lines */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
          <motion.path
            d="M0,50 Q250,180 500,50 T1000,50"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,100 Q250,20 500,100 T1000,100"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-blue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Hear from people who have transformed their driving experience
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 backdrop-blur-lg neo-elevated p-6 md:p-10 rounded-2xl relative"
            >
              <motion.div 
                className="relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 ring-2 ring-blue-500/50 rounded-full" />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <motion.blockquote 
                  className="text-xl md:text-2xl font-light text-white/90 mb-4 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="absolute -left-4 -top-4 text-4xl text-blue-500/30">"</span>
                  {currentTestimonial.quote}
                  <span className="absolute -right-4 bottom-0 text-4xl text-blue-500/30">"</span>
                </motion.blockquote>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4>
                  <p className="text-blue-400">{currentTestimonial.role}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
