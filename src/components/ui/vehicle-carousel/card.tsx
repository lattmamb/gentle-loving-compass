import React, { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useCarousel } from "./context";
import { Stat, PriceTag } from "./card-stats";

interface CardProps {
  vehicle: Vehicle;
  index: number;
  layout?: boolean;
  onSwipe?: (direction: string) => void;
}

export const Card = ({
  vehicle,
  index,
  layout = false,
  onSwipe,
}: CardProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useCarousel();
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
    if (onCardClose) onCardClose(index);
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/book/${vehicle.id}`);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/vehicles/${vehicle.id}`);
  };
  
  const handleSwipe = (direction: string) => {
    if (onSwipe) onSwipe(direction);
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
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${vehicle.id}` : undefined}
              className="max-w-5xl mx-auto neo-elevated bg-[#141821] h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.y > 200) {
                  handleClose();
                }
              }}
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
              
              <div className="text-center pb-2 text-white/50 text-xs mt-4">
                Pull down to close
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${vehicle.id}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl neo-elevated h-80 w-56 md:h-[30rem] md:w-80 overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileTap={{ scale: 0.98 }}
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
