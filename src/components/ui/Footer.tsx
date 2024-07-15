import { SVGS } from '@/constants';
const { footer_logo } = SVGS;

const Footer = () => {
  return (
    <footer className='grid w-full grid-cols-4 gap-5 border-t border-neutral-800 px-5 md:grid-cols-12'>
      <div className='col-span-4 w-full py-10 md:col-span-12 md:px-10 lg:m-auto lg:max-w-[1200px]'>
        <div className='mb-4'>
          <img src={footer_logo.url} alt={footer_logo.alt} width={100} height={30} />
        </div>
        <p className='text-base-14 text-neutral-400'>&copy; 2024 Mingle. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
