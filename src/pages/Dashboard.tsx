
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, formatDate } from "@/lib/utils";
import { vehicles } from "@/data/vehicles";
import { Link } from "react-router-dom";
import { CalendarIcon, Car, Clock, MapPin, CreditCard, User, Settings, History, ChevronRight } from "lucide-react";
import AIAssistant from "@/components/AIAssistant";
import AnimatedBackground from "@/components/AnimatedBackground";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";
import { motion } from "framer-motion";

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

// Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const Dashboard = () => {
  return (
    <AnimatedBackground intensity="low">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">
                  Welcome, {user.name}
                </h1>
                <p className="text-white/70">
                  Current Plan: <span className="text-blue-400">{user.subscription}</span>
                </p>
              </div>
              
              <motion.div 
                className="mt-4 md:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild className="neo-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600">
                  <Link to="/vehicles">
                    <Car size={18} className="mr-2" />
                    Book New Vehicle
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Account Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StatCard
                  title="Current Plan"
                  value={user.subscription}
                  icon={<Clock className="h-5 w-5 text-blue-400" />}
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatCard
                  title="Next Payment"
                  value={`${formatCurrency(user.paymentAmount)} on ${formatDate(user.nextPayment)}`}
                  icon={<CalendarIcon className="h-5 w-5 text-blue-400" />}
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatCard
                  title="Active Bookings"
                  value={bookings.filter(b => b.status === "confirmed").length.toString()}
                  icon={<Car className="h-5 w-5 text-blue-400" />}
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatCard
                  title="Reward Credits"
                  value={formatCurrency(user.credits)}
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m16 8-8 8"/>
                  <path d="m8 8 8 8"/>
                 </svg>}
                />
              </motion.div>
            </div>
            
            {/* Main Dashboard Tabs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <Tabs defaultValue="bookings" className="glass-panel p-1">
                <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0">
                  <TabsTrigger 
                    value="bookings" 
                    className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
                  >
                    <Car size={16} className="mr-2" />
                    My Bookings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="account" 
                    className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
                  >
                    <User size={16} className="mr-2" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history" 
                    className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none"
                  >
                    <History size={16} className="mr-2" />
                    History
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="bookings" className="mt-6 p-6 bg-transparent">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <Car size={16} className="text-blue-400" />
                    </div>
                    Your Current Bookings
                  </h2>
                  
                  {bookings.length === 0 ? (
                    <div className="text-center py-8 glass-card p-8">
                      <div className="text-5xl mb-4">🚗</div>
                      <h3 className="text-lg font-bold mb-2">No Bookings Yet</h3>
                      <p className="text-white/70 mb-4">
                        You haven't made any bookings yet. Ready to experience Tesla?
                      </p>
                      <Button asChild className="neo-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600">
                        <Link to="/vehicles">Browse Vehicles</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {bookings.map((booking, index) => {
                        const vehicle = vehicles.find(v => v.id === booking.vehicleId);
                        
                        return (
                          <motion.div 
                            key={booking.id} 
                            className="glass-card shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex flex-col md:flex-row">
                              <div className="w-full md:w-1/4 relative overflow-hidden">
                                {vehicle && (
                                  <img
                                    src={vehicle.image}
                                    alt={vehicle.model}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
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
                                      ? "status-active" 
                                      : "status-pending"
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
                                  <Button variant="outline" className="neo-button border-white/10 text-white hover:bg-white/5 hover-glow hover-glow-blue">
                                    View Details
                                  </Button>
                                  {booking.status === "pending" && (
                                    <Button variant="outline" className="neo-button border-white/10 text-white hover:bg-white/5 hover-glow hover-glow-blue">
                                      Cancel Booking
                                    </Button>
                                  )}
                                  {booking.status === "confirmed" && (
                                    <Button className="neo-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600">
                                      Extend Booking
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="account" className="mt-6 p-6 bg-transparent">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <Settings size={16} className="text-blue-400" />
                    </div>
                    Account Settings
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-6">
                      <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-white/70 block mb-1">Full Name</label>
                          <Input defaultValue={user.name} className="neo-input w-full" />
                        </div>
                        
                        <div>
                          <label className="text-sm text-white/70 block mb-1">Email Address</label>
                          <Input defaultValue={user.email} className="neo-input w-full" />
                        </div>
                        
                        <div>
                          <label className="text-sm text-white/70 block mb-1">Phone Number</label>
                          <Input defaultValue="(555) 123-4567" className="neo-input w-full" />
                        </div>
                        
                        <Button className="neo-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 mt-2">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <NeomorphicCard3D className="p-6">
                        <h3 className="text-lg font-medium mb-4">Subscription &amp; Billing</h3>
                        <div className="glass-card p-4 mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white/70">Current Plan</span>
                            <span className="font-bold text-gradient-blue">{user.subscription}</span>
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
                            <div className="flex items-center">
                              <CreditCard size={14} className="mr-1 text-blue-400" />
                              <span>•••• 5678</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button variant="outline" className="flex-1 neo-button border-white/10 text-white hover:bg-white/5 hover-glow hover-glow-blue">
                            Change Plan
                          </Button>
                          <Button variant="outline" className="flex-1 neo-button border-white/10 text-white hover:bg-white/5 hover-glow hover-glow-blue">
                            Payment Methods
                          </Button>
                        </div>
                      </NeomorphicCard3D>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="mt-6 p-6 bg-transparent">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <History size={16} className="text-blue-400" />
                    </div>
                    Booking History
                  </h2>
                  
                  <div className="text-center py-10 glass-card">
                    <div className="text-4xl mb-4">🕒</div>
                    <h3 className="text-lg font-bold mb-2">No Past Bookings</h3>
                    <p className="text-white/70 mb-4 max-w-md mx-auto">
                      Your booking history will appear here once you've completed reservations.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            {/* Map Section */}
            <motion.div 
              className="glass-panel p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                Vehicle Tracking
              </h2>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-[#1A2436]/50 to-[#0F131C]/50">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633379336219-2175f5101dac?q=80&w=1740')] bg-center bg-cover opacity-30"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center glass-card p-8">
                    <div className="text-4xl mb-4">🗺️</div>
                    <h3 className="text-lg font-bold mb-2">Map Coming Soon</h3>
                    <p className="text-white/70 mb-4 max-w-md mx-auto">
                      Real-time vehicle tracking will be available here soon.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Recommendations Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <Car size={16} className="text-blue-400" />
                </div>
                Recommended for You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vehicles.slice(0, 3).map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link to={`/vehicles/${vehicle.id}`}>
                      <NeomorphicCard3D className="overflow-hidden hover:after:opacity-100 hover-glow hover-glow-blue">
                        <div className="relative h-40 overflow-hidden group">
                          <img
                            src={vehicle.image}
                            alt={vehicle.model}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-3 left-3">
                            <div className="px-2 py-0.5 rounded text-xs bg-blue-500/30 border border-blue-500/20 text-blue-300">
                              {vehicle.type}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold">Tesla {vehicle.model}</h3>
                            <ChevronRight size={16} className="text-blue-400" />
                          </div>
                          <p className="font-medium text-gradient-blue">
                            From {formatCurrency(vehicle.price.daily)}/day
                          </p>
                        </div>
                      </NeomorphicCard3D>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
};

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <NeomorphicCard3D className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-white/70">{title}</h3>
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <p className="text-xl font-bold text-gradient-blue">{value}</p>
      </CardContent>
    </NeomorphicCard3D>
  );
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-md border border-white/10 bg-[#141821]/80 px-3 py-2 text-white placeholder:text-white/40 focus:border-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
}

export default Dashboard;
