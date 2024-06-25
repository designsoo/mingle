import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { BadgeEmoji, IconButton } from 'mingle-ui';

import { SVGS } from '@/constants';
import { getReactionsByDeviceType } from '@/utils';

import { useDeviceType } from '@/hooks/useDeviceType';
import useTogglePopup from '@/hooks/useTogglePopup';
import { useCreateEmoji } from '@/pages/DetailBoard/service/useCreateEmoji';
import { useGetEmoji } from '@/pages/DetailBoard/service/useGetEmoji';
import { EmojiResults, PostEmoji } from '@/types/recipients';

const { emoji } = SVGS;

type EmojiListProps = {
  boardId: number;
};

const EmojiList = ({ boardId }: EmojiListProps) => {
  const { isOpen, popupRef, buttonRef, togglePopup, setIsOpen } = useTogglePopup();
  const { EmojiData } = useGetEmoji(boardId);
  const { postEmojiMutation } = useCreateEmoji(boardId);

  const deviceType = useDeviceType();
  const emojiList = getReactionsByDeviceType(deviceType, EmojiData);

  const handleEmojiClick = (event: EmojiClickData) => {
    const emojiForm: PostEmoji = {
      emoji: event.emoji,
      type: 'increase',
    };

    setIsOpen(false);

    postEmojiMutation({ boardId, emojiForm });
  };

  return (
    <div className='flex w-full flex-row-reverse items-center gap-2 md:flex-row md:justify-end'>
      <ul className='flex gap-2 sm-scroll-hidden'>
        {emojiList?.map(({ id, emoji, count }: EmojiResults) => (
          <li key={`emoji-badge-${id}`}>
            <BadgeEmoji emoji={emoji} count={count} />
          </li>
        ))}
      </ul>

      <div className='emoji relative'>
        <IconButton
          ref={buttonRef}
          iconUrl={emoji.url}
          iconAlt={emoji.alt}
          iconSize={20}
          variant='stroke'
          onClick={togglePopup}
        />
        {isOpen && (
          <div ref={popupRef} className='absolute right-0 top-11 z-20'>
            <EmojiPicker
              theme={Theme.DARK}
              emojiStyle={EmojiStyle.APPLE}
              onEmojiClick={handleEmojiClick}
              previewConfig={{
                showPreview: true,
                defaultCaption: 'Mingle | Add your reaction!',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiList;
