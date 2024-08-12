import { EmptyBoardCard } from 'mingle-ui';

import { BoardResults } from '@/types/recipients';

import BoardCard from './BoardCard';
import BoardCardListSkeleton from './BoardCardListSkeleton';

interface BoardCardListProps {
  boardList: BoardResults[];
  isEmpty: boolean;
  isLoading?: boolean;
  isNextPageLoading?: boolean;
  isPopular?: boolean;
}

const BoardCardList = ({ boardList, isLoading, isEmpty, isNextPageLoading, isPopular = false }: BoardCardListProps) => {
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
      {isNextPageLoading && <BoardCardListSkeleton />}
    </>
  );
};

export default BoardCardList;
