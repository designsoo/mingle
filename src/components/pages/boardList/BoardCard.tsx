import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { PNGS } from '@/constants';
import { getBackgroundImageUrl, splitByDelimiter } from '@/utils';

import MemberList from '@/components/pages/boardList/MemberList';
import TopReactionList from '@/components/pages/boardList/TopReactionList';
import { BoardResults } from '@/types/recipients';
const { list_card } = PNGS;

interface BoardCardProps {
  board: BoardResults;
  cardWidth?: string;
}

const BoardCard = ({ board, cardWidth = '100%' }: BoardCardProps) => {
  const { id, backgroundColor, backgroundImageURL, name: inputName, messageCount, topReactions } = board;
  const { name } = splitByDelimiter(inputName);
  const placeholderImage = list_card.default.url;
  const updatedBackgroundUrl = getBackgroundImageUrl(backgroundColor, backgroundImageURL);

  const [backgroundImage, setBackgroundImage] = useState(placeholderImage);

  useEffect(() => {
    const img = new Image();
    img.src = updatedBackgroundUrl;
    img.onload = () => setBackgroundImage(updatedBackgroundUrl);
  }, []);

  return (
    <article
      className='base-transition h-[320px] overflow-hidden rounded-2xl p-4 hover:-translate-y-3'
      style={{
        background: `url(${backgroundImage}) no-repeat center / cover`,
        width: `${cardWidth}`,
      }}
    >
      <Link to={`/board/${id}`} className='flex h-full w-full flex-col justify-end'>
        <div className='board-card-inner flex h-[136px] flex-col items-start justify-between p-3'>
          <h2 className='h-[26px] w-full text-bold-20'>{name}</h2>
          <MemberList memberList={board.recentMessages} memberCount={messageCount} />
          <TopReactionList topReactions={topReactions} />
        </div>
      </Link>
    </article>
  );
};

export default BoardCard;
