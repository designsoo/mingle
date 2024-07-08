import { EmptyBoardCard } from 'mingle-ui';

const EmptyBoardCards = () => {
  return (
    <ul className='flex flex-row gap-5'>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={`empty-board-cards-${index}`}>
          <EmptyBoardCard />
        </li>
      ))}
    </ul>
  );
};

export default EmptyBoardCards;
