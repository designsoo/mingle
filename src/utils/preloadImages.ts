export const preloadImages = (imageUrl: string, callback: () => void) => {
  const img = new Image();
  img.src = imageUrl;
  img.onload = callback;
};
