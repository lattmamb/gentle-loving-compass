
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { formatCurrency, calculateDateDifference, formatDate } from "@/lib/utils";
import { CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import AIAssistant from "@/components/AIAssistant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Book Your Tesla {vehicle.model}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold mb-6">Booking Details</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Date Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Pickup Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal border-white/10 bg-white/5 text-white hover:bg-white/10",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/10" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                  disabled={(date) => date < new Date()}
                                  className="bg-black text-white"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Return Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal border-white/10 bg-white/5 text-white hover:bg-white/10",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/10" align="end">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                  disabled={(date) => 
                                    date < new Date() || 
                                    (startDate && date <= startDate)
                                  }
                                  className="bg-black text-white"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                className="bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                className="bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john.doe@example.com"
                                className="bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(123) 456-7890"
                                className="bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Main St, City, State, 12345"
                                className="bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Complete Booking"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="sticky top-24">
                <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="flex items-center mb-6">
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-24 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-bold">Tesla {vehicle.model}</h3>
                      <p className="text-sm text-white/70">{vehicle.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/70">Daily Rate</span>
                      <span>{formatCurrency(vehicle.price.daily)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Duration</span>
                      <span>{numberOfDays} days</span>
                    </div>
                    {startDate && endDate && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Dates</span>
                        <span>
                          {formatDate(startDate)} - {formatDate(endDate)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="flex justify-between font-bold text-lg mb-2">
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                  <p className="text-xs text-white/60 mb-6">
                    Includes insurance, maintenance, and unlimited charging
                  </p>
                </div>
                
                <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                  <h3 className="font-bold mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    <Feature text="Insurance coverage" />
                    <Feature text="Maintenance and repairs" />
                    <Feature text="Supercharger network access" />
                    <Feature text="Roadside assistance" />
                    <Feature text="Contactless delivery" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
      
      {/* Confirmation Modal */}
      <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
        <DialogContent className="backdrop-blur-xl bg-black/90 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Booking Confirmed!</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="mb-6 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Check className="h-10 w-10 text-green-400" />
              </div>
            </div>
            
            <p className="text-center text-lg mb-6">
              Your Tesla {vehicle.model} has been successfully booked.
            </p>
            
            {startDate && endDate && (
              <div className="backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-white/70 text-sm">Pickup Date</p>
                    <p className="font-bold">{formatDate(startDate)}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Return Date</p>
                    <p className="font-bold">{formatDate(endDate)}</p>
                  </div>
                </div>
              </div>
            )}
            
            <p className="text-white/70 text-center mb-6">
              We've sent a confirmation email with all the details.
              Our team will contact you shortly to coordinate the delivery.
            </p>
            
            <div className="flex justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  setIsConfirmModalOpen(false);
                  navigate('/dashboard');
                }}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center text-white/80 text-sm">
      <Check className="mr-2 h-4 w-4 text-green-400" />
      {text}
    </li>
  );
}

export default BookVehicle;
