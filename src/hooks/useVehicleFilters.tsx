
import { useState, useEffect } from "react";
import { Vehicle } from "@/types";

export function useVehicleFilters(allVehicles: Vehicle[]) {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(allVehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const vehicleTypes = Array.from(new Set(allVehicles.map(v => v.type)));
  const allFeatures = Array.from(
    new Set(allVehicles.flatMap(v => v.features))
  );

  useEffect(() => {
    let filtered = [...allVehicles];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        v => v.model.toLowerCase().includes(query) || v.type.toLowerCase().includes(query)
      );
    }

    // Filter by price
    filtered = filtered.filter(
      v => v.price.daily >= priceRange[0] && v.price.daily <= priceRange[1]
    );

    // Filter by vehicle type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(v => selectedTypes.includes(v.type));
    }

    // Filter by features
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(v => 
        selectedFeatures.every(feature => v.features.includes(feature))
      );
    }

    setFilteredVehicles(filtered);
  }, [searchQuery, priceRange, selectedTypes, selectedFeatures, allVehicles]);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 1000]);
    setSelectedTypes([]);
    setSelectedFeatures([]);
  };

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return {
    filteredVehicles,
    searchQuery,
    setSearchQuery,
    priceRange,
    setPriceRange,
    selectedTypes,
    selectedFeatures,
    isFiltersVisible,
    vehicleTypes,
    allFeatures,
    toggleType,
    toggleFeature,
    resetFilters,
    toggleFiltersVisibility
  };
}
