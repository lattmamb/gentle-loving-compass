import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UnifiedHeader from "@/components/ui/unified-header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <UnifiedHeader />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Unity Fleet subscription is ready. Welcome to clean energy transportation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Booking Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Car className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Vehicle</p>
                  <p className="text-muted-foreground">
                    {bookingData?.vehicleName || "Tesla Model 3"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Subscription Start</p>
                  <p className="text-muted-foreground">
                    {bookingData?.startDate || "Today"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Pickup Location</p>
                  <p className="text-muted-foreground">
                    Chicago Loop Clean Energy Hub
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full mt-1" />
                <div>
                  <p className="font-medium">Confirmation #</p>
                  <p className="text-muted-foreground font-mono">
                    UF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground mb-6">
              You'll receive a confirmation email shortly with pickup instructions and your Unity Fleet app access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/vehicles')}
              >
                Browse More Vehicles
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingSuccess;