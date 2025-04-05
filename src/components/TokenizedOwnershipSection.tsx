
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, BarChart, Lock, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface TokenFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TokenFeature = ({ icon, title, description }: TokenFeatureProps) => (
  <Card className="border-white/10 bg-white/5 backdrop-blur">
    <CardHeader>
      <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
        {icon}
      </div>
      <CardTitle className="text-white">{title}</CardTitle>
      <CardDescription className="text-white/70">{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default function TokenizedOwnershipSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 px-6 bg-black" id="tokenized-ownership">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 font-semibold uppercase tracking-wider text-sm">
            Community Empowerment
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Tokenized Ownership via ChainLink & VTOS
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our Virtual Tokenized Operating System (VTOS) transforms vehicle subscriptions into ownership opportunities through blockchain technology.
          </p>
        </motion.div>

        {/* Tokenization explanation with animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">How Tokenization Works</h3>
            
            <ul className="space-y-6">
              {[
                {
                  title: "Asset Fractionalization",
                  description: "Each vehicle and infrastructure component is tokenized into digital shares on the blockchain."
                },
                {
                  title: "Community Distribution",
                  description: "50% of all asset tokens are distributed to community members, creating shared ownership."
                },
                {
                  title: "Passive Income Generation",
                  description: "Token holders earn revenue from subscription fees, charging sessions, and energy production."
                },
                {
                  title: "Credit Building Alternative",
                  description: "Token ownership establishes verifiable financial history, providing an alternative to traditional credit."
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/tokenized-ownership">
                  Learn About Token Ownership
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Animated token visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto perspective-1000"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-60 h-60 relative transform-3d"
              >
                {/* Token coin */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl border-4 border-white/10" />
                
                {/* Chain symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Coins size={80} className="text-white" />
                </div>
              </motion.div>
              
              {/* Orbiting elements */}
              {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-blue-800/60 flex items-center justify-center"
                  animate={{
                    x: `${Math.cos(degree * Math.PI / 180) * 150}px`,
                    y: `${Math.sin(degree * Math.PI / 180) * 150}px`
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.5, 1]
                    }}
                    className="w-8 h-8 rounded-full bg-blue-500/80 flex items-center justify-center text-white/90"
                  >
                    <TrendingUp size={16} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Token benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<Coins size={24} />}
              title="Passive Income"
              description="Earn steady revenue from your token ownership as assets generate income."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<BarChart size={24} />}
              title="Financial Transparency"
              description="Real-time tracking of asset performance and earnings on the blockchain."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<Lock size={24} />}
              title="Secure Ownership"
              description="Blockchain technology ensures immutable proof of ownership and rights."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<Users size={24} />}
              title="Community Governance"
              description="Token holders participate in key decisions about fleet and infrastructure."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<Shield size={24} />}
              title="Credit Alternative"
              description="Build financial history without traditional credit requirements."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TokenFeature 
              icon={<TrendingUp size={24} />}
              title="Growth Potential"
              description="Token value grows with ecosystem expansion and increased adoption."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
