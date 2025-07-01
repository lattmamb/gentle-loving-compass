
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Vehicle } from "@/data/vehicles";
import { formatDate } from "@/lib/utils";

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  vehicle: Vehicle;
  startDate: Date | undefined;
  endDate: Date | undefined;
  onConfirm: () => void;
}

const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  onOpenChange,
  vehicle,
  startDate,
  endDate,
  onConfirm
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
              onClick={onConfirm}
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingConfirmationModal;
