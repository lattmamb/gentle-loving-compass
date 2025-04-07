
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
import React from "react";

// Create a client
const queryClient = new QueryClient();

// Define the App component as a proper functional component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
