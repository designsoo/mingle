import { Link, useLocation } from 'react-router-dom';

import { SVGS, ROUTER_PATH, NAV_LIST } from '@/constants';

const {
  logo: { url, alt },
} = SVGS;

const { landing } = ROUTER_PATH;

const Header = () => {
  const location = useLocation();

  return (
    <header className='header-background fixed left-0 top-0 z-50 flex h-[64px] w-full items-center justify-between px-5 lg:px-10'>
      <h1>
        <Link to={landing}>
          <img src={url} alt={alt} />
        </Link>
      </h1>
      <nav className='flex flex-row gap-8'>
        {NAV_LIST.map(({ id, value, path }) => {
          const isActive = location.pathname === path;
          const { url, alt } = isActive ? value.active : value.default;

          return (
            <Link key={`menu-${id}`} to={path} className='flexbox-row-center size-8'>
              <img src={url} alt={alt} />
            </Link>
          );
        })}
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
