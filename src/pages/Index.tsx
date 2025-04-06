
import React, { Suspense, useState, useEffect } from "react";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";

// Lazy load the main content for better initial load performance
const IndexContent = React.lazy(() => import("@/components/index/IndexContent"));

export default function Index() {
  const [domLoaded, setDomLoaded] = useState(false);

  // Only show content when DOM is fully loaded
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return <DefaultLoadingFallback />;
  }
  
  return (
    <Suspense fallback={<DefaultLoadingFallback />}>
      <IndexContent />
    </Suspense>
  );
}

