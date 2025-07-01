
import React from "react";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Vehicle } from "@/data/vehicles";
import { formatCurrency, formatDate } from "@/lib/utils";

interface OrderSummaryProps {
  vehicle: Vehicle;
  numberOfDays: number;
  totalPrice: number;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  vehicle,
  numberOfDays,
  totalPrice,
  startDate,
  endDate
}) => {
  return (
    <div className="sticky top-24">
      <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        
        <div className="flex items-center mb-6">
          <img
            src={vehicle.image}
            alt={vehicle.model}
            className="w-24 h-16 object-cover rounded mr-4"
          />
          <div>
            <h3 className="font-bold">Tesla {vehicle.model}</h3>
            <p className="text-sm text-white/70">{vehicle.type}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-white/70">Daily Rate</span>
            <span>{formatCurrency(vehicle.price.daily)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Duration</span>
            <span>{numberOfDays} days</span>
          </div>
          {startDate && endDate && (
            <div className="flex justify-between">
              <span className="text-white/70">Dates</span>
              <span>
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            </div>
          )}
        </div>
        
        <Separator className="my-4 bg-white/10" />
        
        <div className="flex justify-between font-bold text-lg mb-2">
          <span>Total</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <p className="text-xs text-white/60 mb-6">
          Includes insurance, maintenance, and unlimited charging
        </p>
      </div>
      
      <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 className="font-bold mb-3">What's Included</h3>
        <ul className="space-y-2">
          <Feature text="Insurance coverage" />
          <Feature text="Maintenance and repairs" />
          <Feature text="Supercharger network access" />
          <Feature text="Roadside assistance" />
          <Feature text="Contactless delivery" />
        </ul>
      </div>
    </div>
  );
};

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center text-white/80 text-sm">
      <Check className="mr-2 h-4 w-4 text-green-400" />
      {text}
    </li>
  );
}

export default OrderSummary;
