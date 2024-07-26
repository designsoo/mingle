type imageList = {
  id: string;
  type: string;
  value: string;
};

export const preloadImages = (imageList: imageList[]) => {
  imageList.forEach((image) => {
    const img = new Image();
    img.src = image.value;
  });
};
