
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VehiclesList from "./pages/VehiclesList";
import VehicleDetail from "./pages/VehicleDetail";
import BookVehicle from "./pages/BookVehicle";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import SparklesDemo from "./pages/SparklesDemo";
import HeroParallaxDemo from "./components/hero-parallax-demo";
import ParallaxDemo from "./pages/ParallaxDemo";
import { LoadingProvider } from "./context/LoadingContext";
import LoadingOverlay from "./components/LoadingOverlay";
import { LoadingRouteGuard } from "./components/LoadingRouteGuard";
import VisionOS from "./pages/VisionOS";
import TokenizedOwnership from "./pages/TokenizedOwnership";
import TaskadeChat from "./components/TaskadeChat";
import React from "react";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Define the App component as a proper functional component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <BrowserRouter>
          <TooltipProvider>
            <LoadingOverlay />
            <Toaster />
            <Sonner />
            <TaskadeChat />
            <LoadingRouteGuard>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vehicles" element={<VehiclesList />} />
                <Route path="/vehicles/:id" element={<VehicleDetail />} />
                <Route path="/book/:id" element={<BookVehicle />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/subscription-plans" element={<Pricing />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/charging-hubs" element={<Locations />} />
                <Route path="/sparkles" element={<SparklesDemo />} />
                <Route path="/parallax" element={<ParallaxDemo />} />
                <Route path="/visionos" element={<VisionOS />} />
                <Route path="/tokenized-ownership" element={<TokenizedOwnership />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LoadingRouteGuard>
          </TooltipProvider>
        </BrowserRouter>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
