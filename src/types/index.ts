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
  energySource?: "solar" | "wind" | "grid" | "mixed";
  fastCharging?: boolean;
}

export interface TransitRoute {
  id: string;
  name: string;
  description: string;
  stops: string[];
  duration: string;
  frequency: string;
  carbonSavings: number;
  price: {
    single: number;
    daily: number;
    monthly: number;
  };
}

export interface CorporateSubscription {
  id: string;
  companyName: string;
  employeeCount: number;
  routePreferences: string[];
  monthlyBudget: number;
  sustainabilityGoals: {
    carbonReduction: number;
    renewableEnergyPercent: number;
  };
}

export interface CommunityAsset {
  id: string;
  name: string;
  location: string;
  type: "charging_hub" | "solar_farm" | "community_center";
  totalTokens: number;
  availableTokens: number;
  tokenPrice: number;
  monthlyRevenue: number;
  status: "active" | "construction" | "planned";
  communityBenefits: string[];
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  type: "infrastructure" | "community" | "operational";
  status: "active" | "passed" | "rejected";
  votesFor: number;
  votesAgainst: number;
  totalEligibleVotes: number;
  endDate: Date;
  proposer: string;
  requiredMajority: number;
}

export interface CommunityMember {
  id: string;
  name: string;
  location: string;
  role: "member" | "coordinator" | "leader";
  tokensOwned: number;
  votingPower: number;
  joinDate: Date;
  contributionScore: number;
}

export interface WorkforceTraining {
  id: string;
  title: string;
  description: string;
  duration: string;
  certification: string;
  location: string;
  capacity: number;
  enrolled: number;
  startDate: Date;
  instructor: string;
  jobPlacementRate: number;
}

export interface EconomicImpact {
  jobsCreated: number;
  localSpending: number;
  trainingGraduates: number;
  communityProjects: number;
  carbonOffset: number;
  renewableEnergyGeneration: number;
}

export interface UnityFleetSubscription {
  id: string;
  type: "FlexRide" | "Take-Home" | "All-Access";
  userId: string;
  startDate: Date;
  monthlyFee: number;
  features: string[];
  communityBenefits: string[];
  tokenEarnings?: number;
  votingRights: boolean;
}
