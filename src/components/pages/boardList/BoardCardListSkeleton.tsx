import { BoardCardSkeleton } from 'mingle-ui';

const BoardCardListSkeleton = () => {
  return (
    <ul className='flex flex-row gap-5'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={`card-skeleton-${index}`}>
          <BoardCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default BoardCardListSkeleton;
