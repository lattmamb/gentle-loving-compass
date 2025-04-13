
import React from "react";

interface SpecItemProps {
  label: string;
  value: string;
}

const VehicleSpecItem: React.FC<SpecItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between py-3 border-b border-white/5">
      <span className="text-white/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default VehicleSpecItem;
