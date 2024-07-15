import { useRef, useState } from 'react';

import { EmptyBoardCard, IconButton } from 'mingle-ui';
import { Helmet } from 'react-helmet-async';

import { SVGS } from '@/constants';

import BoardCard from '@/components/pages/boardList/BoardCard';
import BoardCardListSkeleton from '@/components/pages/boardList/BoardCardListSkeleton';
import EmptyBoardCards from '@/components/pages/boardList/EmptyBoardCards';
import Header from '@/components/ui/Header';
import NavigationBar from '@/components/ui/NavigationBar';
import { BoardResults } from '@/types/recipients';

import { useGetBoardList } from './data-access/useGetBoardList';

const {
  arrow: { left, right },
  search,
} = SVGS;

const SCROLL_SLIDER_WIDRH = 1140;

const BoardList = () => {
  const { data: popularBoardData, isLoading: isBoardLoading } = useGetBoardList({ sort: 'like' });
  const { data: latestBoardData } = useGetBoardList({ limit: 99 });

  const sliderRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleChange = () => {
    if (searchRef.current !== null) {
      setKeyword(searchRef.current.value);
    }
  };

  const filteredBoard =
    latestBoardData?.filter(({ name }: BoardResults) => name.toLowerCase().includes(keyword.toLowerCase())) ?? [];

  const isPopularBoardEmpty = popularBoardData?.length === 0;
  const isLatestBoardEmpty = filteredBoard.length === 0;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += SCROLL_SLIDER_WIDRH;
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= SCROLL_SLIDER_WIDRH;
    }
  };

  return (
    <>
      <Helmet>
        <title>Mingle | Board List</title>
      </Helmet>
      <div>
        <Header />
        <main className='m-auto flex max-w-[1120px] flex-col gap-4 py-[100px] pl-5 lg:pl-0'>
          <section className='popular-board'>
            <div className='flex justify-between pr-5'>
              <h2 className='mb-2 text-bold-24 text-yellow-200'>Popular Board</h2>
              {popularBoardData?.length > 4 && (
                <div className='hidden gap-2 lg:flex'>
                  <IconButton
                    iconAlt={left.alt}
                    iconUrl={left.url}
                    variant='stroke'
                    onClick={handlePrevClick}
                    iconSize={24}
                  />
                  <IconButton
                    iconAlt={right.alt}
                    iconUrl={right.url}
                    variant='stroke'
                    onClick={handleNextClick}
                    iconSize={24}
                  />
                </div>
              )}
            </div>

            <div className='max-w-[1120px] overflow-x-scroll scroll-smooth pt-5 scrollbar-hide' ref={sliderRef}>
              {isBoardLoading ? (
                <BoardCardListSkeleton isPopular />
              ) : (
                <>
                  {isPopularBoardEmpty && <EmptyBoardCards />}
                  <ul className='flex flex-row gap-5'>
                    {popularBoardData?.map((board: BoardResults) => (
                      <li key={board.id}>
                        <BoardCard board={board} cardWidth={'265px'} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>

          <section className='latest-board pr-5 lg:pr-0'>
            <div className='mt-10 flex flex-col gap-3 md:!flex-row md:items-center md:justify-between'>
              <h2 className='mb-2 text-bold-24'>Latest Board</h2>
              <div className='flex items-center gap-4'>
                <label htmlFor='search'>
                  <img
                    src={isFocused ? search.active.url : search.default.url}
                    alt={isFocused ? search.active.alt : search.default.alt}
                    width={24}
                    height={24}
                  />
                </label>
                <input
                  id='search'
                  type='text'
                  placeholder='Find Your Mingle Board'
                  className='w-[210px] bg-transparent text-base-18 text-neutral-100 outline-none placeholder:text-neutral-700'
                  onChange={handleChange}
                  value={keyword}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  ref={searchRef}
                />
              </div>
            </div>

            <div className='max-w-[1120px] overflow-x-scroll scroll-smooth pt-5 scrollbar-hide'>
              {isBoardLoading ? (
                <BoardCardListSkeleton />
              ) : (
                <>
                  {isLatestBoardEmpty && <EmptyBoardCard />}
                  <ul className='grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
                    {filteredBoard?.map((board: BoardResults) => (
                      <li key={board.id}>
                        <BoardCard board={board} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        </main>
        <NavigationBar />
      </div>
    </>
  );
};

export default BoardList;
