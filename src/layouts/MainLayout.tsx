import React from "react";
import { Outlet } from "react-router-dom";
import UnifiedHeader from "@/components/ui/unified-header";
import { UnityFleetMap } from "@/components/map/UnityFleetMap";
import { MapDataProvider } from "@/contexts/MapDataContext";

const MainLayout = () => {
  return (
    <MapDataProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Background Map - Always Present */}
        <div className="fixed inset-0 z-0">
          <UnityFleetMap className="w-full h-full opacity-20 blur-sm" showFilters={false} />
        </div>
        
        <UnifiedHeader />
        
        <main className="relative z-10 pt-16">
          <Outlet />
        </main>
      </div>
    </MapDataProvider>
  );
};

export default MainLayout;