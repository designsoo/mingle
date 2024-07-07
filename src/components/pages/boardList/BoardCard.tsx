import { Link } from 'react-router-dom';

import MemberList from '@/components/pages/boardList/MemberList';
import TopReactionList from '@/components/pages/boardList/TopReactionList';
import { BoardResults } from '@/types/recipients';

interface BoardCardProps {
  board: BoardResults;
}

const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <article
      className='base-transition h-[320px] w-[265px] overflow-hidden rounded-2xl p-4 hover:-translate-y-3'
      style={{
        background: `url(${board.backgroundImageURL}) no-repeat center / cover`,
      }}
    >
      <Link to={`/board/${board.id}`} className='flex h-full w-full flex-col justify-end'>
        <div className='board-card-inner flex h-[136px] flex-col items-start justify-between p-3'>
          <h4 className='h-[26px] w-full text-bold-20'>{board.name}</h4>
          <MemberList memberList={board.recentMessages} memberCount={board.messageCount} />
          <TopReactionList topReactions={board.topReactions} />
        </div>
      </Link>
    </article>
  );
};

export default BoardCard;
