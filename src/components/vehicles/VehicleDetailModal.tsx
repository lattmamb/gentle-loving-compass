
import React from "react";
import { Vehicle } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";
import { Battery, Gauge, Zap, MapPin, Calendar, Star } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface VehicleDetailModalProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
  onRent: (vehicleId: string) => void;
}

const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onRent
}) => {
  const performanceData = [
    { name: "Range", value: vehicle.specs.range, unit: "mi" },
    { name: "Top Speed", value: vehicle.specs.topSpeed, unit: "mph" },
    { name: "0-60 mph", value: vehicle.specs.acceleration, unit: "s" }
  ];

  const chartConfig = {
    value: {
      label: "Performance",
      color: "#3b82f6",
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto neo-blur border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">
            Tesla {vehicle.model}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Comprehensive vehicle specifications and performance details
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Vehicle Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className="w-full h-full object-cover"
              />
              <Badge 
                className={`absolute top-4 right-4 ${
                  vehicle.status === "available" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {vehicle.status}
              </Badge>
            </div>

            {/* Color Variants */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Available Colors</h3>
              <div className="flex space-x-3">
                {vehicle.colorVariants.map((variant, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: variant.color }}
                    />
                    <span className="text-xs text-white/60">{variant.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6">
            {/* Performance Chart */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Performance Metrics</h3>
              <ChartContainer config={chartConfig} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                    />
                    <YAxis 
                      tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="var(--color-value)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <Battery className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-white/70">Range</p>
                <p className="font-bold text-white">{vehicle.specs.range} mi</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <Gauge className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-white/70">Top Speed</p>
                <p className="font-bold text-white">{vehicle.specs.topSpeed} mph</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-white/70">0-60 mph</p>
                <p className="font-bold text-white">{vehicle.specs.acceleration}s</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Pricing Options</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Daily Rate</span>
                  <span className="font-semibold text-white">{formatCurrency(vehicle.price.daily)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Monthly Rate</span>
                  <span className="font-semibold text-white">{formatCurrency(vehicle.price.monthly)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Yearly Rate</span>
                  <span className="font-semibold text-white">{formatCurrency(vehicle.price.yearly)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Features & Amenities</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Environmental Impact */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Location</h3>
            </div>
            <p className="text-white/80">{vehicle.location}</p>
          </div>
          
          {vehicle.carbonSavings && (
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Environmental Impact</h3>
              </div>
              <p className="text-white/80">
                {vehicle.carbonSavings.toLocaleString()} kg CO₂ saved annually
              </p>
            </div>
          )}
        </div>

        <Separator className="bg-white/10 my-6" />

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1 border-white/20 text-white hover:bg-white/5"
          >
            Close
          </Button>
          <Button 
            onClick={() => onRent(vehicle.id)}
            disabled={vehicle.status !== "available"}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
          >
            {vehicle.status === "available" ? "Rent Now" : "Unavailable"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailModal;
