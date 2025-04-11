
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import VehiclesList from "@/pages/VehiclesList";
import VehicleDetail from "@/pages/VehicleDetail";
import Pricing from "@/pages/Pricing";
import BookVehicle from "@/pages/BookVehicle";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vehicles" element={<VehiclesList />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book/:id" element={<BookVehicle />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
