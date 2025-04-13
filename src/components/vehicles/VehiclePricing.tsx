
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface VehiclePricingProps {
  vehicle: Vehicle;
}

const VehiclePricing: React.FC<VehiclePricingProps> = ({ vehicle }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Subscription Pricing</h3>
        <Link to="/pricing" className="text-blue-400 text-sm">View plans</Link>
      </div>
      
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/70">Daily</span>
        <span className="font-bold">{formatCurrency(vehicle.price.daily)}</span>
      </div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/70">Monthly</span>
        <span className="font-bold">{formatCurrency(vehicle.price.monthly)}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-white/70">Annual</span>
        <span className="font-bold">{formatCurrency(vehicle.price.yearly / 12)}/mo</span>
      </div>
      
      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
        <Link to={`/book/${vehicle.id}`}>Book This Vehicle</Link>
      </Button>
    </div>
  );
};

export default VehiclePricing;
