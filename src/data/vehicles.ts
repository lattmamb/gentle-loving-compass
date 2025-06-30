export interface Vehicle {
  id: string;
  model: string;
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
  status: "available" | "booked" | "maintenance";
  location?: string;
  carbonSavings?: number; // kg CO2 saved per year
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
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Deep Blue",
        color: "#1e3a8a",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
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
    carbonSavings: 4200
  },
  {
    id: "model-3",
    model: "Model 3",
    type: "Sedan", 
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41", 
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Red Multi-Coat",
        color: "#cc0000",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
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
    carbonSavings: 3800
  },
  {
    id: "model-x",
    model: "Model X",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
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
    carbonSavings: 5100
  },
  {
    id: "model-y",
    model: "Model Y",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80",
    colorVariants: [
      {
        name: "Pearl White",
        color: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Midnight Silver",
        color: "#393c41",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"
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
    carbonSavings: 4600
  }
];
