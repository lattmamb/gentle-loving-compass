
import React from "react";
import { Flame, HeartPulse, Shield, ShieldCheck } from "lucide-react";

interface StatusBadgeProps {
  status: "available" | "booked" | "maintenance";
  vehicleId: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, vehicleId }) => {
  // Determine status badge styling
  const getBadgeStyle = () => {
    switch (status) {
      case "available":
        return { 
          color: vehicleId === "model-3" ? "bg-red-600/90" : "bg-emerald-600/90", 
          icon: vehicleId === "model-3" ? <Flame size={12} className="mr-1" /> : <ShieldCheck size={12} className="mr-1" />,
          label: vehicleId === "model-3" ? "Ready to Drive" : "Available Now"
        };
      case "booked":
        return { 
          color: "bg-amber-600/90", 
          icon: <HeartPulse size={12} className="mr-1" />,
          label: "Reserved"
        };
      case "maintenance":
        return { 
          color: "bg-blue-600/90", 
          icon: <Shield size={12} className="mr-1" />,
          label: "In Service"
        };
      default:
        return { 
          color: "bg-blue-600/90", 
          icon: null,
          label: status
        };
    }
  };

  const badgeStyle = getBadgeStyle();
  
  return (
    <div className={`absolute top-4 left-4 ${badgeStyle.color} backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center`}>
      {badgeStyle.icon}
      {badgeStyle.label}
    </div>
  );
};

export default StatusBadge;
