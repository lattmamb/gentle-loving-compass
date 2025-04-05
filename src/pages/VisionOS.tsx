
import React, { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, Eye, VoiceNetwork, Cpu, Zap, Layers } from "lucide-react";
import AIAssistant from "@/components/AIAssistant";
import { LoadingAnimation } from "@/components/ui/loading-animation";

export default function VisionOS() {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Animation effects
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <AnimatedBackground intensity="medium">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                    "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                    "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                    "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                    "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity }}
              />

              <div className="absolute inset-0 bg-[#090C14] opacity-40"></div>

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.15]">
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium text-blue-400">Welcome to the future</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Atlas VisionOS
                </h1>
                
                <p className="text-xl text-white/80 mb-10">
                  Our revolutionary spatial operating system that powers your entire electric vehicle experience 
                  with immersive 3D interfaces and AI-driven assistance.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Try Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              {/* 3D Interface Mockup */}
              <motion.div 
                className="mt-16 max-w-4xl mx-auto perspective-1000"
                style={{ translateY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden transform-3d shadow-2xl">
                  {/* Placeholder for 3D UI - would be an actual 3D interface in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl w-full max-w-2xl">
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 rounded-2xl bg-blue-500/30 flex items-center justify-center text-blue-400 mr-6">
                          <BrainCircuit size={36} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Vision AI Assistant</h3>
                          <p className="text-white/70">How can I help with your journey today?</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/10 h-12">
                          <Car size={18} className="mr-2" /> Find available vehicles nearby
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/10 h-12">
                          <Map size={18} className="mr-2" /> Show charging hub locations
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/10 h-12">
                          <Coins size={18} className="mr-2" /> View my token portfolio
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Interface overlay elements */}
                  <div className="absolute top-8 right-8 flex space-x-4">
                    <div className="h-16 w-16 rounded-full bg-purple-700/20 backdrop-blur-sm flex items-center justify-center neo-glow-blue">
                      <VoiceNetwork size={24} className="text-purple-400" />
                    </div>
                    <div className="h-16 w-16 rounded-full bg-blue-700/20 backdrop-blur-sm flex items-center justify-center neo-glow-blue">
                      <Eye size={24} className="text-blue-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm text-white/80 text-sm">
                    Atlas VisionOS v1.0 • AI Ready
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Features Section */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Key Features of Atlas VisionOS
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Our spatial operating system combines advanced AI technology with immersive interfaces 
                  to create a seamless experience across all devices.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BrainCircuit size={28} />,
                    title: "Vision AI Assistant",
                    description: "Advanced AI that learns your preferences and provides personalized recommendations for routes, vehicles, and charging options."
                  },
                  {
                    icon: <Eye size={28} />,
                    title: "Spatial Interface",
                    description: "Immersive 3D interface with intuitive gesture and voice controls, inspired by Apple Vision Pro design principles."
                  },
                  {
                    icon: <Map size={28} />,
                    title: "3D Maps & Navigation",
                    description: "Interactive 3D maps showing real-time vehicle locations, charging stations, and optimal routes with AR overlays."
                  },
                  {
                    icon: <Cpu size={28} />,
                    title: "Real-Time Analytics",
                    description: "Live monitoring of vehicle performance, charging status, and token ownership with predictive insights."
                  },
                  {
                    icon: <Zap size={28} />,
                    title: "Energy Management",
                    description: "Intelligent optimization of charging schedules and renewable energy utilization across the network."
                  },
                  {
                    icon: <Layers size={28} />,
                    title: "Multi-Platform",
                    description: "Seamless experience across smartphones, tablets, in-vehicle displays, and AR/VR headsets."
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Demo Section */}
          <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Experience Atlas VisionOS
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Our interactive demo showcases the power of Atlas VisionOS and how it transforms
                  your electric vehicle experience.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
                <div className="aspect-video max-w-4xl mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <LoadingAnimation variant="inline" size="lg" />
                    <h3 className="text-xl font-medium text-white mt-4">Interactive Demo Coming Soon</h3>
                    <p className="text-white/70 mt-2 mb-8">
                      Our team is putting the finishing touches on an immersive demo experience
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
}

import { Car, Coins, Map } from "lucide-react";
