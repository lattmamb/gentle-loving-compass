
export interface ChargingStation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  energySource: "solar" | "wind" | "grid" | "mixed";
  fastCharging: boolean;
  availableSpots: number;
  totalSpots: number;
}

export const illinoisLocations: ChargingStation[] = [
  {
    id: "chicago-loop",
    name: "Chicago Loop Clean Energy Hub",
    address: "100 N LaSalle St",
    city: "Chicago",
    state: "IL",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    energySource: "wind",
    fastCharging: true,
    availableSpots: 12,
    totalSpots: 20
  },
  {
    id: "naperville-solar",
    name: "Naperville Solar Transit Center",
    address: "95 W Jackson Ave",
    city: "Naperville",
    state: "IL",
    coordinates: { lat: 41.7508, lng: -88.1535 },
    energySource: "solar",
    fastCharging: true,
    availableSpots: 8,
    totalSpots: 15
  },
  {
    id: "springfield-capitol",
    name: "Springfield Capitol Clean Hub",
    address: "300 Capitol Ave",
    city: "Springfield",
    state: "IL",
    coordinates: { lat: 39.7817, lng: -89.6501 },
    energySource: "mixed",
    fastCharging: true,
    availableSpots: 6,
    totalSpots: 12
  },
  {
    id: "rockford-wind",
    name: "Rockford Wind Energy Station",
    address: "425 E State St",
    city: "Rockford",
    state: "IL",
    coordinates: { lat: 42.2711, lng: -89.0940 },
    energySource: "wind",
    fastCharging: true,
    availableSpots: 5,
    totalSpots: 10
  },
  {
    id: "peoria-riverfront",
    name: "Peoria Riverfront Green Hub",
    address: "201 SW Water St",
    city: "Peoria",
    state: "IL",
    coordinates: { lat: 40.6936, lng: -89.5889 },
    energySource: "solar",
    fastCharging: true,
    availableSpots: 7,
    totalSpots: 14
  }
];

export const transitRoutes = [
  {
    id: "chicago-suburbs",
    name: "Chicago Metro Express",
    description: "Connect from suburbs to downtown Chicago",
    stops: ["Naperville", "Aurora", "Schaumburg", "Chicago Loop"],
    duration: "45-60 mins",
    frequency: "Every 15 mins during peak hours"
  },
  {
    id: "university-circuit",
    name: "Illinois University Circuit",
    description: "Connecting major Illinois universities",
    stops: ["U of I Urbana", "ISU Normal", "NIU DeKalb", "Northwestern Evanston"],
    duration: "2-3 hours full circuit",
    frequency: "Hourly service"
  },
  {
    id: "state-capital",
    name: "Illinois State Government Route",
    description: "Springfield to Chicago government corridor",
    stops: ["Springfield Capitol", "Bloomington", "Joliet", "Chicago Loop"],
    duration: "3 hours",
    frequency: "Every 2 hours"
  }
];
