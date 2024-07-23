import { useEffect, useRef } from 'react';

const useLazyLoadImages = (count: number) => {
  const imgRefs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null));

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sourceElement = entry.target.querySelector('source') as HTMLSourceElement | null;
          const imgElement = entry.target.querySelector('img') as HTMLImageElement | null;

          if (sourceElement && sourceElement.dataset.srcset) sourceElement.src = sourceElement.dataset.srcset;
          if (imgElement && imgElement.dataset.src) imgElement.src = imgElement.dataset.src;

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {});
    const imageTrigger = imgRefs.current;

    imageTrigger.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageTrigger.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return imgRefs;
};

export default useLazyLoadImages;
