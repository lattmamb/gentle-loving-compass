
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
}

export interface ColorVariant {
  name: string;
  color: string;
  image: string;
}

export interface Booking {
  id: string;
  vehicleId: string;
  startDate: Date;
  endDate: Date;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  userId: string;
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: string[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  availableVehicles: string[];
}
