
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MapPin, Clock, Star, MessageSquare, Share2 } from "lucide-react";

interface SocialRide {
  id: string;
  driver: {
    name: string;
    avatar: string;
    rating: number;
    totalRides: number;
  };
  route: {
    from: string;
    to: string;
    stops: string[];
  };
  departure: string;
  availableSeats: number;
  price: number;
  tags: string[];
  description: string;
}

const SocialTransitNetwork: React.FC = () => {
  const [activeRides] = useState<SocialRide[]>([
    {
      id: "ride-1",
      driver: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/40/40",
        rating: 4.8,
        totalRides: 234
      },
      route: {
        from: "Carbondale",
        to: "Chicago",
        stops: ["Marion", "Mt. Vernon", "Effingham"]
      },
      departure: "8:00 AM",
      availableSeats: 2,
      price: 25,
      tags: ["Comfortable", "Music OK", "Pet Friendly"],
      description: "Regular commute to Chicago, great conversation and scenic route!"
    },
    {
      id: "ride-2",
      driver: {
        name: "Mike Chen",
        avatar: "/api/placeholder/40/40",
        rating: 4.9,
        totalRides: 156
      },
      route: {
        from: "Springfield",
        to: "Bloomington",
        stops: ["Decatur", "Lincoln"]
      },
      departure: "2:00 PM",
      availableSeats: 3,
      price: 18,
      tags: ["Quiet Ride", "Student Friendly", "EV Only"],
      description: "Sustainable travel between college towns. Students welcome!"
    }
  ]);

  const [communityStats] = useState({
    totalMembers: 2847,
    activeRides: 156,
    carbonSaved: 45670,
    localBusinesses: 89
  });

  return (
    <div className="space-y-8">
      {/* Community Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Social Transit Network</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{communityStats.totalMembers.toLocaleString()}</div>
            <div className="text-sm text-white/60">Community Members</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <MapPin className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{communityStats.activeRides}</div>
            <div className="text-sm text-white/60">Active Rides</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Share2 className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{communityStats.carbonSaved.toLocaleString()}</div>
            <div className="text-sm text-white/60">kg CO₂ Saved</div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl text-center">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-light text-white">{communityStats.localBusinesses}</div>
            <div className="text-sm text-white/60">Partner Businesses</div>
          </div>
        </div>
      </motion.div>

      {/* Available Rides */}
      <div className="space-y-4">
        <h3 className="text-2xl font-light text-white mb-6">Available Community Rides</h3>
        
        {activeRides.map((ride, index) => (
          <motion.div
            key={ride.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                      <AvatarFallback>{ride.driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-medium">{ride.driver.name}</div>
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{ride.driver.rating}</span>
                        <span>•</span>
                        <span>{ride.driver.totalRides} rides</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${ride.price}</div>
                    <div className="text-sm text-white/60">per person</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-white mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span>{ride.route.from}</span>
                    </div>
                    <div className="text-white/60">→</div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span>{ride.route.to}</span>
                    </div>
                  </div>
                  
                  {ride.route.stops.length > 0 && (
                    <div className="text-sm text-white/60 ml-6">
                      Stops: {ride.route.stops.join(', ')}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-white/70">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{ride.departure}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{ride.availableSeats} seats left</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {ride.tags.map((tag) => (
                      <Badge key={tag} className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4">{ride.description}</p>

                <div className="flex space-x-3">
                  <Button className="bg-green-600 hover:bg-green-700 flex-1">
                    Join Ride
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialTransitNetwork;
