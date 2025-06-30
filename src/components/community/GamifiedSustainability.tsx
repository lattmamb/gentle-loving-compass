
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Zap, Leaf, Users, Award, TrendingUp, Star } from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  description: string;
  type: "individual" | "community";
  progress: number;
  target: number;
  reward: string;
  difficulty: "easy" | "medium" | "hard";
  expiresIn: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

const GamifiedSustainability: React.FC = () => {
  const [challenges] = useState<Challenge[]>([
    {
      id: "challenge-1",
      title: "Carbon Crusher",
      description: "Reduce 50kg of CO₂ emissions this month",
      type: "individual",
      progress: 32,
      target: 50,
      reward: "500 EcoPoints + Green Champion Badge",
      difficulty: "medium",
      expiresIn: "12 days"
    },
    {
      id: "challenge-2",
      title: "Community Commuter",
      description: "Take 10 shared rides this week",
      type: "individual",
      progress: 7,
      target: 10,
      reward: "300 EcoPoints + Social Driver Badge",
      difficulty: "easy",
      expiresIn: "3 days"
    },
    {
      id: "challenge-3",
      title: "Regional Impact",
      description: "Collectively save 1000kg CO₂ as a community",
      type: "community",
      progress: 847,
      target: 1000,
      reward: "Community Solar Panel Upgrade",
      difficulty: "hard",
      expiresIn: "18 days"
    }
  ]);

  const [achievements] = useState<Achievement[]>([
    {
      id: "ach-1",
      title: "First Ride",
      description: "Completed your first sustainable journey",
      icon: "🚗",
      earnedDate: "2 weeks ago",
      rarity: "common"
    },
    {
      id: "ach-2",
      title: "Eco Warrior",
      description: "Saved 100kg of CO₂ emissions",
      icon: "🌱",
      earnedDate: "1 week ago",
      rarity: "rare"
    },
    {
      id: "ach-3",
      title: "Community Leader",
      description: "Organized 5 community rides",
      icon: "👥",
      earnedDate: "3 days ago",
      rarity: "epic"
    }
  ]);

  const [playerStats] = useState({
    level: 12,
    experience: 2847,
    nextLevelExp: 3000,
    ecoPoints: 15420,
    carbonSaved: 286,
    communityRank: 23,
    totalAchievements: 18
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400";
      case "medium": return "text-yellow-400";
      case "hard": return "text-red-400";
      default: return "text-white";
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-gray-500/30 bg-gray-500/10";
      case "rare": return "border-blue-500/30 bg-blue-500/10";
      case "epic": return "border-purple-500/30 bg-purple-500/10";
      case "legendary": return "border-yellow-500/30 bg-yellow-500/10";
      default: return "border-gray-500/30 bg-gray-500/10";
    }
  };

  return (
    <div className="space-y-8">
      {/* Player Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Sustainability Gaming</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {playerStats.level}
                </div>
                <div>
                  <div className="text-white font-medium">Level {playerStats.level}</div>
                  <div className="text-white/60 text-sm">Eco Champion</div>
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Rank #{playerStats.communityRank}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Experience</span>
                <span className="text-white">{playerStats.experience} / {playerStats.nextLevelExp}</span>
              </div>
              <Progress 
                value={(playerStats.experience / playerStats.nextLevelExp) * 100} 
                className="h-2"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-luxury p-4 rounded-xl text-center">
              <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl font-light text-white">{playerStats.ecoPoints.toLocaleString()}</div>
              <div className="text-xs text-white/60">EcoPoints</div>
            </div>
            
            <div className="glass-luxury p-4 rounded-xl text-center">
              <Leaf className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <div className="text-xl font-light text-white">{playerStats.carbonSaved}</div>
              <div className="text-xs text-white/60">kg CO₂ Saved</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Active Challenges */}
      <div className="space-y-4">
        <h3 className="text-2xl font-light text-white mb-6">Active Challenges</h3>
        
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                      {challenge.type === "individual" ? 
                        <Target className="h-6 w-6 text-white" /> : 
                        <Users className="h-6 w-6 text-white" />
                      }
                    </div>
                    <div>
                      <div className="text-white font-medium text-lg">{challenge.title}</div>
                      <div className="text-white/60 text-sm">{challenge.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`bg-${challenge.type === "individual" ? "blue" : "purple"}-500/20 text-${challenge.type === "individual" ? "blue" : "purple"}-400 border-${challenge.type === "individual" ? "blue" : "purple"}-500/30`}>
                      {challenge.type}
                    </Badge>
                    <Badge className={`${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Progress</span>
                    <span className="text-white">{challenge.progress} / {challenge.target}</span>
                  </div>
                  <Progress 
                    value={(challenge.progress / challenge.target) * 100} 
                    className="h-3"
                  />
                  <div className="text-xs text-white/60">Expires in {challenge.expiresIn}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-white/60">Reward: </span>
                    <span className="text-green-400">{challenge.reward}</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Track Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Achievements */}
      <div className="space-y-4">
        <h3 className="text-2xl font-light text-white mb-6">Recent Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`luxury-card ${getRarityColor(achievement.rarity)}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-white font-medium mb-2">{achievement.title}</div>
                  <div className="text-white/60 text-sm mb-3">{achievement.description}</div>
                  <Badge className={`${getRarityColor(achievement.rarity)} capitalize`}>
                    {achievement.rarity}
                  </Badge>
                  <div className="text-xs text-white/40 mt-2">{achievement.earnedDate}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamifiedSustainability;
