
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, formatDate } from "@/lib/utils";
import { vehicles } from "@/data/vehicles";
import { Link } from "react-router-dom";
import { CalendarIcon, Car, Clock, MapPin } from "lucide-react";
import AIAssistant from "@/components/AIAssistant";

// Mock data for demonstration
const bookings = [
  {
    id: "b1",
    vehicleId: "model-s",
    startDate: new Date("2025-04-15"),
    endDate: new Date("2025-04-20"),
    status: "confirmed",
    totalPrice: 995,
    location: "San Francisco Tesla Center"
  },
  {
    id: "b2",
    vehicleId: "model-3",
    startDate: new Date("2025-05-10"),
    endDate: new Date("2025-05-15"),
    status: "pending",
    totalPrice: 745,
    location: "Los Angeles Tesla Center"
  }
];

// Mock user data
const user = {
  name: "Alex Johnson",
  email: "alex@example.com",
  subscription: "Monthly Plan",
  nextPayment: new Date("2025-05-01"),
  paymentAmount: 3999,
  credits: 500,
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome, {user.name}
              </h1>
              <p className="text-white/70">
                Current Plan: <span className="text-blue-400">{user.subscription}</span>
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/vehicles">Book New Vehicle</Link>
              </Button>
            </div>
          </div>
          
          {/* Account Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Current Plan"
              value={user.subscription}
              icon={<Clock className="h-5 w-5 text-blue-400" />}
            />
            
            <StatCard
              title="Next Payment"
              value={`${formatCurrency(user.paymentAmount)} on ${formatDate(user.nextPayment)}`}
              icon={<CalendarIcon className="h-5 w-5 text-blue-400" />}
            />
            
            <StatCard
              title="Active Bookings"
              value={bookings.filter(b => b.status === "confirmed").length.toString()}
              icon={<Car className="h-5 w-5 text-blue-400" />}
            />
            
            <StatCard
              title="Reward Credits"
              value={formatCurrency(user.credits)}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
              <circle cx="12" cy="12" r="10"/>
              <path d="m16 8-8 8"/>
              <path d="m8 8 8 8"/>
             </svg>}
            />
          </div>
          
          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="bookings" className="mb-8">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="bookings" className="data-[state=active]:bg-blue-600">
                My Bookings
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-blue-600">
                Account
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-blue-600">
                History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings" className="mt-6">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold mb-6">Your Current Bookings</h2>
                
                {bookings.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🚗</div>
                    <h3 className="text-lg font-bold mb-2">No Bookings Yet</h3>
                    <p className="text-white/70 mb-4">
                      You haven't made any bookings yet. Ready to experience Tesla?
                    </p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/vehicles">Browse Vehicles</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {bookings.map((booking) => {
                      const vehicle = vehicles.find(v => v.id === booking.vehicleId);
                      
                      return (
                        <div 
                          key={booking.id} 
                          className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 overflow-hidden"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/4">
                              {vehicle && (
                                <img
                                  src={vehicle.image}
                                  alt={vehicle.model}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            
                            <div className="flex-1 p-6">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-xl font-bold mb-1">
                                    Tesla {vehicle?.model || "Vehicle"}
                                  </h3>
                                  <div className="flex items-center text-white/70 mb-4">
                                    <MapPin size={14} className="mr-1" />
                                    <span className="text-sm">{booking.location}</span>
                                  </div>
                                </div>
                                
                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  booking.status === "confirmed" 
                                    ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/50"
                                }`}>
                                  {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-white/60">Pickup Date</p>
                                  <p className="font-medium">{formatDate(booking.startDate)}</p>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-white/60">Return Date</p>
                                  <p className="font-medium">{formatDate(booking.endDate)}</p>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-white/60">Total Price</p>
                                  <p className="font-medium">{formatCurrency(booking.totalPrice)}</p>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-white/60">Booking ID</p>
                                  <p className="font-medium text-xs md:text-base">{booking.id}</p>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                <Button variant="outline" className="text-white border-white/10 hover:bg-white/10">
                                  View Details
                                </Button>
                                {booking.status === "pending" && (
                                  <Button variant="outline" className="text-white border-white/10 hover:bg-white/10">
                                    Cancel Booking
                                  </Button>
                                )}
                                {booking.status === "confirmed" && (
                                  <Button className="bg-blue-600 hover:bg-blue-700">
                                    Extend Booking
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="account" className="mt-6">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-white/70 block mb-1">Full Name</label>
                        <Input defaultValue={user.name} className="bg-white/5 border-white/10 text-white" />
                      </div>
                      
                      <div>
                        <label className="text-sm text-white/70 block mb-1">Email Address</label>
                        <Input defaultValue={user.email} className="bg-white/5 border-white/10 text-white" />
                      </div>
                      
                      <div>
                        <label className="text-sm text-white/70 block mb-1">Phone Number</label>
                        <Input defaultValue="(555) 123-4567" className="bg-white/5 border-white/10 text-white" />
                      </div>
                      
                      <Button className="bg-blue-600 hover:bg-blue-700 mt-2">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Subscription &amp; Billing</h3>
                    <div className="backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70">Current Plan</span>
                        <span className="font-bold">{user.subscription}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70">Billing Cycle</span>
                        <span>Monthly</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70">Next Payment</span>
                        <span>{formatDate(user.nextPayment)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Payment Method</span>
                        <span>•••• 5678</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
                        Change Plan
                      </Button>
                      <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
                        Payment Methods
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold mb-6">Booking History</h2>
                
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">🕒</div>
                  <h3 className="text-lg font-bold mb-2">No Past Bookings</h3>
                  <p className="text-white/70 mb-4 max-w-md mx-auto">
                    Your booking history will appear here once you've completed reservations.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Map Section */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Vehicle Tracking</h2>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/20 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-lg font-bold mb-2">Map Coming Soon</h3>
                  <p className="text-white/70 mb-4 max-w-md mx-auto">
                    Real-time vehicle tracking will be available here soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommendations Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicles.slice(0, 3).map((vehicle) => (
                <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer h-full">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.model}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-1">Tesla {vehicle.model}</h3>
                      <p className="text-sm text-white/70 mb-2">{vehicle.type}</p>
                      <p className="font-medium">
                        From {formatCurrency(vehicle.price.daily)}/day
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="backdrop-blur-xl bg-white/5 border-white/10">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-white/70">{title}</h3>
          <div>{icon}</div>
        </div>
        <p className="text-xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-md border border-input bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
}

export default Dashboard;
