
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentEnergyMix, illinoisIncentives } from "@/data/cleanEnergyData";
import { Battery, Leaf, Zap, Wind } from "lucide-react";

interface EnergyDashboardProps {
  userCarbonSavings?: number;
  milesElectric?: number;
}

const EnergyDashboard: React.FC<EnergyDashboardProps> = ({
  userCarbonSavings = 0,
  milesElectric = 0
}) => {
  const energyMix = getCurrentEnergyMix();
  const renewablePercent = energyMix
    .filter(source => ['Wind', 'Solar'].includes(source.source))
    .reduce((sum, source) => sum + source.percent, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Carbon Saved</p>
                <p className="text-2xl font-bold text-green-400">
                  {userCarbonSavings.toLocaleString()} kg
                </p>
              </div>
              <Leaf className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Electric Miles</p>
                <p className="text-2xl font-bold text-blue-400">
                  {milesElectric.toLocaleString()}
                </p>
              </div>
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Renewable Energy</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {renewablePercent}%
                </p>
              </div>
              <Wind className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Clean Grid</p>
                <p className="text-2xl font-bold text-purple-400">Illinois</p>
                <p className="text-xs text-white/60">70% Clean</p>
              </div>
              <Battery className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Illinois Energy Mix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {energyMix.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <span className="text-white/90">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${source.percent}%`,
                          backgroundColor: source.color 
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{source.percent}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Available Incentives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {illinoisIncentives.slice(0, 3).map((incentive) => (
                <div key={incentive.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-white/90">{incentive.name}</h4>
                    <span className="text-green-400 font-bold">
                      ${incentive.amount.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{incentive.description}</p>
                  <p className="text-xs text-blue-400 mt-1">{incentive.provider}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergyDashboard;
