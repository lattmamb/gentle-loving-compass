import React, { useState, useEffect, useRef, Suspense, memo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { LazyParallax3DHero } from "@/components/LazyLoadComponents";
import AnimatedBackground from "@/components/AnimatedBackground";
import GridBackground from "@/components/ui/grid-background";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

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

// Create a LazySection component to handle visibility-based loading
const LazySection = memo(({ children, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold });
  
  return (
    <div ref={ref} className="w-full">
      {isVisible && children}
    </div>
  );
});

const IndexContent = memo(function IndexContent() {
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  // Track mouse position for global 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D effect - optimized with throttling
  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const throttleDelay = 30; // ms
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;
      
      lastTime = currentTime;
      rafId = requestAnimationFrame(() => {
        // Normalize mouse position between -0.5 and 0.5
        if (pageRef.current) {
          const { width, height } = pageRef.current.getBoundingClientRect();
          const x = (e.clientX / width - 0.5) * 2;
          const y = (e.clientY / height - 0.5) * 2;
          setMousePosition({ x, y });
        }
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  
  // Scroll tracking for parallax with throttling for performance
  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const throttleDelay = 50; // ms
    
    const handleScroll = () => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;
      
      lastTime = currentTime;
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
          
          {/* Other sections - All lazy loaded with visibility detection */}
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <FeaturedVehiclesSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <GlassmorphicSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <MarqueeSection />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <FeaturesSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <StatsSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <TabsFeatureSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <ChargingSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <VisionSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <TokenizedSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<DefaultLoadingFallback />}>
              <TestimonialsSection scrollY={scrollY} />
            </Suspense>
          </LazySection>
        </motion.div>
      </div>
      
      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
});

export default IndexContent;
