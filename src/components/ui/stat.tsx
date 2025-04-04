
import React from "react";

interface StatProps {
  label: string;
  value: number;
  unit: string;
  icon: string;
}

export function Stat({ label, value, unit, icon }: StatProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg p-2">
      <span className="text-lg mb-1">{icon}</span>
      <p className="font-medium text-white/90 text-sm">{value} {unit}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
