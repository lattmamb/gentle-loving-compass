
import React from "react";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      
      <FeaturedVehicles />
      
      {/* Key Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Premium Electric Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                </svg>
              }
              title="No Hidden Fees"
              description="All-inclusive pricing with insurance, maintenance, and unlimited supercharging included."
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              }
              title="Flexible Terms"
              description="Choose from daily, monthly, or annual plans with the ability to swap vehicles."
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" x2="4" y1="22" y2="15"/>
                </svg>
              }
              title="Premium Experience"
              description="White-glove delivery service and 24/7 concierge support for all your needs."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12">
            Experience the future of mobility in three simple steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard
              number="01"
              title="Choose Your Tesla"
              description="Browse our fleet of premium Tesla vehicles and select your perfect match."
            />
            
            <StepCard
              number="02"
              title="Select Your Plan"
              description="Pick a subscription that fits your lifestyle and budget needs."
            />
            
            <StepCard
              number="03"
              title="Drive & Enjoy"
              description="We'll deliver your Tesla to your door. Just drive and enjoy the experience."
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700">
              <Link to="/vehicles">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <SubscriptionPlans />
      
      {/* Testimonials would go here */}
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:translate-y-[-5px]">
      <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center relative">
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 p-[2px]">
        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {number}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

export default Index;
