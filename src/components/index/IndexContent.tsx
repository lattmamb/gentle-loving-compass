
import React, { memo, useRef } from "react";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

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
    triggerOnce: true
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
  return (
    <main className="bg-[#080c14] text-white min-h-screen">
      {/* Hero section - always loaded immediately */}
      <React.Suspense fallback={<DefaultLoadingFallback />}>
        <LazyHeroSection />
      </React.Suspense>
      
      {/* Lazily load the rest of the sections as user scrolls */}
      <LazyLoadSection>
        <LazyFeaturedVehiclesSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyFeaturesSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyStatsSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyChargingSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTestimonialsSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyVisionSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTokenizedSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyMarqueeSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyGlassmorphicSection />
      </LazyLoadSection>
      
      <LazyLoadSection>
        <LazyTabsFeatureSection />
      </LazyLoadSection>
    </main>
  );
});

export default IndexContent;
