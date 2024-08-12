import { RefObject } from 'react';

import { EmptyBoardCard } from 'mingle-ui';

import { BoardResults } from '@/types/recipients';

import BoardCard from './BoardCard';
import BoardCardListSkeleton from './BoardCardListSkeleton';

interface BoardCardListProps {
  boardList: BoardResults[];
  isLoading: boolean;
  isEmpty: boolean;
  isNextPageLoading?: boolean;
  triggerRef?: RefObject<HTMLDivElement>;
  isPopular?: boolean;
}

const BoardCardList = ({
  boardList,
  isLoading,
  isNextPageLoading,
  isEmpty,
  triggerRef,
  isPopular = false,
}: BoardCardListProps) => {
  const boardListLayout = isPopular
    ? 'flex flex-row gap-5'
    : 'grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4';

  if (isLoading) {
    return <BoardCardListSkeleton isPopular={isPopular} />;
  }

  if (isEmpty) {
    return <EmptyBoardCard />;
  }

  return (
    <>
      <ul className={boardListLayout}>
        {boardList.map((board: BoardResults) => (
          <li key={board.id}>
            <BoardCard board={board} cardWidth={isPopular ? '265px' : '100%'} />
          </li>
        ))}
      </ul>
      <div ref={triggerRef} className='size-10 bg-transparent'></div>
      {isNextPageLoading && <BoardCardListSkeleton />}
    </>
  );
};

export default BoardCardList;
