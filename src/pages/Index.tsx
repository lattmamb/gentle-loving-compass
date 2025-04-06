
import React, { Suspense } from "react";
import { DefaultLoadingFallback } from "@/components/LazyLoadComponents";

// Lazy load the main content for better initial load performance
const IndexContent = React.lazy(() => import("@/components/index/IndexContent"));

export default function Index() {
  return (
    <Suspense fallback={<DefaultLoadingFallback />}>
      <IndexContent />
    </Suspense>
  );
}
