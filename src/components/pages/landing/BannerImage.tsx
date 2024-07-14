interface BannerImageProps {
  imageUrl: string;
  imageAlt: string;
}

const BannerImage = ({ imageUrl, imageAlt }: BannerImageProps) => {
  return (
    <div className='w-[80%] min-w-[240px] lg:w-[400px]'>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default BannerImage;
