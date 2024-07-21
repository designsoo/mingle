import { useEffect, useRef } from 'react';

const useLazyLoadImages = () => {
  const imgRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

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

    imgRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      imgRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return imgRefs;
};

export default useLazyLoadImages;
