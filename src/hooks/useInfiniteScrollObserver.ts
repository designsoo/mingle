import { useEffect, useRef } from 'react';

import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface IuseIntersectionObserverProps {
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

const useInfiniteScrollObserver = ({ hasNextPage, fetchNextPage }: IuseIntersectionObserverProps) => {
  const trigger = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const currentTrigger = trigger.current;

    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return trigger;
};

export default useInfiniteScrollObserver;
