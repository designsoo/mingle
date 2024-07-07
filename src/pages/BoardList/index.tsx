import { useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { IconButton } from 'mingle-ui';

import { SVGS } from '@/constants';

import { getBoardList } from '@/api/queryFunctions';
import BoardCard from '@/components/pages/boardList/BoardCard';
import Header from '@/components/ui/Header';
import { BoardResults } from '@/types/recipients';

const {
  arrow: { left, right },
  search,
} = SVGS;

const SCROLL_SLIDER_WIDRH = 1140;

const BoardList = () => {
  const { data: popularBoardData } = useQuery({
    queryKey: ['recipients', 'like'],
    queryFn: getBoardList,
  });

  const { data: latestBoardData } = useQuery({
    queryKey: ['recipients', '', 99],
    queryFn: getBoardList,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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
    <div>
      <Header />
      <main className='m-auto flex max-w-[1120px] flex-col gap-4 py-[100px] pl-5 lg:pl-0'>
        <section className='popular-board'>
          <div className='flex justify-between'>
            <h2 className='mb-2 text-bold-24 text-yellow-300'>Popular Board</h2>
            <div className='flex gap-2'>
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
          </div>

          <div className='max-w-[1120px] overflow-x-scroll scroll-smooth pt-5 scrollbar-hide' ref={sliderRef}>
            <ul className='flex flex-row gap-5'>
              {popularBoardData?.map((board: BoardResults) => (
                <li key={board.id}>
                  <BoardCard board={board} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='latest-board'>
          <div className='mt-10 flex items-center justify-between'>
            <h2 className='mb-2 text-bold-24 text-green-400'>Latest Board</h2>
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
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className='max-w-[1120px] overflow-x-scroll scroll-smooth pt-5 scrollbar-hide'>
            <ul className='grid grid-cols-4 gap-x-5 gap-y-8'>
              {latestBoardData?.map((board: BoardResults) => (
                <li key={board.id}>
                  <BoardCard board={board} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BoardList;
