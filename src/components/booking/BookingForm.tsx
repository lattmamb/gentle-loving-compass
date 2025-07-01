
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import DateSelectionFields from "./DateSelectionFields";
import PersonalInfoFields from "./PersonalInfoFields";

interface BookingFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
  startDate: Date | undefined;
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  form, 
  onSubmit, 
  isSubmitting, 
  startDate 
}) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
      <h2 className="text-xl font-bold mb-6">Booking Details</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DateSelectionFields 
            control={form.control} 
            startDate={startDate}
          />
          
          <PersonalInfoFields control={form.control} />

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
  );
};

export default BookingForm;
