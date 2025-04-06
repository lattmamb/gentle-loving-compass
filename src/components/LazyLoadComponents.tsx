
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { VehicleCardSkeleton } from '@/components/ui/skeleton-loaders';

// Loading fallbacks
export const DefaultLoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <Skeleton className="h-8 w-24" />
  </div>
);

export const VehicleLoadingFallback = () => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <VehicleCardSkeleton key={i} />
    ))}
  </div>
);

// Lazy loading HOC
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  Fallback: React.ComponentType = DefaultLoadingFallback
) {
  const LazyComponent = React.lazy(() => import(/* webpackChunkName: "[request]" */ `./${Component.displayName || Component.name}`));
  
  return (props: T) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Export lazy-loaded components
export const LazyParallax3DHero = React.lazy(() => import('./parallax3d'));
export const LazyVehicleHeroSection = React.lazy(() => import('./vehicle-hero'));
export const LazyFeaturedVehicles = React.lazy(() => import('./FeaturedVehicles'));
export const LazyVehicleCardsCarousel = React.lazy(() => import('./VehicleCardsCarousel'));
