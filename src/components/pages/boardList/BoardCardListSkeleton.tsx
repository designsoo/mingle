import { BoardCardSkeleton } from 'mingle-ui';

const BoardCardListSkeleton = () => {
  return (
    <ul className='grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={`card-skeleton-${index}`}>
          <BoardCardSkeleton cardWidth='265px' />
        </li>
      ))}
    </ul>
  );
};

export default BoardCardListSkeleton;
