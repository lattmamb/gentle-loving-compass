
"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { vehicles } from "@/data/vehicles";
import { marqueeImages } from "@/data/marqueeImages";

// Transform our vehicle and marquee data into the format expected by HeroParallax
const generateProductsData = () => {
  const teslaProducts = vehicles.map(vehicle => ({
    title: vehicle.model,
    link: `/vehicles/${vehicle.id}`,
    thumbnail: vehicle.colorVariants[0].image
  }));

  // Add some images from marqueeImages to fill out the grid if needed
  const additionalImages = marqueeImages.slice(0, 15 - teslaProducts.length).map((img, index) => ({
    title: `Tesla Experience ${index + 1}`,
    link: "/vehicles",
    thumbnail: img
  }));

  return [...teslaProducts, ...additionalImages].slice(0, 15);
};

export default function HeroParallaxDemo() {
  return <HeroParallax products={generateProductsData()} />;
}
