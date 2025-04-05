
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { LoadingAnimation } from "@/components/ui/loading-animation";

export default function LoadingOverlay() {
  const { isLoading, loadingMessage } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <LoadingAnimation
          variant="fullscreen"
          size="lg"
          message={loadingMessage}
        />
      )}
    </AnimatePresence>
  );
}
