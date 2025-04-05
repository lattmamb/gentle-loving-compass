
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Car, Calendar, Map, CreditCard, Info, SunMoon, BrainCircuit, Coins } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, this would update a theme context or local storage
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled
          ? "backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Unity Link
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Vehicle Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center space-x-1 ${
                isActive("/vehicles") 
                  ? "text-blue-400" 
                  : "text-white/80 hover:text-white"
              } transition-colors`}>
                <span>Vehicles</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/80 backdrop-blur-xl border-white/10">
              <DropdownMenuItem asChild>
                <Link to="/vehicles" className="text-white/90 hover:text-white focus:text-white">
                  All Vehicles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vehicles?model=model-s" className="text-white/90 hover:text-white focus:text-white">
                  Model S
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vehicles?model=model-3" className="text-white/90 hover:text-white focus:text-white">
                  Model 3
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vehicles?model=model-x" className="text-white/90 hover:text-white focus:text-white">
                  Model X
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vehicles?model=model-y" className="text-white/90 hover:text-white focus:text-white">
                  Model Y
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vehicles?model=cybertruck" className="text-white/90 hover:text-white focus:text-white">
                  Cybertruck
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/subscription-plans" isActive={isActive("/subscription-plans")}>
            Subscriptions
          </NavLink>
          
          <NavLink to="/charging-hubs" isActive={isActive("/charging-hubs")}>
            Charging Hubs
          </NavLink>
          
          <NavLink to="/visionos" isActive={isActive("/visionos")}>
            Atlas VisionOS
          </NavLink>
          
          <NavLink to="/tokenized-ownership" isActive={isActive("/tokenized-ownership")}>
            Token Ownership
          </NavLink>
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <SunMoon size={18} />
          </button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="ui-glow-button">
              <Link to="/dashboard">
                <span className="py-2 px-4">Dashboard</span>
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors mr-2"
            >
              <SunMoon size={18} />
            </button>
            
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white neo-button">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
          </div>
          
          <SheetContent className="w-80 backdrop-blur-2xl bg-black/80 border-white/10">
            <div className="flex flex-col space-y-6 mt-8">
              <MobileNavLink to="/vehicles" icon={<Car size={18} />} isActive={isActive("/vehicles")}>
                Vehicles
              </MobileNavLink>
              
              <MobileNavLink to="/subscription-plans" icon={<CreditCard size={18} />} isActive={isActive("/subscription-plans")}>
                Subscription Plans
              </MobileNavLink>
              
              <MobileNavLink to="/charging-hubs" icon={<Map size={18} />} isActive={isActive("/charging-hubs")}>
                Charging Hubs
              </MobileNavLink>
              
              <MobileNavLink to="/visionos" icon={<BrainCircuit size={18} />} isActive={isActive("/visionos")}>
                Atlas VisionOS
              </MobileNavLink>
              
              <MobileNavLink to="/tokenized-ownership" icon={<Coins size={18} />} isActive={isActive("/tokenized-ownership")}>
                Token Ownership
              </MobileNavLink>
              
              <MobileNavLink to="/about" icon={<Info size={18} />} isActive={isActive("/about")}>
                About Us
              </MobileNavLink>
              
              <MobileNavLink to="/dashboard" icon={<User size={18} />} isActive={isActive("/dashboard")}>
                Dashboard
              </MobileNavLink>
              
              <Button className="mt-4 w-full ui-glow-button">
                <span className="py-2 px-4 w-full inline-block">Book Now</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      to={to}
      className={`relative ${
        isActive 
          ? "text-blue-400" 
          : "text-white/80 hover:text-white"
      } transition-colors`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  icon,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 text-lg ${
        isActive 
          ? "neo-pressed text-blue-400" 
          : "text-white/80 hover:text-white neo-elevated hover:scale-[1.02]"
      } p-3 rounded-md transition-all duration-200`}
    >
      <span className={isActive ? "text-blue-400" : "text-white/60"}>{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
