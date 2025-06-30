
import { useEffect, useState, useRef, useCallback } from 'react';

interface ScrollPhysicsOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export const useScrollPhysics = (options: ScrollPhysicsOptions) => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number>();

  const updateProgress = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;
    
    const start = windowHeight;
    const end = -elementHeight;
    const range = start - end;
    
    const scrolled = start - rect.top;
    const progressValue = Math.max(0, Math.min(1, scrolled / range));
    
    setProgress(progressValue);
    setIsActive(progressValue > 0 && progressValue < 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  return { progress, isActive, elementRef };
};

export const useWatchInteraction = () => {
  const [currentApp, setCurrentApp] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleCrownScroll = useCallback((delta: number) => {
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 150);
  }, []);

  return { currentApp, setCurrentApp, isInteracting, handleCrownScroll };
};
