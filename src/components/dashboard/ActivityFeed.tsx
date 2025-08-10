import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, Battery, MapPin } from "lucide-react";

const items = [
  { id: 1, icon: Activity, title: "Ride started", detail: "Sarah Chen • Model 3", time: "2m" },
  { id: 2, icon: Battery, title: "Charging begun", detail: "Model S • Navy Pier", time: "8m" },
  { id: 3, icon: MapPin, title: "Vehicle repositioned", detail: "Model Y • Millennium Park", time: "15m" },
  { id: 4, icon: AlertTriangle, title: "Tire pressure low", detail: "Model 3 • Chicago Downtown", time: "21m" },
];

const ActivityFeed: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map(({ id, icon: Icon, title, detail, time }) => (
          <div key={id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
