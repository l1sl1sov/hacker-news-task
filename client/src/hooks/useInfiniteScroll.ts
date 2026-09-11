import { useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
  hasMore: boolean;
  showLoadMoreButton: boolean;
  onIntersect: () => void;
}

//basic infinite scroll react query hook with observer
export const useInfiniteScroll = ({
  hasMore,
  showLoadMoreButton,
  onIntersect,
}: UseInfiniteScrollProps) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || showLoadMoreButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    );

    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [hasMore, showLoadMoreButton, onIntersect]);

  return triggerRef;
};
