
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
  currentIndex?: number;
  onCardClose?: (index: number) => void;
  initialScroll?: number;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

interface CarouselProviderProps {
  children: React.ReactNode;
  items?: Vehicle[];
  defaultIndex?: number;
  initialScroll?: number;
}

const CarouselProvider = ({
  children,
  items: initialItems = [],
  defaultIndex = 0,
  initialScroll = 0,
}: CarouselProviderProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [items, setItems] = useState<Vehicle[]>(initialItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);
  
  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);
  
  const onCardClose = useCallback((index: number) => {
    // Optional callback when a card is closed
  }, []);
  
  const value = {
    activeIndex,
    setActiveIndex,
    goToNext,
    goToPrev,
    items,
    setItems,
    length: items.length,
    currentIndex,
    onCardClose,
    initialScroll,
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

// Add the alias export for backward compatibility
const useCarouselContext = useCarousel;

export { CarouselContext, CarouselProvider, useCarousel, useCarouselContext };
