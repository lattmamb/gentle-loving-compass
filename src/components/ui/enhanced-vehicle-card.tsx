import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Vehicle } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Battery, 
  Zap, 
  Route, 
  Star, 
  Heart, 
  Info, 
  Clock,
  MapPin,
  Gauge
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { VehicleAvailabilityPulse, ETATimerLoader, BatteryChargingLoader } from "./loading-animations";
import { cn } from "@/lib/utils";

interface EnhancedVehicleCardProps {
  vehicle: Vehicle;
  onRent?: (vehicleId: string) => void;
  onFavorite?: (vehicleId: string, isFavorite: boolean) => void;
  variant?: "default" | "compact" | "featured";
  showRideshareFeatures?: boolean;
}

export const EnhancedVehicleCard: React.FC<EnhancedVehicleCardProps> = ({ 
  vehicle, 
  onRent = () => {},
  onFavorite = () => {},
  variant = "default",
  showRideshareFeatures = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite(vehicle.id, !isFavorited);
  };

  const handleRentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRent(vehicle.id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "booked": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "maintenance": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "arriving-soon": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const cardVariants = {
    default: "h-full",
    compact: "h-80",
    featured: "h-96"
  };

  return (
    <Link to={`/vehicles/${vehicle.id}`}>
      <motion.div 
        className={cn(
          "group relative overflow-hidden bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 transition-all duration-500",
          cardVariants[variant],
          "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
        )}
        whileHover={{ 
          scale: 1.02,
          y: -5
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
          <Badge className={cn("text-xs font-medium border", getStatusColor(vehicle.status))}>
            {vehicle.status.replace('-', ' ').toUpperCase()}
          </Badge>
        </div>

        {/* Favorite Button */}
        <motion.button
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors"
          onClick={handleFavoriteClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart 
            className={cn(
              "w-5 h-5 transition-colors",
              isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
            )} 
          />
        </motion.button>

        {/* Vehicle Image Container */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <motion.img
            src={vehicle.colorVariants[selectedColorIndex]?.image || vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Rideshare Features Overlay */}
          <AnimatePresence>
            {showRideshareFeatures && vehicle.availability && isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <VehicleAvailabilityPulse available={!vehicle.availability.inTransit} />
                  <ETATimerLoader eta={vehicle.availability.eta} />
                </div>
                {vehicle.availability.batteryLevel && (
                  <BatteryChargingLoader progress={vehicle.availability.batteryLevel} />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="bg-background/80 border-border/50 hover:bg-background/90"
                >
                  <Info size={16} className="mr-1" />
                  Details
                </Button>
                <Button
                  size="sm"
                  onClick={handleRentClick}
                  disabled={vehicle.status !== "available"}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {vehicle.status === "available" ? "Subscribe" : "Unavailable"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Vehicle Info */}
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="text-sm text-muted-foreground">{vehicle.type}</p>
            </div>
            {vehicle.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{vehicle.rating}</span>
              </div>
            )}
          </div>

          {/* Color Variants */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {vehicle.colorVariants.slice(0, 3).map((color, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColorIndex(index);
                  }}
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all",
                    selectedColorIndex === index 
                      ? "border-primary scale-125" 
                      : "border-border/50 hover:border-border"
                  )}
                  style={{ backgroundColor: color.color }}
                />
              ))}
            </div>
            {vehicle.location && (
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="truncate max-w-20">{vehicle.location.split(' ')[0]}</span>
              </div>
            )}
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 bg-muted/20 rounded-lg">
              <Route className="w-4 h-4 mx-auto mb-1 text-primary" />
              <div className="text-xs font-medium">{vehicle.specs.range}</div>
              <div className="text-xs text-muted-foreground">mi</div>
            </div>
            <div className="text-center p-2 bg-muted/20 rounded-lg">
              <Zap className="w-4 h-4 mx-auto mb-1 text-green-400" />
              <div className="text-xs font-medium">{vehicle.specs.acceleration}s</div>
              <div className="text-xs text-muted-foreground">0-60</div>
            </div>
            <div className="text-center p-2 bg-muted/20 rounded-lg">
              <Gauge className="w-4 h-4 mx-auto mb-1 text-blue-400" />
              <div className="text-xs font-medium">{vehicle.specs.topSpeed}</div>
              <div className="text-xs text-muted-foreground">mph</div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div>
              <div className="text-lg font-bold text-foreground">
                {formatCurrency(vehicle.price.daily)}<span className="text-sm font-normal text-muted-foreground">/day</span>
              </div>
              <div className="text-xs text-muted-foreground">
                from {formatCurrency(vehicle.price.monthly)}/month
              </div>
            </div>
            
            {/* Carbon Savings */}
            {vehicle.carbonSavings && (
              <div className="text-right">
                <div className="text-sm font-medium text-green-400">
                  {(vehicle.carbonSavings / 1000).toFixed(1)}t CO₂
                </div>
                <div className="text-xs text-muted-foreground">saved/year</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default EnhancedVehicleCard;