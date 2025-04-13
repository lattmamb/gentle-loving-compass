
import { Vehicle } from "../types";

export const vehicles: Vehicle[] = [
  {
    id: "model-s",
    model: "Model S Plaid",
    type: "Sedan",
    image: "/tesla-model-s-plaid.png",
    colorVariants: [
      { name: "Pearl White", color: "#f2f2f2", image: "/tesla-model-s-plaid-white.png" },
      { name: "Midnight Silver", color: "#393c41", image: "/tesla-model-s-plaid-silver.png" },
      { name: "Solid Black", color: "#000000", image: "/tesla-model-s-plaid-black.png" },
      { name: "Deep Blue", color: "#1f3a4d", image: "/tesla-model-s-plaid-blue.png" },
      { name: "Red Multi-Coat", color: "#a82a2a", image: "/tesla-model-s-plaid-red.png" }
    ],
    price: {
      daily: 249,
      monthly: 4999,
      yearly: 49999
    },
    specs: {
      range: 396,
      topSpeed: 200,
      acceleration: 1.99
    },
    features: [
      "Tri Motor All-Wheel Drive",
      "Autopilot",
      "Premium Interior",
      "21\" Arachnid Wheels",
      "Supercharger Access",
      "Plaid Track Mode",
      "Carbon Fiber Spoiler"
    ],
    status: "available"
  },
  {
    id: "model-3",
    model: "Model 3",
    type: "Sedan",
    image: "/tesla-model-3-red.png", // Updated to red model 3 image
    colorVariants: [
      { name: "Red Multi-Coat", color: "#a82a2a", image: "/tesla-model-3-red.png" }, // Making red the first/default
      { name: "Pearl White", color: "#f2f2f2", image: "/tesla-model-3-white.png" },
      { name: "Midnight Silver", color: "#393c41", image: "/tesla-model-3-silver.png" },
      { name: "Solid Black", color: "#000000", image: "/tesla-model-3-black.png" },
      { name: "Deep Blue", color: "#1f3a4d", image: "/tesla-model-3-blue.png" }
    ],
    price: {
      daily: 149,
      monthly: 2999,
      yearly: 29999
    },
    specs: {
      range: 358,
      topSpeed: 145,
      acceleration: 4.2
    },
    features: [
      "Autopilot",
      "Rear-Wheel Drive",
      "Premium Interior",
      "18\" Wheels",
      "Supercharger Access"
    ],
    status: "available"
  },
  {
    id: "model-x",
    model: "Model X",
    type: "SUV",
    image: "/tesla-model-x.png",
    colorVariants: [
      { name: "Pearl White", color: "#f2f2f2", image: "/tesla-model-x-white.png" },
      { name: "Midnight Silver", color: "#393c41", image: "/tesla-model-x-silver.png" },
      { name: "Solid Black", color: "#000000", image: "/tesla-model-x-black.png" },
      { name: "Deep Blue", color: "#1f3a4d", image: "/tesla-model-x-blue.png" },
      { name: "Red Multi-Coat", color: "#a82a2a", image: "/tesla-model-x-red.png" }
    ],
    price: {
      daily: 249,
      monthly: 4999,
      yearly: 49999
    },
    specs: {
      range: 351,
      topSpeed: 155,
      acceleration: 2.5
    },
    features: [
      "Autopilot",
      "Falcon Wing Doors",
      "Tri-Zone Climate Control",
      "Premium Interior",
      "22\" Wheels",
      "Supercharger Access"
    ],
    status: "available"
  },
  {
    id: "model-y",
    model: "Model Y",
    type: "SUV",
    image: "/tesla-model-y.png",
    colorVariants: [
      { name: "Pearl White", color: "#f2f2f2", image: "/tesla-model-y-white.png" },
      { name: "Midnight Silver", color: "#393c41", image: "/tesla-model-y-silver.png" },
      { name: "Solid Black", color: "#000000", image: "/tesla-model-y-black.png" },
      { name: "Deep Blue", color: "#1f3a4d", image: "/tesla-model-y-blue.png" },
      { name: "Red Multi-Coat", color: "#a82a2a", image: "/tesla-model-y-red.png" }
    ],
    price: {
      daily: 179,
      monthly: 3599,
      yearly: 35999
    },
    specs: {
      range: 330,
      topSpeed: 135,
      acceleration: 4.8
    },
    features: [
      "Autopilot",
      "All-Wheel Drive",
      "Panoramic Glass Roof",
      "Premium Interior",
      "19\" Wheels",
      "Supercharger Access"
    ],
    status: "available"
  },
  {
    id: "cybertruck",
    model: "Cybertruck",
    type: "Truck",
    image: "/tesla-cybertruck.png",
    colorVariants: [
      { name: "Stainless Steel", color: "#d1d1d1", image: "/tesla-cybertruck.png" }
    ],
    price: {
      daily: 299,
      monthly: 5999,
      yearly: 59999
    },
    specs: {
      range: 500,
      topSpeed: 130,
      acceleration: 2.9
    },
    features: [
      "Autopilot",
      "Adaptive Air Suspension",
      "Ultra-Hard Stainless Steel Exoskeleton",
      "Tesla Armor Glass",
      "Supercharger Access"
    ],
    status: "available"
  },
  {
    id: "roadster",
    model: "Roadster",
    type: "Sports",
    image: "/tesla-roadster.png",
    colorVariants: [
      { name: "Red Multi-Coat", color: "#a82a2a", image: "/tesla-roadster-red.png" },
      { name: "Midnight Silver", color: "#393c41", image: "/tesla-roadster-silver.png" },
      { name: "Deep Blue", color: "#1f3a4d", image: "/tesla-roadster-blue.png" },
      { name: "Pearl White", color: "#f2f2f2", image: "/tesla-roadster-white.png" }
    ],
    price: {
      daily: 399,
      monthly: 7999,
      yearly: 79999
    },
    specs: {
      range: 620,
      topSpeed: 250,
      acceleration: 1.9
    },
    features: [
      "0-60 mph in 1.9 seconds",
      "Top speed over 250 mph",
      "620 mile range",
      "Removable Glass Roof",
      "All-Wheel Drive",
      "Torque Vectoring",
      "Premium Sound System",
      "Exclusive Supercharger Access"
    ],
    status: "available"
  }
];
