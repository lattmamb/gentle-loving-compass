
export interface EnergyMetrics {
  carbonSaved: number; // kg CO2
  renewablePercent: number;
  milesElectric: number;
  gridCleanPercent: number;
}

export interface IllinoisIncentive {
  id: string;
  name: string;
  type: "rebate" | "tax_credit" | "grant";
  amount: number;
  description: string;
  eligibility: string;
  provider: "State of Illinois" | "Federal" | "Local" | "Utility";
}

export const illinoisIncentives: IllinoisIncentive[] = [
  {
    id: "il-ev-rebate",
    name: "Illinois EV Rebate Program",
    type: "rebate",
    amount: 4000,
    description: "State rebate for new electric vehicle purchases and subscriptions",
    eligibility: "Illinois residents, income qualified",
    provider: "State of Illinois"
  },
  {
    id: "federal-ev-credit",
    name: "Federal EV Tax Credit",
    type: "tax_credit",
    amount: 7500,
    description: "Federal tax credit for qualified electric vehicles",
    eligibility: "All US taxpayers",
    provider: "Federal"
  },
  {
    id: "comed-rebate",
    name: "ComEd Smart Charging Rebate",
    type: "rebate",
    amount: 500,
    description: "Utility rebate for smart charging equipment",
    eligibility: "ComEd customers",
    provider: "Utility"
  },
  {
    id: "chicago-fleet",
    name: "Chicago Corporate Fleet Program",
    type: "grant",
    amount: 10000,
    description: "Grant for businesses transitioning to electric fleets",
    eligibility: "Chicago-based businesses",
    provider: "Local"
  }
];

export const getCurrentEnergyMix = (): { source: string; percent: number; color: string }[] => [
  { source: "Wind", percent: 42, color: "#22c55e" },
  { source: "Nuclear", percent: 28, color: "#3b82f6" },
  { source: "Natural Gas", percent: 18, color: "#f59e0b" },
  { source: "Solar", percent: 8, color: "#eab308" },
  { source: "Coal", percent: 4, color: "#6b7280" }
];
