
import React from "react";

interface StatProps {
  label: string;
  value: string;
}

const VehicleStats: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-4 rounded-lg border border-white/10">
      <p className="font-bold text-lg">{value}</p>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
};

export default VehicleStats;
