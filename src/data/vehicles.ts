export interface Vehicle {
  id: string;
  model: string;
  brand: string;
  type: "Sedan" | "SUV" | "Truck" | "Sports";
  image: string;
  colorVariants: ColorVariant[];
  price: {
    daily: number;
    monthly: number;
    yearly: number;
  };
  specs: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
  features: string[];
  status: "available" | "booked" | "maintenance" | "arriving-soon";
  location?: string;
  carbonSavings?: number; // kg CO2 saved per year
  availability?: {
    eta: string;
    inTransit: boolean;
    batteryLevel?: number;
  };
  rating?: number;
}

export interface ColorVariant {
  name: string;
  color: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "model-s",
    model: "Model S",
    brand: "Tesla",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Deep Blue",
        color: "#1e3a8a",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 199,
      monthly: 3999,
      yearly: 39999
    },
    specs: {
      range: 405,
      topSpeed: 200,
      acceleration: 3.1
    },
    features: [
      "Autopilot Included",
      "Premium Interior",
      "Glass Roof",
      "Illinois Clean Energy Certified",
      "Chicago Weather Package",
      "Midwest Road Trip Ready"
    ],
    status: "available",
    location: "Chicago Loop Clean Energy Hub",
    carbonSavings: 4200,
    availability: {
      eta: "5 min",
      inTransit: false,
      batteryLevel: 95
    },
    rating: 4.9
  },
  {
    id: "model-3",
    model: "Model 3",
    brand: "Tesla",
    type: "Sedan", 
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41", 
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Red Multi-Coat",
        color: "#cc0000",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 149,
      monthly: 2999,
      yearly: 29999
    },
    specs: {
      range: 358,
      topSpeed: 162,
      acceleration: 5.3
    },
    features: [
      "Standard Autopilot",
      "Premium Audio",
      "Mobile Connector",
      "Illinois Wind Energy Powered",
      "Winter Weather Optimized",
      "Suburban Route Ready"
    ],
    status: "available",
    location: "Naperville Solar Transit Center",
    carbonSavings: 3800,
    availability: {
      eta: "2 min",
      inTransit: false,
      batteryLevel: 88
    },
    rating: 4.8
  },
  {
    id: "model-x",
    model: "Model X",
    brand: "Tesla",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 299,
      monthly: 5999,
      yearly: 59999
    },
    specs: {
      range: 348,
      topSpeed: 163,
      acceleration: 3.8
    },
    features: [
      "Falcon Wing Doors",
      "Full Self-Driving Capability",
      "Premium Interior",
      "Solar Charging Compatible",
      "Family Road Trip Package",
      "Illinois State Park Access"
    ],
    status: "available",
    location: "Springfield Capitol Clean Hub",
    carbonSavings: 5100,
    availability: {
      eta: "12 min",
      inTransit: true,
      batteryLevel: 92
    },
    rating: 4.9
  },
  {
    id: "model-y",
    model: "Model Y",
    brand: "Tesla",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 249,
      monthly: 4999,
      yearly: 49999
    },
    specs: {
      range: 326,
      topSpeed: 155,
      acceleration: 4.8
    },
    features: [
      "Glass Roof",
      "Autopilot Included", 
      "Premium Audio",
      "100% Renewable Energy",
      "University Campus Ready",
      "Corporate Fleet Approved"
    ],
    status: "available",
    location: "Rockford Wind Energy Station",
    carbonSavings: 4600,
    availability: {
      eta: "8 min",
      inTransit: false,
      batteryLevel: 94
    },
    rating: 4.7
  },
  {
    id: "mustang-mach-e",
    model: "Mustang Mach-E",
    brand: "Ford",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Grabber Blue Metallic",
        color: "#1e40af",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Rapid Red",
        color: "#ef4444",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Star White Metallic",
        color: "#f8fafc",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 179,
      monthly: 3599,
      yearly: 35999
    },
    specs: {
      range: 312,
      topSpeed: 111,
      acceleration: 4.8
    },
    features: [
      "Ford Co-Pilot360",
      "SYNC 4A Infotainment",
      "Premium Audio System",
      "American Electric Performance",
      "FordPass App Integration",
      "Midwestern Weather Ready"
    ],
    status: "available",
    location: "Peoria Ford EV Center",
    carbonSavings: 3900,
    availability: {
      eta: "15 min",
      inTransit: true,
      batteryLevel: 87
    },
    rating: 4.6
  },
  {
    id: "hummer-ev",
    model: "Hummer EV",
    brand: "GMC",
    type: "Truck",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Lunar Shadow",
        color: "#374151",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Summit White",
        color: "#ffffff",
        image: "https://images.unsplash.com/photo-1591575316464-bb35012f8176?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 399,
      monthly: 7999,
      yearly: 79999
    },
    specs: {
      range: 381,
      topSpeed: 106,
      acceleration: 3.0
    },
    features: [
      "Crab Walk Mode",
      "Watts to Freedom",
      "Super Cruise",
      "Off-Road Adventure Package",
      "1000HP Electric Power",
      "Illinois Trail Access"
    ],
    status: "available",
    location: "Aurora Adventure Hub",
    carbonSavings: 6200,
    availability: {
      eta: "25 min",
      inTransit: false,
      batteryLevel: 91
    },
    rating: 4.8
  },
  {
    id: "lucid-air",
    model: "Air Dream Edition",
    brand: "Lucid",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    colorVariants: [
      {
        name: "Stellar White",
        color: "#ffffff",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Cosmos Silver",
        color: "#71717a",
        image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Infinite Black",
        color: "#000000",
        image: "https://images.unsplash.com/photo-1580414818638-c174d72b7d78?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    price: {
      daily: 299,
      monthly: 5999,
      yearly: 59999
    },
    specs: {
      range: 516,
      topSpeed: 168,
      acceleration: 2.5
    },
    features: [
      "Glass Canopy Roof",
      "34-inch Curved Display",
      "Dream Drive Pro ADAS",
      "Ultra-Luxury Interior",
      "500+ Mile Range Leader",
      "Executive Travel Ready"
    ],
    status: "arriving-soon",
    location: "Chicago Premium EV Lounge",
    carbonSavings: 5800,
    availability: {
      eta: "3 days",
      inTransit: true,
      batteryLevel: 100
    },
    rating: 4.9
  }
];
