import { BoardCardSkeleton } from 'mingle-ui';

const BoardCardListSkeleton = ({ isPopular = false }: { isPopular?: boolean }) => {
  return (
    <ul
      className={isPopular ? 'flex flex-row gap-5' : 'grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4'}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={`card-skeleton-${index}`}>
          <BoardCardSkeleton cardWidth={isPopular ? '256px' : '100%'} />
        </li>
      ))}
    </ul>
  );
};

export default BoardCardListSkeleton;
