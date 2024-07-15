interface BannerImageProps {
  imageUrl: string;
  imageAlt: string;
  width: number;
  height: number;
}

const BannerImage = ({ imageUrl, imageAlt, width, height }: BannerImageProps) => {
  return (
    <div className='min-w-[240px] lg:w-[400px]'>
      <img src={imageUrl} alt={imageAlt} width={width} height={height} />
    </div>
  );
};

export default BannerImage;
