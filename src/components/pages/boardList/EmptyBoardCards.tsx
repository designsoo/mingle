import { EmptyBoardCard } from 'mingle-ui';

const EmptyBoardCards = () => {
  return (
    <ul className='grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={`empty-board-cards-${index}`}>
          <EmptyBoardCard />
        </li>
      ))}
    </ul>
  );
};

export default EmptyBoardCards;
