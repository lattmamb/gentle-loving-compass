
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from "@/components/ui/sparkles-demo";
import { SparklesCore } from "@/components/ui/sparkles";
import AIAssistant from "@/components/AIAssistant";

const SparklesDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-4">
              Sparkles Effects Demo
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Interactive particle animations for modern web interfaces
            </p>
          </div>
        </section>
        
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-blue">Standard Sparkles</h2>
            <div className="rounded-lg overflow-hidden">
              <SparklesPreview />
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-blue">Full Page Sparkles</h2>
            <div className="rounded-lg overflow-hidden">
              <SparklesPreviewDark />
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-blue">Colorful Sparkles</h2>
            <div className="rounded-lg overflow-hidden">
              <SparklesPreviewColorful />
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-blue">Custom Configuration</h2>
            <div className="bg-black rounded-lg overflow-hidden h-[30rem] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <SparklesCore
                  id="customSparkles"
                  background="transparent"
                  minSize={0.8}
                  maxSize={2}
                  particleDensity={80}
                  className="w-full h-full"
                  particleColor="#3b82f6"
                  speed={2}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    Custom Blue Sparkles
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default SparklesDemo;
