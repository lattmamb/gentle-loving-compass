import React from "react";
import UnifiedHeader from "@/components/ui/unified-header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Smartphone, CreditCard, Car } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Browse & Select",
      description: "Choose from our premium fleet of electric vehicles across Illinois"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Subscribe",
      description: "Select your subscription plan and complete the booking process"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Drive Clean",
      description: "Pick up your vehicle and enjoy zero-emission transportation"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <UnifiedHeader />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Unity Fleet Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Illinois's premier clean energy transportation solution in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl border border-border bg-card"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary mx-auto mt-6 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Clean Energy Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Zero Emissions",
                "Illinois Solar Powered",
                "Cost Effective",
                "Future Ready"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;