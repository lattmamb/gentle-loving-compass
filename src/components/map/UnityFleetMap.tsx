import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { vehicles } from '@/data/vehicles';
import { illinoisLocations } from '@/data/locations';
import { MapFilters } from './MapFilters';
import { VehicleDetailsPanel } from './VehicleDetailsPanel';
import { HubDetailsPanel } from './HubDetailsPanel';

interface UnityFleetMapProps {
  className?: string;
  showFilters?: boolean;
  focusLocation?: string;
  onVehicleSelect?: (vehicleId: string) => void;
}

export const UnityFleetMap: React.FC<UnityFleetMapProps> = ({
  className = "w-full h-full",
  showFilters = true,
  focusLocation,
  onVehicleSelect
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [selectedHub, setSelectedHub] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [filters, setFilters] = useState({
    vehicles: true,
    hubs: true,
    riders: true,
    routes: true
  });

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    // Use a placeholder token - in production, get from environment
    mapboxgl.accessToken = 'pk.eyJ1IjoidW5pdHlmbGVldCIsImEiOiJjbHdqMTIzNDUifQ.placeholder';
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-89.1965, 40.6331], // Illinois center
        zoom: 7,
        pitch: 45,
        bearing: 0
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        setMapLoaded(true);
        initializeMapLayers();
      });

      // Handle vehicle clicks
      map.current.on('click', 'vehicles', (e) => {
        if (e.features && e.features[0]) {
          const vehicleId = e.features[0].properties?.id;
          setSelectedVehicle(vehicleId);
          setSelectedHub(null);
          onVehicleSelect?.(vehicleId);
        }
      });

      // Handle hub clicks
      map.current.on('click', 'hubs', (e) => {
        if (e.features && e.features[0]) {
          const hubId = e.features[0].properties?.id;
          setSelectedHub(hubId);
          setSelectedVehicle(null);
        }
      });

      // Add hover effects
      map.current.on('mouseenter', 'vehicles', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });

      map.current.on('mouseleave', 'vehicles', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });

    } catch (error) {
      console.log('Map initialization skipped - add Mapbox token for full functionality');
      // Fallback to mock interface
      setMapLoaded(true);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  // Initialize map layers
  const initializeMapLayers = () => {
    if (!map.current) return;

    try {
      // Add vehicle markers
      vehicles.forEach((vehicle) => {
        if (vehicle.location) {
          // Find corresponding location from illinoisLocations
          const hub = illinoisLocations.find(loc => loc.name === vehicle.location);
          if (hub) {
            const el = document.createElement('div');
            el.className = 'vehicle-marker';
            el.innerHTML = `
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            `;
            
            el.addEventListener('click', () => {
              setSelectedVehicle(vehicle.id);
              setSelectedHub(null);
              onVehicleSelect?.(vehicle.id);
            });

            new mapboxgl.Marker(el)
              .setLngLat([hub.coordinates.lng, hub.coordinates.lat])
              .addTo(map.current!);
          }
        }
      });

      // Add hub markers
      illinoisLocations.forEach((hub) => {
        const el = document.createElement('div');
        el.className = 'hub-marker';
        el.innerHTML = `
          <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <div class="text-white text-xs font-bold">${hub.availableSpots}</div>
          </div>
        `;
        
        el.addEventListener('click', () => {
          setSelectedHub(hub.id);
          setSelectedVehicle(null);
        });

        new mapboxgl.Marker(el)
          .setLngLat([hub.coordinates.lng, hub.coordinates.lat])
          .addTo(map.current!);
      });

    } catch (error) {
      console.log('Layer initialization skipped');
    }
  };

  // Focus on specific location
  useEffect(() => {
    if (!map.current || !mapLoaded || !focusLocation) return;

    const location = illinoisLocations.find(loc => loc.id === focusLocation);
    if (location) {
      map.current.flyTo({
        center: [location.coordinates.lng, location.coordinates.lat],
        zoom: 12,
        duration: 2000
      });
    }
  }, [focusLocation, mapLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Fallback when Mapbox isn't available */}
        {!mapLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p>Loading Illinois Fleet Network...</p>
            </div>
          </div>
        )}
      </div>

      {/* Map Filters */}
      {showFilters && (
        <div className="absolute top-4 left-4 z-10">
          <MapFilters 
            filters={filters} 
            onFiltersChange={setFilters}
          />
        </div>
      )}

      {/* Vehicle Details Panel */}
      {selectedVehicle && (
        <VehicleDetailsPanel
          vehicleId={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}

      {/* Hub Details Panel */}
      {selectedHub && (
        <HubDetailsPanel
          hubId={selectedHub}
          onClose={() => setSelectedHub(null)}
        />
      )}

      {/* Live Status Indicator */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Tracking Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};