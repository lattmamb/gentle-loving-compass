
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "@/context/LoadingContext";

export function LoadingRouteGuard({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip the first load to prevent showing loading on initial page render
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    // Show loading on route change
    startLoading();
    
    // Hide loading after a small delay to ensure content is loaded
    const timeoutId = setTimeout(() => {
      stopLoading();
    }, 500);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return <>{children}</>;
}
