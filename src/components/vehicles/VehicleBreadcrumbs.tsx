
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface VehicleBreadcrumbsProps {
  vehicleModel: string;
}

const VehicleBreadcrumbs: React.FC<VehicleBreadcrumbsProps> = ({ vehicleModel }) => {
  return (
    <nav className="mb-6 flex items-center text-sm text-white/60">
      <Link to="/" className="hover:text-white">Home</Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <Link to="/vehicles" className="hover:text-white">Vehicles</Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="text-white">Tesla {vehicleModel}</span>
    </nav>
  );
};

export default VehicleBreadcrumbs;
