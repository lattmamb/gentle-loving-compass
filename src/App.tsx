import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import VehiclesList from "@/pages/VehiclesList";
import VehicleDetail from "@/pages/VehicleDetail";
import Pricing from "@/pages/Pricing";
import BookVehicle from "@/pages/BookVehicle";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import HowItWorks from "@/pages/HowItWorks";
import BookingSuccess from "@/pages/BookingSuccess";
import BackgroundParticles from "@/components/particles/BackgroundParticles";
import Locations from "@/pages/Locations";

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2432] to-[#0f131c] z-0"></div>
        <BackgroundParticles />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
