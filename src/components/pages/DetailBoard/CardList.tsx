import { CardSkeleton, EmptyCard, PaperCard } from 'mingle-ui';

import { TRANSLATE_TO_EN } from '@/constants';

import { MessagesResults, PaperCardResults } from '@/types/recipients';

interface CardListProps {
  isMessagesLoading: boolean;
  filteredMessages: MessagesResults[];
}

const CardList = ({ isMessagesLoading, filteredMessages }: CardListProps) => {
  const isEmpty = filteredMessages?.length === 0;

  return (
    <ul className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {isMessagesLoading ? (
        Array.from({ length: 9 }).map((_, idx: number) => (
          <li key={`empty-card-${idx}`}>
            <CardSkeleton />
          </li>
        ))
      ) : isEmpty ? (
        <EmptyCard />
      ) : (
        filteredMessages?.map(({ id, sender, relationship, content, profileImageURL, createdAt }: PaperCardResults) => (
          <li key={`paper-card-${id}`} className='relative'>
            <PaperCard
              fromName={sender}
              category={TRANSLATE_TO_EN[relationship]}
              description={content}
              backgroundImage={profileImageURL}
              createdAt={createdAt}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default CardList;
