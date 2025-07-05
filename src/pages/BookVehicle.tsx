
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import UnifiedHeader from "@/components/ui/unified-header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { calculateDateDifference } from "@/lib/utils";
import AIAssistant from "@/components/AIAssistant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import BookingConfirmationModal from "@/components/booking/BookingConfirmationModal";

// Form validation schema
const bookingSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your address" }),
  startDate: z.date({ required_error: "Please select a pickup date" }),
  endDate: z.date({ required_error: "Please select a return date" }).refine(
    (endDate) => endDate > new Date(), 
    { message: "Return date must be in the future" }
  ),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookVehicle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = vehicles.find((v) => v.id === id);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Default form values
  const defaultValues: Partial<BookingFormValues> = {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 3)),
  };

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues,
  });

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

  const startDate = form.watch("startDate");
  const endDate = form.watch("endDate");

  const numberOfDays = startDate && endDate ? calculateDateDifference(startDate, endDate) : 0;
  const totalPrice = vehicle.price.daily * numberOfDays;

  function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmModalOpen(true);
      
      console.log("Booking submitted", data);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <UnifiedHeader 
        variant="solid" 
        showProgress={true} 
        currentStep={1} 
        totalSteps={3} 
      />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Book Your Tesla {vehicle.model}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm
                form={form}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                startDate={startDate}
              />
            </div>
            
            {/* Order Summary */}
            <div>
              <OrderSummary
                vehicle={vehicle}
                numberOfDays={numberOfDays}
                totalPrice={totalPrice}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
      
      {/* Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        vehicle={vehicle}
        startDate={startDate}
        endDate={endDate}
        onConfirm={() => {
          setIsConfirmModalOpen(false);
          navigate('/booking-success', { 
            state: { 
              vehicleName: `${vehicle.brand} ${vehicle.model}`,
              startDate: startDate?.toLocaleDateString(),
              endDate: endDate?.toLocaleDateString()
            }
          });
        }}
      />
    </div>
  );
};

export default BookVehicle;
