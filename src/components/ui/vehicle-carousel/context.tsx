
import React, { createContext, useContext, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarouselContextProps {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

export const CarouselContext = createContext<CarouselContextProps>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const useCarouselContext = () => useContext(CarouselContext);

export const CarouselProvider: React.FC<{
  children: React.ReactNode;
  initialScroll?: number;
}> = ({ children, initialScroll = 0 }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile ? 230 : 384; // (md:w-96)
      const gap = isMobile ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const contextValue = {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    currentIndex,
    onCardClose: handleCardClose,
    checkScrollability
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      {typeof children === 'function' ? children(contextValue) : children}
    </CarouselContext.Provider>
  );
};
