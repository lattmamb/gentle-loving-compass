import React from 'react';
import { vehicles } from '@/data/vehicles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Battery, Clock, MapPin, DollarSign, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VehicleDetailsPanelProps {
  vehicleId: string;
  onClose: () => void;
}

export const VehicleDetailsPanel: React.FC<VehicleDetailsPanelProps> = ({ vehicleId, onClose }) => {
  const vehicle = vehicles.find(v => v.id === vehicleId);
  
  if (!vehicle) return null;

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white z-20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Tesla {vehicle.model}</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Vehicle Image */}
      <div className="w-full h-32 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg mb-4 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.model}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Status Badge */}
      <div className="mb-3">
        <Badge variant={vehicle.status === 'available' ? 'default' : 'secondary'}>
          {vehicle.status === 'available' ? 'Available Now' : 'In Transit'}
        </Badge>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/10 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <Battery className="w-4 h-4 text-green-400" />
            <span className="text-sm">{vehicle.availability?.batteryLevel || 85}%</span>
          </div>
          <p className="text-xs text-white/60">Battery</p>
        </div>
        <div className="bg-white/10 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm">{vehicle.availability?.eta || '5 min'}</span>
          </div>
          <p className="text-xs text-white/60">ETA</p>
        </div>
      </div>

      {/* Current Location */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <MapPin className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium">Current Location</span>
        </div>
        <p className="text-sm text-white/80">{vehicle.location}</p>
      </div>

      {/* Pricing */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <DollarSign className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">Pricing</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/80">Daily: ${vehicle.price.daily}</span>
          <span className="text-white/80">Monthly: ${vehicle.price.monthly}</span>
        </div>
      </div>

      {/* Transit Status */}
      {vehicle.availability?.inTransit && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <User className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Status</span>
          </div>
          <p className="text-sm text-white/80">In Transit</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-2">
        <Button asChild className="flex-1">
          <Link to={`/vehicles/${vehicle.id}`}>
            View Details
          </Link>
        </Button>
        {vehicle.status === 'available' && (
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/book/${vehicle.id}`}>
              Book Now
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};