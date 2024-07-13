import { Link } from 'react-router-dom';

import { PNGS, SVGS, bannerContent } from '@/constants';

import Header from '@/components/ui/Header';

const { ipad, iphone, banner_emoji, banner_celebrate } = PNGS;
const { footer_logo } = SVGS;
const { dashboard, emoji, celebrate, share, write } = bannerContent;

const Landing = () => {
  return (
    <div>
      <Header isLanding />
      <main className='bg-[#030307]'>
        <section className='cta-mobile md:cta-tablet lg:cta min-h-screen overflow-hidden'>
          <h2 className='visually-hidden'>CTA Banner</h2>
          <div className='m-auto pt-28 text-center md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2 md:!text-left lg:left-20'>
            <h3 className='text-base-32 *:block md:text-[40px]'>
              <span className='pb-1 text-neutral-500 md:pb-4'>Get Your Create</span>
              <span className='text-neutral-100'>Mingle Board</span>
            </h3>
            <Link
              to={'/list'}
              className='base-transition mt-6 inline-block h-12 rounded-full border border-neutral-100 px-6 text-base leading-[48px] hover:border-yellow-300 hover:bg-yellow-300 hover:text-neutral-900 md:mt-10'
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className='grid grid-cols-4 gap-5 px-5 py-16 md:grid-cols-12 md:px-10 md:py-32 lg:m-auto lg:max-w-[1200px]'>
          <h2 className='col-span-4 pb-6 text-center text-bold-24 md:col-span-12 lg:pb-12 lg:text-bold-32'>
            Make Every Moment Memorable
          </h2>

          {/* 첫번째 배너 */}
          <div className='banner-base flexbox-column-center md:flexbox-row-reverse col-span-4 gap-10 md:col-span-12 lg:gap-16 lg:rounded-3xl lg:px-12'>
            {/* 디바이스 이미지 */}
            <div className='flexbox-column-center relative'>
              <div className='ml-4 w-[80%] md:ml-12 md:w-[350px] lg:w-[420px]'>
                <img src={ipad.url} alt={ipad.alt} />
              </div>
              <div className='absolute -bottom-2 left-3 w-[20%] md:-left-8 md:w-[26%]'>
                <img src={iphone.url} alt={iphone.alt} />
              </div>
            </div>
            {/* text */}
            <div className='*:text-center md:max-w-[380px] md:grow md:*:text-start lg:max-w-[430px]'>
              <h3 className='mb-8 text-bold-20 lg:text-bold-28'>{dashboard.title}</h3>
              <p className='pb-4 text-sm text-neutral-500 lg:text-lg'>{dashboard.description}</p>
            </div>
          </div>

          {/* 2-두번째 배너 */}
          <div className='flexbox-column-reverse col-span-4 gap-5 md:col-span-6'>
            <div className='banner-vertical'>
              {/* 2-이모지 이미지 */}
              <div className='w-[80%] min-w-[300px] lg:w-[400px]'>
                <img src={banner_emoji.url} alt={banner_emoji.alt} />
              </div>
              {/* 2-text */}
              <div className='text-center lg:max-w-[430px]'>
                <h3 className='mb-4 text-bold-20 lg:mb-8 lg:text-bold-28'>{emoji.title}</h3>
                <p className='text-base-14 text-neutral-500 lg:!text-base-18'>{emoji.description}</p>
              </div>
            </div>
            {/* 2-주황 */}
            <div className='sub-banner bg-orange-300'>
              <h3 className='mb-2 text-bold-20 text-neutral-950 lg:text-3xl'>{share.title}</h3>
              <p className='text-bold-14 text-neutral-950'>{share.description}</p>
            </div>
          </div>

          {/* 3-세번째 배너 */}
          <div className='flexbox-column-between-center md:flexbox-column-reverse col-span-4 gap-5 md:col-span-6'>
            {/* 3-노랑 */}
            <div className='sub-banner bg-yellow-300'>
              <h3 className='mb-2 text-bold-20 text-neutral-950 lg:text-3xl'>{write.title}</h3>
              <p className='text-bold-14 text-neutral-950'>{write.description}</p>
            </div>

            <div className='banner-vertical'>
              {/* 3-text */}
              <div className='mb-3 text-center lg:max-w-[430px]'>
                <h3 className='mb-4 text-bold-20 lg:mb-8 lg:text-bold-28'>{celebrate.title}</h3>
                <p className='text-base-14 text-neutral-500 lg:!text-base-18'>{celebrate.description}</p>
              </div>
              {/* 3-캐릭터 이미지 */}
              <div className='w-[80%] min-w-[300px] lg:w-[400px]'>
                <img src={banner_celebrate.url} alt={banner_celebrate.alt} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='grid w-full grid-cols-4 gap-5 border-t border-neutral-800 px-5 md:grid-cols-12'>
        <div className='col-span-4 w-full py-10 md:col-span-12 md:px-10 lg:m-auto lg:max-w-[1200px]'>
          <div className='mb-4'>
            <img src={footer_logo.url} alt={footer_logo.alt} />
          </div>
          <p className='text-base-14 text-neutral-500'>&copy; 2024 Mingle. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
