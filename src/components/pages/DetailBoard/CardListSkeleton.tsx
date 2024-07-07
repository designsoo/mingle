import { CardSkeleton } from 'mingle-ui';

const CardListSkeleton = () => {
  return Array.from({ length: 9 }).map((_, idx: number) => (
    <li key={`empty-card-${idx}`}>
      <CardSkeleton />
    </li>
  ));
};

export default CardListSkeleton;
