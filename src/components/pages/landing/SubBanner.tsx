interface SubBannerProps {
  bannerColor: string;
  title: string;
  description: string;
}

const SubBanner = ({ bannerColor, title, description }: SubBannerProps) => {
  return (
    <div style={{ backgroundColor: `${bannerColor}` }} className='sub-banner'>
      <h3 className='mb-2 text-bold-20 text-neutral-950 lg:text-3xl'>{title}</h3>
      <p className='text-bold-14 text-neutral-950 lg:text-lg'>{description}</p>
    </div>
  );
};

export default SubBanner;
