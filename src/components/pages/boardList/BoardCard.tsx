import { Link } from 'react-router-dom';

import { getBackgroundImageUrl } from '@/utils';

import MemberList from '@/components/pages/boardList/MemberList';
import TopReactionList from '@/components/pages/boardList/TopReactionList';
import { BoardResults } from '@/types/recipients';

interface BoardCardProps {
  board: BoardResults;
}

const BoardCard = ({ board }: BoardCardProps) => {
  const { id, backgroundColor, backgroundImageURL, name, messageCount, topReactions } = board;

  const backgroundUrl = getBackgroundImageUrl(backgroundColor, backgroundImageURL);

  return (
    <article
      className='base-transition h-[320px] w-[265px] overflow-hidden rounded-2xl p-4 hover:-translate-y-3'
      style={{
        background: `url(${backgroundUrl}) no-repeat center / cover`,
      }}
    >
      <Link to={`/board/${id}`} className='flex h-full w-full flex-col justify-end'>
        <div className='board-card-inner flex h-[136px] flex-col items-start justify-between p-3'>
          <h4 className='h-[26px] w-full text-bold-20'>{name}</h4>
          <MemberList memberList={board.recentMessages} memberCount={messageCount} />
          <TopReactionList topReactions={topReactions} />
        </div>
      </Link>
    </article>
  );
};

export default BoardCard;
