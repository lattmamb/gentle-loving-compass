import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import VehiclesList from "@/pages/VehiclesList";
import VehiclesMap from "@/pages/VehiclesMap";
import VehicleDetail from "@/pages/VehicleDetail";
import Pricing from "@/pages/Pricing";
import BookVehicle from "@/pages/BookVehicle";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import HowItWorks from "@/pages/HowItWorks";
import BookingSuccess from "@/pages/BookingSuccess";
import Locations from "@/pages/Locations";
import MainLayout from "@/layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="vehicles" element={<VehiclesList />} />
          <Route path="vehicles/map" element={<VehiclesMap />} />
          <Route path="vehicles/:id" element={<VehicleDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="book/:id" element={<BookVehicle />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="booking-success" element={<BookingSuccess />} />
          <Route path="locations" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
