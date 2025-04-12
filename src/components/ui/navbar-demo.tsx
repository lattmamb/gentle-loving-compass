
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Vehicles', url: '/vehicles', icon: Briefcase },
    { name: 'Pricing', url: '/pricing', icon: FileText }
  ];

  return <NavBar items={navItems} />;
}
