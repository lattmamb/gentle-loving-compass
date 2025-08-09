import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  className?: string;
  interactive?: boolean;
  showVehicles?: boolean;
}

const EnhancedMapBackground: React.FC<MapProps> = ({ 
  className = "", 
  interactive = false, 
  showVehicles = true 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Mock vehicle data for Illinois
  const vehicles = [
    { id: 1, lng: -87.6298, lat: 41.8781, status: "available", model: "Model 3" }, // Chicago
    { id: 2, lng: -87.6847, lat: 42.0451, status: "in-use", model: "Model Y" }, // Evanston
    { id: 3, lng: -88.0834, lat: 41.8781, status: "charging", model: "Model S" }, // Naperville
    { id: 4, lng: -89.6501, lat: 39.8014, status: "available", model: "Model 3" }, // Springfield
    { id: 5, lng: -89.0937, lat: 42.2711, status: "available", model: "Model Y" }, // Rockford
  ];

  const chargingStations = [
    { id: 1, lng: -87.6098, lat: 41.8781, name: "Downtown Chicago Hub" },
    { id: 2, lng: -87.7845, lat: 41.8919, name: "O'Hare Airport Station" },
    { id: 3, lng: -88.2434, lat: 41.7658, name: "Aurora Energy Center" },
    { id: 4, lng: -89.3985, lat: 40.6931, name: "Peoria Transit Hub" },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // For development, using a placeholder token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-89.0, 40.0], // Illinois center
      zoom: 6.5,
      pitch: 0,
      bearing: 0,
      interactive: interactive,
      attributionControl: false,
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      if (showVehicles && map.current) {
        // Add vehicle markers
        vehicles.forEach(vehicle => {
          const el = document.createElement('div');
          el.className = 'vehicle-marker';
          el.style.cssText = `
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: ${
              vehicle.status === 'available' ? '#22c55e' :
              vehicle.status === 'in-use' ? '#3b82f6' :
              vehicle.status === 'charging' ? '#eab308' : '#6b7280'
            };
          `;
          
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.5)';
            el.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6)';
          });
          
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
            el.style.boxShadow = 'none';
          });

          new mapboxgl.Marker(el)
            .setLngLat([vehicle.lng, vehicle.lat])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div style="color: black; padding: 8px;">
                  <strong>${vehicle.model}</strong><br/>
                  Status: ${vehicle.status}<br/>
                  ID: #${vehicle.id}
                </div>
              `))
            .addTo(map.current!);
        });

        // Add charging station markers
        chargingStations.forEach(station => {
          const el = document.createElement('div');
          el.innerHTML = '⚡';
          el.style.cssText = `
            font-size: 16px;
            color: #fbbf24;
            cursor: pointer;
            transition: all 0.3s ease;
          `;
          
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.3)';
            el.style.textShadow = '0 0 10px #fbbf24';
          });
          
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
            el.style.textShadow = 'none';
          });

          new mapboxgl.Marker(el)
            .setLngLat([station.lng, station.lat])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div style="color: black; padding: 8px;">
                  <strong>${station.name}</strong><br/>
                  Charging Station<br/>
                  Available: 4/6 spots
                </div>
              `))
            .addTo(map.current!);
        });
      }

      // Add subtle animation
      if (!interactive) {
        let start = 0;
        const animate = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          
          if (map.current) {
            const center = map.current.getCenter();
            center.lng += Math.sin(progress / 20000) * 0.0001;
            map.current.setCenter(center);
          }
          
          requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [interactive, showVehicles]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      
      {/* Loading state */}
      {!mapLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 bg-gray-900 flex items-center justify-center"
        >
          <div className="text-white text-lg">Loading Illinois Fleet Network...</div>
        </motion.div>
      )}
      
      {/* Legend */}
      {showVehicles && mapLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-4 left-4 glass-luxury p-3 rounded-lg"
        >
          <div className="text-xs text-white/80 mb-2 font-medium">Fleet Status</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-white/70">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-white/70">In Use</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-white/70">Charging</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⚡</span>
              <span className="text-xs text-white/70">Charging Stations</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedMapBackground;