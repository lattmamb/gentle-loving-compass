import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UnityFleetMap } from "@/components/map/UnityFleetMap";

const ChargingStations: React.FC = () => {
  useEffect(() => {
    document.title = "Charging Stations – Unity Fleet";
    const desc = "Find nearby charging hubs, availability, and amenities across Illinois.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="section-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Charging Stations</h1>
        <p className="text-muted-foreground mt-2">Interactive map and station list with live availability.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="glass-luxury lg:col-span-2 overflow-hidden">
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent className="h-[60vh] p-0">
            <UnityFleetMap className="w-full h-full" showFilters={true} />
          </CardContent>
        </Card>

        <Card className="glass-luxury">
          <CardHeader>
            <CardTitle>Nearby Stations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Downtown Chicago Hub – 6/12 spots available</li>
              <li>Naperville Supercharge – 3/8 spots available</li>
              <li>Evanston Green Station – 7/10 spots available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChargingStations;
