import { useEffect, useState } from 'react';

import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface IuseIntersectionObserverProps {
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({ hasNextPage, fetchNextPage }: IuseIntersectionObserverProps) => {
  const [trigger, setTrigger] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        //trigger 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    };

    //ointersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    // 타겟 관찰 시작
    observer.observe(trigger);

    // 관찰 멈춤
    return () => observer.unobserve(trigger);
  }, [trigger, hasNextPage, fetchNextPage]);

  return { setTrigger };
};
