import { Link } from 'react-router-dom';

import { NAV_LIST } from '@/constants';

const NavigationBar = () => {
  return (
    <nav className='fixed bottom-0 grid h-[52px] w-full grid-cols-3 bg-neutral-900 md:hidden'>
      {NAV_LIST.map(({ id, value, path }) => {
        const isActive = location.pathname === path;
        const { url, alt } = isActive ? value.active : value.default;

        return (
          <Link key={`menu-${id}`} to={path} className='flex size-8 h-full w-full items-center justify-center'>
            <img src={url} alt={alt} width={24} height={24} />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
