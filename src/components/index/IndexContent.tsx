import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { LazyParallax3DHero } from "@/components/LazyLoadComponents";
import AnimatedBackground from "@/components/AnimatedBackground";
import GridBackground from "@/components/ui/grid-background";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";

// Lazy load sections for better performance
const FeaturedVehiclesSection = React.lazy(() => import("./FeaturedVehiclesSection"));
const GlassmorphicSection = React.lazy(() => import("./GlassmorphicSection"));
const MarqueeSection = React.lazy(() => import("./MarqueeSection"));
const FeaturesSection = React.lazy(() => import("./FeaturesSection"));
const StatsSection = React.lazy(() => import("./StatsSection"));
const TabsFeatureSection = React.lazy(() => import("./TabsFeatureSection"));
const ChargingSection = React.lazy(() => import("./ChargingSection"));
const VisionSection = React.lazy(() => import("./VisionSection"));
const TokenizedSection = React.lazy(() => import("./TokenizedSection"));
const TestimonialsSection = React.lazy(() => import("./TestimonialsSection"));

export default function IndexContent() {
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  // Track mouse position for global 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -0.5 and 0.5
      if (pageRef.current) {
        const { width, height } = pageRef.current.getBoundingClientRect();
        const x = (e.clientX / width - 0.5) * 2;
        const y = (e.clientY / height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Scroll tracking for parallax with throttling for performance
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced 3D transforms based on mouse movement - more subtle for polish
  const baseTransform = useMotionValue(0);
  const rotateX = useTransform(baseTransform, [0, 1], [mousePosition.y * -2, mousePosition.y * 2]);
  const rotateY = useTransform(baseTransform, [0, 1], [mousePosition.x * 2, mousePosition.x * -2]);

  return (
    <div ref={pageRef} className="relative space-3d min-h-screen w-full overflow-hidden">
      {/* Enhanced 3D animated background with grid */}
      <GridBackground containerClassName="fixed inset-0 -z-20" />
      <AnimatedBackground intensity="low" />
      
      <div className="relative z-10 perspective-2000 transform-style-3d">
        {/* Main content with 3D space */}
        <motion.div 
          className="w-full"
          style={{ 
            transformStyle: "preserve-3d",
            rotateX,
            rotateY
          }}
        >
          {/* Hero section with full bleed - Lazy loaded */}
          <Suspense fallback={<DefaultLoadingFallback />}>
            <LazyParallax3DHero />
          </Suspense>
          
          {/* Other sections - All lazy loaded */}
          <Suspense fallback={<DefaultLoadingFallback />}>
            <FeaturedVehiclesSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <GlassmorphicSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <MarqueeSection />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <FeaturesSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <StatsSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <TabsFeatureSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <ChargingSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <VisionSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <TokenizedSection scrollY={scrollY} />
          </Suspense>
          
          <Suspense fallback={<DefaultLoadingFallback />}>
            <TestimonialsSection scrollY={scrollY} />
          </Suspense>
        </motion.div>
      </div>
      
      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
}
