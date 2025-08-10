import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Car, Leaf, DollarSign } from "lucide-react";

const metricCls = "glass-card hover:shadow-[var(--shadow-elegant)] transition-all duration-300";

const KPICards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className={metricCls}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Active Fleet</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-3xl font-semibold text-foreground">247</div>
          <Car className="h-6 w-6 text-primary" />
        </CardContent>
      </Card>

      <Card className={metricCls}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Utilization</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-3xl font-semibold text-foreground">76%</div>
          <TrendingUp className="h-6 w-6 text-green-400" />
        </CardContent>
      </Card>

      <Card className={metricCls}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Carbon Saved</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-3xl font-semibold text-foreground">12.8t</div>
          <Leaf className="h-6 w-6 text-emerald-400" />
        </CardContent>
      </Card>

      <Card className={metricCls}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Revenue (Today)</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="text-3xl font-semibold text-foreground">$28.4k</div>
          <DollarSign className="h-6 w-6 text-purple-400" />
        </CardContent>
      </Card>
    </div>
  );
};

export default KPICards;
