import React from 'react';
import { illinoisLocations } from '@/data/locations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Zap, MapPin, Clock, Leaf } from 'lucide-react';

interface HubDetailsPanelProps {
  hubId: string;
  onClose: () => void;
}

export const HubDetailsPanel: React.FC<HubDetailsPanelProps> = ({ hubId, onClose }) => {
  const hub = illinoisLocations.find(h => h.id === hubId);
  
  if (!hub) return null;

  const getEnergySourceColor = (source: string) => {
    switch (source) {
      case 'solar': return 'from-yellow-500 to-orange-500';
      case 'wind': return 'from-blue-500 to-cyan-500';
      case 'mixed': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getEnergySourceIcon = (source: string) => {
    switch (source) {
      case 'solar': return '☀️';
      case 'wind': return '💨';
      case 'mixed': return '⚡';
      default: return '🔌';
    }
  };

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white z-20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{hub.name}</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Energy Source */}
      <div className="mb-4">
        <div className={`bg-gradient-to-r ${getEnergySourceColor(hub.energySource)} rounded-lg p-3 mb-2`}>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getEnergySourceIcon(hub.energySource)}</span>
            <div>
              <p className="font-medium capitalize">{hub.energySource} Powered</p>
              <p className="text-sm opacity-90">Clean Energy Source</p>
            </div>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-400">{hub.availableSpots}</div>
          <p className="text-xs text-white/60">Available</p>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-400">{hub.totalSpots}</div>
          <p className="text-xs text-white/60">Total Spots</p>
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <MapPin className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium">Address</span>
        </div>
        <p className="text-sm text-white/80">{hub.address}</p>
        <p className="text-sm text-white/60">{hub.city}, {hub.state}</p>
      </div>

      {/* Features */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Features</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {hub.fastCharging && (
            <Badge variant="outline" className="text-xs">
              ⚡ Fast Charging
            </Badge>
          )}
          <Badge variant="outline" className="text-xs">
            <Leaf className="w-3 h-3 mr-1" />
            {hub.energySource === 'solar' ? '100% Solar' : 
             hub.energySource === 'wind' ? '100% Wind' : 
             '85% Renewable'}
          </Badge>
        </div>
      </div>

      {/* Real-time Status */}
      <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-300">Live Status: Operational</span>
        </div>
        <p className="text-xs text-green-200 mt-1">Last updated: 2 min ago</p>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <Button className="flex-1" variant="outline">
          Get Directions
        </Button>
        <Button className="flex-1">
          Reserve Spot
        </Button>
      </div>
    </div>
  );
};