import React from 'react';
import { Button } from '@/components/ui/button';
import { Car, Zap, Users, Route } from 'lucide-react';

interface MapFiltersProps {
  filters: {
    vehicles: boolean;
    hubs: boolean;
    riders: boolean;
    routes: boolean;
  };
  onFiltersChange: (filters: any) => void;
}

export const MapFilters: React.FC<MapFiltersProps> = ({ filters, onFiltersChange }) => {
  const toggleFilter = (key: keyof typeof filters) => {
    onFiltersChange({
      ...filters,
      [key]: !filters[key]
    });
  };

  const filterButtons = [
    { key: 'vehicles' as const, icon: Car, label: 'Vehicles', color: 'from-blue-500 to-purple-600' },
    { key: 'hubs' as const, icon: Zap, label: 'Charging Hubs', color: 'from-green-500 to-emerald-600' },
    { key: 'riders' as const, icon: Users, label: 'Active Riders', color: 'from-orange-500 to-red-600' },
    { key: 'routes' as const, icon: Route, label: 'Routes', color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
      <div className="flex flex-col space-y-2">
        <h3 className="text-white text-sm font-medium mb-2">Map Layers</h3>
        {filterButtons.map(({ key, icon: Icon, label, color }) => (
          <Button
            key={key}
            variant={filters[key] ? "default" : "outline"}
            size="sm"
            onClick={() => toggleFilter(key)}
            className={`justify-start text-left ${
              filters[key] 
                ? `bg-gradient-to-r ${color} hover:opacity-90` 
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};