
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coins, BarChart, TrendingUp, Lock, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TokenizedOwnership() {
  return (
    <AnimatedBackground intensity="medium">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-40 left-20 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    Virtual Tokenized Operating System
                  </h1>
                  
                  <p className="text-xl text-white/70 mb-8">
                    Our revolutionary approach to vehicle ownership that combines blockchain technology
                    with community empowerment. Experience the future of asset ownership.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Start Earning
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
                
                {/* Animated Token Visualization */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="perspective-1000 w-full max-w-md">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="relative w-72 h-72 mx-auto transform-3d"
                    >
                      {/* Token coin */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl border-2 border-white/20" />
                      
                      {/* Token symbol */}
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-700/30 backdrop-blur-sm rounded-full">
                        <div className="text-center">
                          <Coins size={64} className="text-white/90 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">ChainLink Token</h3>
                          <div className="text-sm text-white/70">VTOS Ecosystem</div>
                        </div>
                      </div>
                      
                      {/* Reflection effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" style={{ transform: 'translateZ(1px)' }}></div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* How It Works Section */}
          <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  How VTOS Works
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Our Virtual Tokenized Operating System transforms every physical asset into a fractionalized
                  investment opportunity, creating a new paradigm of ownership and wealth generation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    number: "01",
                    title: "Asset Tokenization",
                    description: "Each vehicle, charging station, and solar installation is divided into digital tokens on the blockchain, representing fractional ownership.",
                    icon: <Coins size={24} />
                  },
                  {
                    number: "02",
                    title: "Community Distribution",
                    description: "50% of all tokens are distributed to community members, creating a direct stake in the network's success and growth.",
                    icon: <Users size={24} />
                  },
                  {
                    number: "03",
                    title: "Revenue Generation",
                    description: "Token holders earn passive income through subscription fees, charging revenue, and renewable energy production.",
                    icon: <TrendingUp size={24} />
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 relative"
                  >
                    <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Diagram/Flow */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white">The Tokenization Flow</h3>
                  <p className="text-white/70">How assets move from physical to digital ownership</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center relative">
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 hidden md:block"></div>
                  
                  {/* Flow steps */}
                  {[
                    { title: "Physical Asset", description: "Vehicle or infrastructure", icon: <Car size={28} /> },
                    { title: "Tokenization", description: "Asset converted to tokens", icon: <Coins size={28} /> },
                    { title: "Distribution", description: "50% to community", icon: <Share size={28} /> },
                    { title: "Revenue", description: "Passive income generation", icon: <TrendingUp size={28} /> }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 rounded-full h-32 w-32 flex flex-col items-center justify-center relative z-10 mb-8 md:mb-0"
                    >
                      <div className="h-14 w-14 rounded-full bg-blue-700/40 flex items-center justify-center text-blue-300 mb-2">
                        {step.icon}
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{step.title}</div>
                        <div className="text-xs text-white/70">{step.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Benefits Grid */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Benefits of Token Ownership
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Join our community of token holders and experience the advantages of decentralized ownership
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <TrendingUp size={24} />,
                    title: "Passive Income",
                    description: "Earn regular income from asset utilization without active management"
                  },
                  {
                    icon: <Lock size={24} />,
                    title: "Secure Ownership",
                    description: "Blockchain verification ensures transparent, immutable proof of ownership"
                  },
                  {
                    icon: <BarChart size={24} />,
                    title: "Value Appreciation",
                    description: "Token value increases as the network grows and assets appreciate"
                  },
                  {
                    icon: <CreditCard size={24} />,
                    title: "Credit Building",
                    description: "Alternative path to financial history and creditworthiness"
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Community Governance",
                    description: "Participate in key decisions about the network's future"
                  },
                  {
                    icon: <Zap size={24} />,
                    title: "Sustainability Impact",
                    description: "Contribute to clean energy adoption and environmental sustainability"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Join the Community?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Start your journey with Unity Link today and become part of our growing network of token holders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Create Account
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
}

import { Car, Share, CreditCard } from "lucide-react";
