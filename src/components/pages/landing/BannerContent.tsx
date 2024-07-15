interface BannerContentProps {
  title: string;
  description: string;
}

const BannerContent = ({ title, description }: BannerContentProps) => {
  return (
    <div className='text-center lg:max-w-[430px]'>
      <h3 className='mb-4 text-bold-20 text-neutral-100 lg:mb-8 lg:text-bold-28'>{title}</h3>
      <p className='text-base-14 text-neutral-400 lg:!text-base-18'>{description}</p>
    </div>
  );
};

export default BannerContent;
