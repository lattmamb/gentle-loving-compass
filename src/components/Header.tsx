
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Car, Calendar, Map } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            EonRides
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/vehicles">Vehicles</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80 backdrop-blur-2xl bg-black/80 border-white/10">
            <div className="flex flex-col space-y-6 mt-8">
              <MobileNavLink to="/" icon={<Car size={18} />}>
                Vehicles
              </MobileNavLink>
              <MobileNavLink to="/pricing" icon={<Calendar size={18} />}>
                Pricing
              </MobileNavLink>
              <MobileNavLink to="/locations" icon={<Map size={18} />}>
                Locations
              </MobileNavLink>
              <MobileNavLink to="/dashboard" icon={<User size={18} />}>
                Dashboard
              </MobileNavLink>
              <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-white/80 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 text-lg text-white/80 hover:text-white p-2 rounded-md transition-colors hover:bg-white/5"
    >
      <span className="text-blue-500">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}
