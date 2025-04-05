
import React from "react";
import LocationCard from "@/components/locations/LocationCard";
import { Location } from "@/types/locations";

interface LocationsGridProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelectLocation: (location: Location) => void;
}

const LocationsGrid = ({ 
  locations, 
  selectedLocation, 
  onSelectLocation 
}: LocationsGridProps) => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient-blue">Available Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard 
              key={location.id} 
              location={location} 
              isSelected={selectedLocation?.id === location.id}
              onClick={onSelectLocation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;
