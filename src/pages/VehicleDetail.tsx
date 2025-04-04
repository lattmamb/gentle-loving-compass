
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { ColorVariant } from "@/types";
import AIAssistant from "@/components/AIAssistant";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    vehicle?.colorVariants[0] || { name: "", color: "", image: "" }
  );

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/vehicles">Browse Vehicles</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedVehicles = vehicles
    .filter(v => v.id !== vehicle.id && v.type === vehicle.type)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center text-sm text-white/60">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/vehicles" className="hover:text-white">Vehicles</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Tesla {vehicle.model}</span>
          </nav>
          
          {/* Vehicle Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-80 md:h-[500px] overflow-hidden rounded-xl">
              <img
                src={selectedColor.image || vehicle.image}
                alt={vehicle.model}
                className="w-full h-full object-cover"
              />
              {vehicle.status === "available" && (
                <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 border border-green-500/50 text-xs font-medium rounded-full px-3 py-1">
                  Available Now
                </div>
              )}
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Tesla {vehicle.model}
              </h1>
              <p className="text-white/70 text-lg mb-6">{vehicle.type}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Stat label="Range" value={`${vehicle.specs.range} mi`} />
                <Stat label="Top Speed" value={`${vehicle.specs.topSpeed} mph`} />
                <Stat label="0-60 mph" value={`${vehicle.specs.acceleration}s`} />
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-3">Color Options</h3>
                <div className="flex space-x-3">
                  {vehicle.colorVariants.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor.name === color.name
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color.color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color.name} color`}
                    ></button>
                  ))}
                </div>
                <p className="text-sm text-white/60 mt-2">{selectedColor.name}</p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Subscription Pricing</h3>
                  <Link to="/pricing" className="text-blue-400 text-sm">View plans</Link>
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70">Daily</span>
                  <span className="font-bold">{formatCurrency(vehicle.price.daily)}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70">Monthly</span>
                  <span className="font-bold">{formatCurrency(vehicle.price.monthly)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/70">Annual</span>
                  <span className="font-bold">{formatCurrency(vehicle.price.yearly / 12)}/mo</span>
                </div>
                
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to={`/book/${vehicle.id}`}>Book This Vehicle</Link>
                </Button>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
                  Request a Test Drive
                </Button>
                <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
                Overview
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-blue-600">
                Features & Specs
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600">
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6">
                <h3 className="text-xl font-bold mb-4">About Tesla {vehicle.model}</h3>
                <p className="text-white/70 mb-4">
                  The Tesla {vehicle.model} represents the cutting edge of electric vehicle technology, 
                  combining exceptional range, performance, and advanced technology in a sleek package.
                </p>
                
                <h4 className="font-bold mb-2 mt-6">Key Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-3 text-blue-400">
                        <Check size={16} />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="features">
              <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 border-b border-white/10 pb-2">Performance</h4>
                    <SpecItem label="Acceleration 0-60 mph" value={`${vehicle.specs.acceleration} sec`} />
                    <SpecItem label="Top Speed" value={`${vehicle.specs.topSpeed} mph`} />
                    <SpecItem label="Range" value={`${vehicle.specs.range} miles (EPA est.)`} />
                    <SpecItem label="Drive" value="Dual Motor All-Wheel Drive" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 border-b border-white/10 pb-2">Features</h4>
                    <SpecItem label="Autopilot" value="Included" />
                    <SpecItem label="Supercharging" value="Pay-Per-Use" />
                    <SpecItem label="Warranty" value="4 years / 50,000 miles" />
                    <SpecItem label="Seating" value="5 adults" />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
                <p className="text-white/70">Coming soon. Be the first to review this vehicle!</p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Leave a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Vehicles */}
          {relatedVehicles.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedVehicles.map((relatedVehicle) => (
                  <div
                    key={relatedVehicle.id}
                    className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 overflow-hidden group"
                  >
                    <Link to={`/vehicles/${relatedVehicle.id}`} className="block">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedVehicle.image}
                          alt={relatedVehicle.model}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">Tesla {relatedVehicle.model}</h3>
                        <p className="text-white/60 text-sm mb-2">{relatedVehicle.type}</p>
                        <p className="font-medium">
                          From {formatCurrency(relatedVehicle.price.daily)}/day
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-4 rounded-lg border border-white/10">
      <p className="font-bold text-lg">{value}</p>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-white/5">
      <span className="text-white/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default VehicleDetail;
