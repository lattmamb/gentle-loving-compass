
import React, { memo, useRef, useEffect } from "react";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useMotionValue } from "framer-motion";

// Dynamic imports for performance
const LazyHeroSection = React.lazy(() => import("@/components/HeroSection"));
const LazyFeaturedVehiclesSection = React.lazy(() => import("@/components/index/FeaturedVehiclesSection"));
const LazyFeaturesSection = React.lazy(() => import("@/components/index/FeaturesSection"));
const LazyStatsSection = React.lazy(() => import("@/components/index/StatsSection"));
const LazyChargingSection = React.lazy(() => import("@/components/index/ChargingSection"));
const LazyTestimonialsSection = React.lazy(() => import("@/components/index/TestimonialsSection"));
const LazyVisionSection = React.lazy(() => import("@/components/index/VisionSection"));
const LazyTokenizedSection = React.lazy(() => import("@/components/index/TokenizedSection"));
const LazyMarqueeSection = React.lazy(() => import("@/components/index/MarqueeSection"));
const LazyGlassmorphicSection = React.lazy(() => import("@/components/index/GlassmorphicSection"));
const LazyTabsFeatureSection = React.lazy(() => import("@/components/index/TabsFeatureSection"));

// Use Intersection Observer to lazy load components
const LazyLoadSection = ({ children, threshold = 0.1 }: { children: React.ReactNode; threshold?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold,
    freezeOnceVisible: true, // Using freezeOnceVisible instead of triggerOnce
  });

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <React.Suspense fallback={<DefaultLoadingFallback />}>
          {children}
        </React.Suspense>
      ) : (
        <div className="h-96" /> // Placeholder with approximate height
      )}
    </div>
  );
};

// Memoize the entire component for performance
const IndexContent = memo(function IndexContent() {
  // Shared scroll value for animations
  const scrollY = useMotionValue(0);
  
  // Update scrollY on scroll
  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <main className="bg-[#080c14] text-white min-h-screen">
      {/* Hero section - always loaded immediately */}
      <React.Suspense fallback={<DefaultLoadingFallback />}>
        <LazyHeroSection />
      </React.Suspense>
      
      {/* Lazily load the rest of the sections as user scrolls */}
      <LazyLoadSection>
        <LazyFeaturedVehiclesSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyFeaturesSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyStatsSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyChargingSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTestimonialsSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyVisionSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTokenizedSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyMarqueeSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyGlassmorphicSection scrollY={scrollY} />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTabsFeatureSection scrollY={scrollY} />
      </LazyLoadSection>
    </main>
  );
});

export default IndexContent;
