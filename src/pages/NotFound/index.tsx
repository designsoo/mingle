import { Link } from 'react-router-dom';

import { SVGS } from '@/constants';

import MetaData from '@/components/MetaData';
const {
  notfound: { url, alt },
} = SVGS;

const NotFoundPage = () => {
  return (
    <>
      <MetaData title='Mingle | 404 Not Found' />
      <main className='flexbox-column-center min-h-screen w-full px-5'>
        <div className='flexbox-column-center'>
          <img className='w-56 md:w-64' src={url} alt={alt} />
          <div className='flexbox-column-center mb-8 mt-2 gap-6'>
            <span className='text-bold-24 md:text-bold-28'>PAGE NOT FOUND</span>
            <p className='max-w-[460px] text-center text-base-18 text-neutral-400'>
              Sorry, the page you&apos;re looking for cannot be found 😫 Please check the URL or go back to the homepage
            </p>
          </div>
          <Link
            to='/'
            className='base-transition rounded-lg bg-neutral-600 px-4 py-3 text-bold-16 hover:bg-neutral-700'
          >
            Go to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
