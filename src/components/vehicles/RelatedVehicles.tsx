
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface RelatedVehiclesProps {
  vehicles: Vehicle[];
}

const RelatedVehicles: React.FC<RelatedVehiclesProps> = ({ vehicles }) => {
  if (vehicles.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((relatedVehicle) => (
          <div
            key={relatedVehicle.id}
            className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 overflow-hidden group"
          >
            <Link to={`/vehicles/${relatedVehicle.id}`} className="block">
              <div className="h-48 overflow-hidden">
                <img
                  src={relatedVehicle.image}
                  alt={relatedVehicle.model}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1">Tesla {relatedVehicle.model}</h3>
                <p className="text-white/60 text-sm mb-2">{relatedVehicle.type}</p>
                <p className="font-medium">
                  From {formatCurrency(relatedVehicle.price.daily)}/day
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVehicles;
