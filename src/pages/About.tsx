
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoamBlock from "@/components/FoamBlock";
import { motion } from "framer-motion";
import { ArrowRight, Car, CreditCard, HeartHandshake, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AIAssistant from "@/components/AIAssistant";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Redefining Premium Tesla Experiences
              </h1>
              <p className="text-xl text-white/70 mb-10">
                We're on a mission to make luxury electric vehicles accessible through 
                a seamless, flexible subscription service that puts you in control.
              </p>
              <FoamBlock 
                variant="glow" 
                className="py-8 px-6 md:p-10 max-w-4xl mx-auto"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Tesla Experience" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-white/80 italic">
                  "Our vision is to create a world where sustainable transportation 
                  is not just a choice for the few, but an accessible luxury for the many."
                </p>
                <p className="mt-4 font-medium">— Emma Wright, Founder & CEO</p>
              </FoamBlock>
            </div>
          </motion.section>
          
          {/* Our Story */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Our Story
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-blue">From Concept to Reality</h3>
                <p className="text-white/70 mb-4">
                  Founded in 2023, EonRides began with a simple question: Why should experiencing a Tesla 
                  require such a significant commitment? Our founder, a longtime Tesla enthusiast, 
                  recognized that many people wanted the Tesla experience without the long-term 
                  financial obligation of purchasing.
                </p>
                <p className="text-white/70 mb-6">
                  What started as a small fleet of three vehicles has grown into the premier 
                  Tesla subscription service, with operations in major cities across the country 
                  and plans for international expansion.
                </p>
                
                <Link 
                  to="/vehicles" 
                  className="apple-button inline-flex items-center"
                >
                  Explore Our Fleet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <FoamBlock 
                variant="interactive"
                className="h-full"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Our beginning" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Our growth" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden col-span-2">
                    <img 
                      src="/placeholder.svg" 
                      alt="Our team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FoamBlock>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Shield className="h-8 w-8 text-blue-400" />}
                title="Quality & Safety"
                description="Every vehicle in our fleet undergoes rigorous maintenance and safety checks before each new subscription."
              />
              
              <ValueCard 
                icon={<Users className="h-8 w-8 text-blue-400" />}
                title="Customer Experience"
                description="We're committed to providing a seamless, personalized experience from booking to return."
              />
              
              <ValueCard 
                icon={<HeartHandshake className="h-8 w-8 text-blue-400" />}
                title="Sustainability"
                description="By sharing high-quality electric vehicles, we're reducing the environmental impact of transportation."
              />
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Why Choose EonRides
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FoamBlock className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-blue">
                    Premium Fleet
                  </h3>
                  
                  <ul className="space-y-4 mb-6">
                    <FeatureItem>Latest Tesla models available</FeatureItem>
                    <FeatureItem>Regular updates to our fleet</FeatureItem>
                    <FeatureItem>Access to exclusive, limited-edition vehicles</FeatureItem>
                    <FeatureItem>Pristine condition guaranteed</FeatureItem>
                  </ul>
                  
                  <Link 
                    to="/vehicles" 
                    className="ui-glow-button mt-auto self-start"
                  >
                    <span className="block px-6 py-2.5 text-white font-medium">
                      View Vehicles
                    </span>
                  </Link>
                </div>
              </FoamBlock>
              
              <FoamBlock className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-blue">
                    Flexible Subscriptions
                  </h3>
                  
                  <ul className="space-y-4 mb-6">
                    <FeatureItem>Daily, monthly, and annual plans</FeatureItem>
                    <FeatureItem>Swap vehicles during your subscription</FeatureItem>
                    <FeatureItem>All-inclusive pricing with no hidden fees</FeatureItem>
                    <FeatureItem>Concierge delivery and pick-up</FeatureItem>
                  </ul>
                  
                  <Link 
                    to="/pricing" 
                    className="ui-glow-button mt-auto self-start"
                  >
                    <span className="block px-6 py-2.5 text-white font-medium">
                      View Plans
                    </span>
                  </Link>
                </div>
              </FoamBlock>
            </div>
          </section>
          
          {/* Our Team */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember 
                name="Emma Wright"
                title="Founder & CEO"
                image="/placeholder.svg"
              />
              
              <TeamMember 
                name="Marcus Chen"
                title="Chief Technology Officer"
                image="/placeholder.svg"
              />
              
              <TeamMember 
                name="Sophia Rodriguez"
                title="Head of Customer Experience"
                image="/placeholder.svg"
              />
              
              <TeamMember 
                name="James Wilson"
                title="Fleet Operations Director"
                image="/placeholder.svg"
              />
            </div>
          </section>
          
          {/* Join Us Section */}
          <section>
            <FoamBlock className="text-center py-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Experience Tesla Luxury?
              </h2>
              
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Join thousands of satisfied members who have discovered the freedom 
                and luxury of driving a Tesla without the commitment.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/vehicles" 
                  className="apple-button inline-flex items-center"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Browse Vehicles
                </Link>
                
                <Link 
                  to="/pricing" 
                  className="apple-button inline-flex items-center"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  View Plans
                </Link>
              </div>
            </FoamBlock>
          </section>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

// Helper Components
const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <FoamBlock variant="interactive" className="h-full flex flex-col items-center text-center">
      <div className="mb-4 p-4 bg-blue-500/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </FoamBlock>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center">
      <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-white/80">{children}</span>
    </li>
  );
};

const TeamMember = ({ name, title, image }: { name: string; title: string; image: string }) => {
  return (
    <FoamBlock variant="interactive" className="text-center">
      <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-white/60">{title}</p>
    </FoamBlock>
  );
};

export default About;
