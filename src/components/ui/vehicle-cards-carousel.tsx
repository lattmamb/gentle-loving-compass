
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
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

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] hide-scrollbar"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" 
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <Button
            variant="outline"
            size="icon"
            className="relative z-40 h-10 w-10 rounded-full neo-button border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="relative z-40 h-10 w-10 rounded-full neo-button border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  vehicle,
  index,
  layout = false,
}: {
  vehicle: Vehicle;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/book/${vehicle.id}`);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/vehicles/${vehicle.id}`);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${vehicle.id}` : undefined}
              className="max-w-5xl mx-auto neo-elevated bg-[#141821] h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <motion.p
                layoutId={layout ? `category-${vehicle.id}` : undefined}
                className="text-base font-medium text-blue-400"
              >
                {vehicle.type}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${vehicle.id}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-gradient-blue mt-4"
              >
                Tesla {vehicle.model}
              </motion.p>
              
              <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.model}
                      className="w-full h-auto object-cover rounded-xl neo-glow-blue" 
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Specifications</h3>
                      <div className="grid grid-cols-3 gap-4 my-4">
                        <Stat label="Range" value={vehicle.specs.range} unit="mi" icon="⚡" />
                        <Stat label="Top Speed" value={vehicle.specs.topSpeed} unit="mph" icon="🏎️" />
                        <Stat label="0-60" value={vehicle.specs.acceleration} unit="sec" icon="⏱️" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-white/70">
                        {vehicle.features.slice(0, 4).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Pricing</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <PriceTag period="Daily" amount={vehicle.price.daily} />
                        <PriceTag period="Monthly" amount={vehicle.price.monthly} />
                        <PriceTag period="Yearly" amount={vehicle.price.yearly} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-8">
                  <Button 
                    variant="outline"
                    onClick={handleViewDetails}
                    className="neo-button border-white/20 text-white hover:bg-white/10"
                  >
                    View Details
                  </Button>
                  <Button 
                    onClick={handleBookNow}
                    className="neo-button bg-blue-600 hover:bg-blue-700"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${vehicle.id}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl neo-elevated h-80 w-56 md:h-[30rem] md:w-80 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${vehicle.id}` : undefined}
            className="text-blue-400 text-sm md:text-base font-medium text-left"
          >
            {vehicle.type}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${vehicle.id}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left mt-2"
          >
            Tesla {vehicle.model}
          </motion.p>
          <p className="text-white/80 mt-4 text-left text-sm">
            From {formatCurrency(vehicle.price.daily)}/day
          </p>
        </div>
        <img
          src={vehicle.image}
          alt={vehicle.model}
          className="object-cover absolute z-10 inset-0 w-full h-full"
        />
      </motion.button>
    </>
  );
};

function Stat({
  label,
  value,
  unit,
  icon,
}: {
  label: string;
  value: number;
  unit: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center text-center neo-pressed rounded-lg p-2">
      <span className="text-lg mb-1">{icon}</span>
      <p className="font-medium text-white/90 text-sm">{value} {unit}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}

function PriceTag({ period, amount }: { period: string; amount: number }) {
  return (
    <div className="flex flex-col items-center text-center neo-pressed rounded-lg p-3">
      <p className="text-sm text-white/60">{period}</p>
      <p className="font-bold text-white text-lg">{formatCurrency(amount)}</p>
    </div>
  );
}
