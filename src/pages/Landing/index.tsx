import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { META_DATA, PNGS, bannerContent } from '@/constants';

import MetaData from '@/components/MetaData';
import BannerContent from '@/components/pages/landing/BannerContent';
import BannerImage from '@/components/pages/landing/BannerImage';
import SubBanner from '@/components/pages/landing/SubBanner';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { useDeviceType } from '@/hooks/useDeviceType';
import useLazyLoadImages from '@/hooks/useLazyLoadImages';
import { getDeviceCTAImageUrl } from '@/utils/getDeviceCTAImageUrl';

const { banner_device_mockup, banner_emoji, banner_celebrate } = PNGS;
const { dashboard, emoji, celebrate, share, write } = bannerContent;

const Landing = () => {
  const deviceType = useDeviceType();
  const imgRefs = useLazyLoadImages(3);

  const preloadImages = () => {
    const img = new Image();
    img.src = getDeviceCTAImageUrl(deviceType);
  };

  useEffect(() => {
    preloadImages();
  }, [deviceType]);

  return (
    <>
      <MetaData title={META_DATA.title} />
      <div>
        <Header isLanding />
        <main className='bg-landing-black'>
          <section
            style={{
              background: `url(${getDeviceCTAImageUrl(deviceType)}) no-repeat center / cover`,
            }}
            className='min-h-[740px] overflow-hidden md:min-h-screen'
          >
            <h2 className='visually-hidden'>CTA Banner</h2>
            <div className='m-auto flex flex-col items-center justify-center gap-6 pt-28 md:gap-12 md:pt-40 lg:absolute lg:left-20 lg:top-1/2 lg:-translate-y-1/2 lg:items-start lg:pt-0'>
              <h3 className='flex flex-col items-center justify-center gap-0 text-base-32 *:block md:text-6xl lg:items-start lg:text-5xl'>
                <span className='pb-1 text-neutral-500 md:pb-4'>Get Your Create</span>
                <span className='text-neutral-100'>Mingle Board</span>
              </h3>
              <Link
                to={'/list'}
                className='base-transition inline-block h-12 rounded-full border border-neutral-100 px-6 text-base leading-[48px] hover:border-yellow-300 hover:bg-yellow-300 hover:text-neutral-900 md:!h-14 md:px-6 md:text-base-18 md:leading-[56px]'
              >
                Get Started
              </Link>
            </div>
          </section>

          <section className='grid grid-cols-4 gap-5 px-5 py-16 md:grid-cols-12 md:px-10 md:py-32 lg:m-auto lg:max-w-[1200px]'>
            <h2 className='col-span-4 pb-6 text-center text-bold-24 md:col-span-12 lg:pb-12 lg:text-bold-32'>
              Make Every Moment Memorable
            </h2>

            <div
              ref={(el) => (imgRefs.current[0] = el)}
              className='banner-base flexbox-column-center md:flexbox-row-reverse col-span-4 gap-10 md:col-span-12 lg:gap-16 lg:rounded-3xl lg:px-12'
            >
              <div className='flexbox-column-center relative w-[80%]'>
                <BannerImage imageData={banner_device_mockup} width={690} height={432} />
              </div>
              <div className='*:text-center md:max-w-[360px] md:grow md:*:text-start lg:max-w-[430px]'>
                <h3 className='mb-8 text-bold-20 text-neutral-100 lg:text-bold-28'>{dashboard.title}</h3>
                <p className='pb-4 text-sm text-neutral-400 lg:text-lg'>{dashboard.description}</p>
              </div>
            </div>

            <div
              ref={(el) => (imgRefs.current[1] = el)}
              className='flexbox-column-reverse col-span-4 gap-5 md:col-span-6'
            >
              <div className='banner-vertical'>
                <BannerImage imageData={banner_emoji} width={420} height={450} />
                <BannerContent title={emoji.title} description={emoji.description} />
              </div>
              <SubBanner bannerColor='#FDBA74' title={share.title} description={share.description} />
            </div>

            <div
              ref={(el) => (imgRefs.current[2] = el)}
              className='flexbox-column-between-center md:flexbox-column-reverse col-span-4 gap-5 md:col-span-6'
            >
              <SubBanner bannerColor='#F5E724' title={write.title} description={write.description} />
              <div className='banner-vertical gap-10'>
                <BannerContent title={celebrate.title} description={celebrate.description} />
                <BannerImage imageData={banner_celebrate} width={420} height={380} />
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Landing;
