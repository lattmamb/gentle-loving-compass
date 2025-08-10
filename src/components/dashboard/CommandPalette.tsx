import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Home, Car, CreditCard, Map, Info, Search, PlusCircle, Battery, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onOpenChange }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search… Navigate or run an action" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => navigate("/")}> 
            <Home className="mr-2 h-4 w-4" /> Home
            <CommandShortcut>G H</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/vehicles")}> 
            <Car className="mr-2 h-4 w-4" /> Fleet
          </CommandItem>
          <CommandItem onSelect={() => navigate("/pricing")}> 
            <CreditCard className="mr-2 h-4 w-4" /> Plans
          </CommandItem>
          <CommandItem onSelect={() => navigate("/locations")}>
            <Map className="mr-2 h-4 w-4" /> Locations
          </CommandItem>
          <CommandItem onSelect={() => navigate("/about")}>
            <Info className="mr-2 h-4 w-4" /> About
          </CommandItem>
          <CommandItem onSelect={() => navigate("/dashboard")}>
            <Search className="mr-2 h-4 w-4" /> Dashboard
            <CommandShortcut>⌘ K</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => toast({ title: "New booking", description: "Start a new booking flow." })}>
            <PlusCircle className="mr-2 h-4 w-4" /> New booking
          </CommandItem>
          <CommandItem onSelect={() => toast({ title: "Add charging station", description: "Open station form." })}>
            <Battery className="mr-2 h-4 w-4" /> Add charging station
          </CommandItem>
          <CommandItem onSelect={() => toast({ title: "Invite user", description: "Send an invitation link." })}>
            <Users className="mr-2 h-4 w-4" /> Invite user
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
