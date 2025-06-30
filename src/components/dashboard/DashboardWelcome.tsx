
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface User {
  name: string;
  email: string;
  subscription: string;
  location: string;
  communityRole: string;
}

interface DashboardWelcomeProps {
  user: User;
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, {user.name}
        </h1>
        <p className="text-green-400 font-medium">
          {user.subscription} • {user.location}
        </p>
        <p className="text-sm text-white/60">
          {user.communityRole} • Building sustainable rural transportation
        </p>
      </div>
      
      <div className="mt-4 md:mt-0 flex space-x-3">
        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
          <Link to="/vehicles">Fleet Vehicles</Link>
        </Button>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/book/model-3">Book Transit</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardWelcome;
