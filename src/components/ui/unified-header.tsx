import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  Car, 
  Calendar, 
  Map, 
  CreditCard, 
  Info, 
  Sparkles, 
  Battery,
  Zap,
  Home,
  Megaphone,
  PlugZap,
  LifeBuoy
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommandPalette from "@/components/dashboard/CommandPalette";
import { VehicleAvailabilityPulse, ETATimerLoader } from "./loading-animations";

interface UnifiedHeaderProps {
  variant?: "default" | "transparent" | "solid";
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
}

export default function UnifiedHeader({ 
  variant = "default", 
  showProgress = false,
  currentStep = 0,
  totalSteps = 3
}: UnifiedHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const getHeaderClasses = () => {
    const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4";
    
    switch (variant) {
      case "transparent":
        return cn(base, "bg-transparent");
      case "solid":
        return cn(base, "bg-background/95 backdrop-blur-xl border-b border-border/50");
      default:
        return cn(
          base,
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        );
    }
  };

  const navigationItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/vehicles", label: "Fleet", icon: Car },
    { path: "/pricing", label: "Plans", icon: CreditCard },
    { path: "/locations", label: "Locations", icon: Map },
    { path: "/advertising", label: "Advertising", icon: Megaphone },
    { path: "/charging-stations", label: "Charging", icon: PlugZap },
    { path: "/support", label: "Support", icon: LifeBuoy },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <header className={getHeaderClasses()}>
      <div className="max-w-7xl mx-auto flex items-center justify-between liquid-glass-strong rounded-2xl px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative liquid-glow"
          >
            <Zap className="w-8 h-8 text-primary" />
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
          <span className="text-xl font-bold text-liquid-gradient">
            Unity Fleet
          </span>
        </Link>

        {/* Progress Bar (for booking/onboarding flows) */}
        <AnimatePresence>
          {showProgress && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4 text-primary" />
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/60"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentStep}/{totalSteps}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              isActive={isActive(item.path)}
              icon={item.icon}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Command Palette Trigger */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" onClick={() => setCmdOpen(true)} className="rounded-full liquid-glass-button">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="hidden lg:inline">Command</span>
              <kbd className="ml-2 hidden xl:inline-flex items-center rounded-lg liquid-glass px-2 py-1 text-[10px] text-muted-foreground">⌘K</kbd>
            </Button>
            <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              asChild 
              variant="glow"
              className="liquid-glow rounded-full px-5"
            >
              <Link to="/dashboard">
                <User className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-foreground hover:bg-primary/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </SheetTrigger>
          <SheetContent 
            className="w-80 liquid-glass-strong border-border"
            side="right"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {/* Mobile Progress */}
              {showProgress && (
                <div className="pb-4 mb-4 border-b border-border/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Battery className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Progress</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>
              )}

              {/* Navigation Items */}
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink 
                    to={item.path} 
                    icon={<item.icon size={18} />} 
                    isActive={isActive(item.path)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </MobileNavLink>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
                <Button 
                  variant="glow"
                  className="w-full liquid-glow rounded-full"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/dashboard");
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>Dashboard</span>
                </Button>
                
                {/* Quick Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                  <VehicleAvailabilityPulse available={true} />
                  <ETATimerLoader eta="5 min" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  icon?: React.ComponentType<any>;
}

function NavLink({ to, children, isActive, icon: Icon }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`relative flex items-center space-x-1 transition-colors ${
        isActive 
          ? "text-primary" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

function MobileNavLink({
  to,
  children,
  icon,
  isActive,
  onClick,
}: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? "liquid-glass-button liquid-primary border border-primary/30" 
          : "text-muted-foreground hover:text-foreground liquid-glass-button"
      }`}
    >
      <span className={isActive ? "text-white" : "text-muted-foreground"}>{icon}</span>
      <span>{children}</span>
    </Link>
  );
}