
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Check } from "lucide-react";

interface VehiclePricingProps {
  vehicle: Vehicle;
}

const VehiclePricing: React.FC<VehiclePricingProps> = ({ vehicle }) => {
  const yearlyDiscount = Math.round(((vehicle.price.daily * 30 * 12) - vehicle.price.yearly) / (vehicle.price.daily * 30 * 12) * 100);

  return (
    <div className="foam-block neo-glow-blue p-6 rounded-xl overflow-hidden mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <CircleDollarSign className="mr-2 text-blue-400" />
          <h3 className="font-medium text-gradient-blue">Subscription Pricing</h3>
        </div>
        <Link to="/pricing" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">View all plans</Link>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
          <span className="text-white/70 flex items-center gap-2">Daily</span>
          <span className="font-bold">{formatCurrency(vehicle.price.daily)}</span>
        </div>
        <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
          <span className="text-white/70 flex items-center gap-2">Monthly</span>
          <span className="font-bold">{formatCurrency(vehicle.price.monthly)}</span>
        </div>
        <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
          <div>
            <span className="text-white/70 flex items-center gap-2">Annual</span>
            <span className="text-xs text-green-400 flex items-center">
              <Check size={12} className="mr-1" /> Save {yearlyDiscount}%
            </span>
          </div>
          <span className="font-bold">{formatCurrency(vehicle.price.yearly / 12)}/mo</span>
        </div>
      </div>
      
      <div className="mt-4">
        <Button asChild className="w-full ui-glow-button">
          <Link to={`/book/${vehicle.id}`}>
            <span className="py-2 px-4 w-full inline-block">Book This Vehicle</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default VehiclePricing;
