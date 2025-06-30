
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, DollarSign, Zap, MapPin, TrendingUp } from "lucide-react";

interface ImpactMetric {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    title: "Jobs Created",
    value: "247",
    change: "+23 this month",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-400"
  },
  {
    title: "Local Economic Impact",
    value: "$2.8M",
    change: "+18% YoY",
    icon: <DollarSign className="h-6 w-6" />,
    color: "text-green-400"
  },
  {
    title: "Training Graduates",
    value: "156",
    change: "92% job placement",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "text-purple-400"
  },
  {
    title: "Clean Energy Generated",
    value: "1.2GWh",
    change: "+45% this quarter",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-400"
  }
];

const communityStories = [
  {
    name: "Maria Gonzalez",
    role: "EV Technician",
    location: "Carbondale, IL",
    story: "Completed Unity Fleet's training program and now maintains our community charging hub. Supporting my family while building the future.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c5b2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Mitchell",
    role: "Solar Installer",
    location: "Marion, IL", 
    story: "Transitioned from coal mining to solar installation. Unity Fleet gave me the skills and opportunity to power my community sustainably.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const RuralImpactDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Impact Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Rural Transformation Impact</h2>
        <p className="tesla-subheading mb-8 max-w-3xl">
          Empowering Southern Illinois communities through sustainable transportation, 
          workforce development, and community ownership of clean energy infrastructure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-luxury p-6 rounded-xl text-center"
            >
              <div className={`${metric.color} mb-3 flex justify-center`}>
                {metric.icon}
              </div>
              <div className="text-3xl font-light text-white mb-2">{metric.value}</div>
              <div className="text-sm text-white/60 mb-1">{metric.title}</div>
              <div className="text-xs text-green-400">{metric.change}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Stories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h3 className="text-2xl font-light text-white mb-6">Community Success Stories</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="luxury-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white">{story.name}</h4>
                      <p className="text-sm text-blue-400 mb-1">{story.role}</p>
                      <div className="flex items-center text-white/60 text-xs mb-3">
                        <MapPin size={12} className="mr-1" />
                        {story.location}
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        "{story.story}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Regional Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h3 className="text-2xl font-light text-white mb-6">Southern Illinois Coverage</h3>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-light text-white mb-2">Interactive Map Coming Soon</h4>
              <p className="text-white/70 max-w-md mx-auto">
                Explore Unity Fleet's expanding network across Southern Illinois, 
                from Carbondale to Cairo, transforming rural communities.
              </p>
            </div>
          </div>
          
          {/* Mock location indicators */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full charging-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full charging-pulse"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-400 rounded-full charging-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default RuralImpactDashboard;
