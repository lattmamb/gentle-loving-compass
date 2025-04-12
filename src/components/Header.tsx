
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Car, Calendar, Map, CreditCard, Info, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4",
        scrolled
          ? "neo-blur border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">
          <span className="ai-gradient-text">
            EonRides
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/vehicles" isActive={isActive("/vehicles")}>Vehicles</NavLink>
          <NavLink to="/pricing" isActive={isActive("/pricing")}>Pricing</NavLink>
          <NavLink to="/locations" isActive={isActive("/locations")}>Locations</NavLink>
          <NavLink to="/about" isActive={isActive("/about")}>About</NavLink>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full px-5">
              <Link to="/dashboard">
                <User className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white neo-button">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80 neo-blur border-white/10">
            <div className="flex flex-col space-y-6 mt-8">
              <MobileNavLink to="/vehicles" icon={<Car size={18} />} isActive={isActive("/vehicles")}>
                Vehicles
              </MobileNavLink>
              <MobileNavLink to="/pricing" icon={<CreditCard size={18} />} isActive={isActive("/pricing")}>
                Pricing
              </MobileNavLink>
              <MobileNavLink to="/locations" icon={<Map size={18} />} isActive={isActive("/locations")}>
                Locations
              </MobileNavLink>
              <MobileNavLink to="/about" icon={<Info size={18} />} isActive={isActive("/about")}>
                About
              </MobileNavLink>
              <MobileNavLink to="/dashboard" icon={<User size={18} />} isActive={isActive("/dashboard")}>
                Dashboard
              </MobileNavLink>
              <div className="pt-4 mt-4 border-t border-white/10">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Book Now</span>
                </Button>
              </div>
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
      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? "bg-white/10 text-blue-400 border-l-2 border-blue-500" 
          : "text-white/80 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className={isActive ? "text-blue-400" : "text-white/60"}>{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
