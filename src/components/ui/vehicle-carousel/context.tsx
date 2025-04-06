
import React, { createContext, useState, useContext, useCallback } from "react";
import { Vehicle } from "@/types";

interface CarouselContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  items: Vehicle[];
  setItems: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  length: number;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

interface CarouselProviderProps {
  children: React.ReactNode;
  items?: Vehicle[];
  defaultIndex?: number;
}

const CarouselProvider = ({
  children,
  items: initialItems = [],
  defaultIndex = 0,
}: CarouselProviderProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [items, setItems] = useState<Vehicle[]>(initialItems);
  
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);
  
  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);
  
  const value = {
    activeIndex,
    setActiveIndex,
    goToNext,
    goToPrev,
    items,
    setItems,
    length: items.length,
  };
  
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

// Custom hook to use the carousel context
const useCarousel = (): CarouselContextType => {
  const context = useContext(CarouselContext);
  
  if (context === undefined) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  
  return context;
};

export { CarouselContext, CarouselProvider, useCarousel };
