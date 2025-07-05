import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { vehicles } from '@/data/vehicles';
import { illinoisLocations } from '@/data/locations';

interface MapDataContextType {
  vehicles: typeof vehicles;
  locations: typeof illinoisLocations;
  activeRiders: any[];
  liveRoutes: any[];
  refreshData: () => void;
  isRefreshing: boolean;
}

const MapDataContext = createContext<MapDataContextType | undefined>(undefined);

export const useMapData = () => {
  const context = useContext(MapDataContext);
  if (!context) {
    throw new Error('useMapData must be used within a MapDataProvider');
  }
  return context;
};

interface MapDataProviderProps {
  children: ReactNode;
}

export const MapDataProvider: React.FC<MapDataProviderProps> = ({ children }) => {
  const [currentVehicles, setCurrentVehicles] = useState(vehicles);
  const [currentLocations, setCurrentLocations] = useState(illinoisLocations);
  const [activeRiders, setActiveRiders] = useState<any[]>([]);
  const [liveRoutes, setLiveRoutes] = useState<any[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setIsRefreshing(true);
    
    // Simulate API calls with real-time updates
    setTimeout(() => {
      // Update vehicle positions and battery levels
      setCurrentVehicles(prevVehicles => 
        prevVehicles.map(vehicle => ({
          ...vehicle,
          availability: {
            ...vehicle.availability,
            batteryLevel: Math.max(20, Math.min(100, (vehicle.availability?.batteryLevel || 85) + (Math.random() - 0.5) * 10)),
            eta: `${Math.floor(Math.random() * 30) + 5} min`,
            inTransit: Math.random() > 0.7
          }
        }))
      );

      // Update charging station availability
      setCurrentLocations(prevLocations =>
        prevLocations.map(location => ({
          ...location,
          availableSpots: Math.max(0, Math.min(location.totalSpots, 
            location.availableSpots + (Math.random() > 0.5 ? 1 : -1)))
        }))
      );

      // Simulate active riders
      setActiveRiders([
        {
          id: 'rider-1',
          name: 'Sarah Chen',
          vehicleId: 'model-3',
          route: 'Chicago Loop → Naperville',
          progress: Math.floor(Math.random() * 100),
          eta: `${Math.floor(Math.random() * 45) + 15} min`
        },
        {
          id: 'rider-2', 
          name: 'Mike Johnson',
          vehicleId: 'model-y',
          route: 'Springfield → Peoria',
          progress: Math.floor(Math.random() * 100),
          eta: `${Math.floor(Math.random() * 60) + 10} min`
        }
      ]);

      // Simulate live routes
      setLiveRoutes([
        {
          id: 'route-1',
          name: 'Chicago Metro Express',
          activeVehicles: 3,
          avgDelay: `${Math.floor(Math.random() * 10)} min`,
          efficiency: `${85 + Math.floor(Math.random() * 15)}%`
        },
        {
          id: 'route-2',
          name: 'University Circuit',
          activeVehicles: 2,
          avgDelay: `${Math.floor(Math.random() * 15)} min`,
          efficiency: `${80 + Math.floor(Math.random() * 20)}%`
        }
      ]);

      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <MapDataContext.Provider
      value={{
        vehicles: currentVehicles,
        locations: currentLocations,
        activeRiders,
        liveRoutes,
        refreshData,
        isRefreshing
      }}
    >
      {children}
    </MapDataContext.Provider>
  );
};