
import { useEffect, useState, RefObject } from "react";

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: IntersectionOptions = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    // Check if IntersectionObserver is available (for SSR safety)
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        // Update state only if needed
        if (isVisible !== isIntersecting) {
          setIsVisible(isIntersecting);
        }

        // Unobserve if should freeze
        if (isIntersecting && freezeOnceVisible) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, freezeOnceVisible]);

  return isVisible;
};

export default useIntersectionObserver;
