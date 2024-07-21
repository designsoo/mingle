import { BannerImageType } from '@/types/image';

interface BannerImageProps {
  imageData: BannerImageType;
  width: number;
  height: number;
}

const BannerImage = ({ imageData, width, height }: BannerImageProps) => {
  const { webp, png } = imageData;

  return (
    <div className='min-w-[240px] lg:w-[400px]'>
      <picture>
        <source data-srcset={webp.url} type='image/webp' />
        <img data-src={png.url} alt={png.alt} width={width} height={height} />
      </picture>
    </div>
  );
};

export default BannerImage;
