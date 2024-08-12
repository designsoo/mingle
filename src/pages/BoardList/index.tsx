import { useRef, useState } from 'react';

import { IconButton } from 'mingle-ui';

import { SVGS } from '@/constants';

import MetaData from '@/components/MetaData';
import BoardCardList from '@/components/pages/boardList/BoardCardList';
import SearchInput from '@/components/pages/boardList/SearchInput';
import Header from '@/components/ui/Header';
import NavigationBar from '@/components/ui/NavigationBar';
import useInfiniteScrollObserver from '@/hooks/useInfiniteScrollObserver';

import { useGetBoardList } from './data-access/useGetBoardList';
import { useInfiniteBoardList } from './data-access/useInfiniteBoardList';

const {
  arrow: { left, right },
} = SVGS;

const SCROLL_SLIDER_WIDTH = 1140;
const LATEST_BOARD_LIMIT = 8;

const BoardList = () => {
  const { data: popularBoards, isLoading: isPopularBoardsFetching } = useGetBoardList({ sort: 'like' });
  const {
    latestBoardData,
    fetchNextPage,
    hasNextPage,
    isFetching: isLatestBoardsFetching,
    isFetchingNextPage,
  } = useInfiniteBoardList({
    limit: LATEST_BOARD_LIMIT,
  });
  const infiniteScrollTriggerRef = useInfiniteScrollObserver({ hasNextPage, fetchNextPage });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState('');

  const filteredBoards =
    latestBoardData?.pages.filter(({ name }: { name: string }) => name.toLowerCase().includes(keyword.toLowerCase())) ??
    [];

  const isPopularBoardEmpty = popularBoards?.length === 0;
  const isLatestBoardEmpty = filteredBoards.length === 0;

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += SCROLL_SLIDER_WIDTH;
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= SCROLL_SLIDER_WIDTH;
    }
  };

  return (
    <>
      <MetaData title='Mingle | Board List' />
      <div>
        <Header />
        <main className='m-auto flex max-w-[1120px] flex-col gap-4 py-[100px] pl-5 lg:pl-0'>
          <section className='popular-board'>
            <div className='flex justify-between pr-5'>
              <h2 className='mb-2 text-bold-24 text-yellow-200'>Popular Board</h2>
              {popularBoards?.length > 4 && (
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
              <BoardCardList
                boardList={popularBoards}
                isLoading={isPopularBoardsFetching}
                isEmpty={isPopularBoardEmpty}
                isPopular
              />
            </div>
          </section>

          <section className='latest-board pr-5 lg:pr-0'>
            <div className='mt-10 flex flex-col gap-3 md:!flex-row md:items-center md:justify-between'>
              <h2 className='text-bold-24'>Latest Board</h2>
              <SearchInput keyword={keyword} onSearchChange={setKeyword} />
            </div>

            <div className='max-w-[1120px] overflow-x-scroll scroll-smooth pt-5 scrollbar-hide'>
              <BoardCardList
                boardList={filteredBoards}
                isLoading={isLatestBoardsFetching}
                isEmpty={isLatestBoardEmpty}
                isNextPageLoading={isFetchingNextPage}
                triggerRef={infiniteScrollTriggerRef}
              />
            </div>
          </section>
        </main>
        <NavigationBar />
      </div>
    </>
  );
};

export default BoardList;
