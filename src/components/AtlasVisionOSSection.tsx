
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Eye, Map, Mic, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10"
  >
    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </motion.div>
);

export default function AtlasVisionOSSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
          if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video autoplay prevented:", err));
          }
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [controls]);

  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI-Powered Assistant",
      description: "Vision AI provides personalized recommendations and real-time support for your journey."
    },
    {
      icon: <Map size={24} />,
      title: "3D Interactive Maps",
      description: "Navigate with stunning 3D visualizations of routes, charging stations, and points of interest."
    },
    {
      icon: <Eye size={24} />,
      title: "AR/VR Integration",
      description: "Experience immersive vehicle selection and route planning through AR/VR interfaces."
    },
    {
      icon: <Mic size={24} />,
      title: "Voice & Gesture Control",
      description: "Control your experience naturally with advanced voice commands and gesture recognition."
    },
    {
      icon: <Navigation size={24} />,
      title: "Real-Time Analytics",
      description: "Access dynamic data visualization for vehicle performance, energy usage, and token value."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="atlas-visionos">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-blue-950/20 to-black/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 font-semibold uppercase tracking-wider text-sm">
              The Future of Mobility
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white"
          >
            Atlas VisionOS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Experience our groundbreaking spatial operating system that transforms how you interact with electric vehicles and charging infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video/Demo section */}
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <div className="bg-black/50 backdrop-blur p-4 absolute bottom-0 left-0 right-0 z-20 transition-transform transform-gpu group-hover:translate-y-0 translate-y-full">
              <p className="text-white/90 text-center text-sm">
                Atlas VisionOS demonstration showing 3D interface and AI assistant interaction
              </p>
            </div>
            
            {/* Placeholder for video - in a real implementation, you would have an actual video */}
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <BrainCircuit size={60} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Atlas VisionOS Demo</h3>
                <p className="text-white/70">Interactive 3D demonstration of our spatial operating system</p>
                <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
                  Watch Demo
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 mt-4"
            >
              <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/visionos">
                  Experience Atlas VisionOS
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
