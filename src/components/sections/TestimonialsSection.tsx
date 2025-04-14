
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";

const testimonials = [
  {
    name: "Alex Johnson",
    position: "Software Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    text: "The Model 3 rental experience was phenomenal. The car's performance and technology exceeded all my expectations. EonRides made the process seamless from start to finish."
  },
  {
    name: "Sara Williams",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    text: "I never thought I'd consider buying a Tesla until I rented the Model S Plaid through EonRides. Now I'm completely sold on electric vehicles and the amazing experience they offer."
  },
  {
    name: "Michael Chen",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    text: "The concierge delivery service was the highlight of my EonRides experience. Having the Tesla Model Y delivered directly to my office made my business trip so much more convenient."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-blue-900/5 to-black/20 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Customer Experiences</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Hear what our customers have to say about their Tesla rental experience with EonRides.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <NeomorphicCard3D className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <Quote className="text-blue-400 mb-4" size={32} />
                  
                  <p className="text-white/80 mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-white/50 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </NeomorphicCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
