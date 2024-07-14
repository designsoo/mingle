import { Link, useLocation } from 'react-router-dom';

import { SVGS, ROUTER_PATH, NAV_LIST } from '@/constants';

const {
  logo: { url, alt },
} = SVGS;

const { landing } = ROUTER_PATH;

interface HeaderProps {
  isLanding?: boolean;
}

const Header = ({ isLanding = false }: HeaderProps) => {
  const location = useLocation();

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex h-[64px] w-full items-center justify-between px-5 lg:px-10 ${isLanding ? 'backdrop-blur-3xl color-background-opacity-black-1' : 'header-background'}`}
    >
      <h1>
        <Link to={landing}>
          <img src={url} alt={alt} width={100} height={30} />
        </Link>
      </h1>

      {!isLanding && (
        <>
          <nav className='hidden md:flex md:flex-row md:gap-8'>
            {NAV_LIST.map(({ id, value, path }) => {
              const isActive = location.pathname === path;
              const { url, alt } = isActive ? value.active : value.default;

              return (
                <Link key={`menu-${id}`} to={path} className='flexbox-row-center size-8'>
                  <img src={url} alt={alt} width={24} height={24} />
                </Link>
              );
            })}
          </nav>
          <div></div>
        </>
      )}
    </header>
  );
};

export default Header;
