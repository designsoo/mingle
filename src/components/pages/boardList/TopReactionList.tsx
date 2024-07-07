import { BadgeEmoji } from 'mingle-ui';

import { EmojiResults } from '@/types/recipients';

import EmptyEmoji from './EmptyEmoji';

interface TopReactionListProps {
  topReactions: EmojiResults[];
}

const TopReactionList = ({ topReactions }: TopReactionListProps) => {
  const isReactionEmpty = topReactions.length === 0;
  return (
    <ul className='flex w-full gap-2'>
      {topReactions.map(({ id, emoji, count }: EmojiResults) => (
        <li key={`emoji-badge-${id}`}>
          <BadgeEmoji emoji={emoji} count={count} />
        </li>
      ))}
      {isReactionEmpty && <EmptyEmoji />}
    </ul>
  );
};

export default TopReactionList;
