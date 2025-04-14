
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import { CarFront, Flame, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import VehicleCard from "../VehicleCard";

const FeaturedVehiclesCarousel = () => {
  // Ensure the Model 3 is first featured alongside Model S Plaid
  const modelSPlaid = vehicles.find((v) => v.id === "model-s");
  const model3 = vehicles.find((v) => v.id === "model-3");
  const otherVehicles = vehicles
    .filter((v) => v.id !== "model-s" && v.id !== "model-3")
    .slice(0, 2);

  // Arrange featured vehicles with Model 3 first, then Model S Plaid, then others
  const featuredVehicles: Vehicle[] = [];

  if (model3) featuredVehicles.push(model3); // Model 3 is now first!
  if (modelSPlaid) featuredVehicles.push(modelSPlaid);
  featuredVehicles.push(...otherVehicles);

  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-red-900/10 to-black/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <CarFront className="text-red-500" />
              <span>Featured Vehicles</span>
              {model3 && (
                <span className="bg-red-600/30 text-red-400 text-sm px-3 py-1 rounded-full flex items-center">
                  <Flame size={14} className="mr-1 animate-pulse-subtle" /> Model 3 Red
                </span>
              )}
              {modelSPlaid && (
                <span className="bg-blue-500/20 text-blue-400 text-sm px-2 py-1 rounded-full flex items-center">
                  <Zap size={12} className="mr-1" /> New Plaid
                </span>
              )}
            </h2>
            <p className="text-white/60 mt-2">Experience the future of electric transportation</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredVehicles.map((vehicle, index) => (
                <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div
                    className={`h-full ${
                      vehicle.model.includes("Plaid") ? "relative z-10 transform -rotate-1" : ""
                    } ${
                      vehicle.id === "model-3" ? "relative z-20 transform rotate-1 scale-110" : ""
                    }`}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none h-10 w-10 border-white/20 text-white hover:bg-white/10 rounded-full" />
              <CarouselNext className="static transform-none h-10 w-10 border-white/20 text-white hover:bg-white/10 rounded-full" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 rounded-full px-8 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
          >
            <Link to="/vehicles">View All Vehicles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVehiclesCarousel;
