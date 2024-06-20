import { useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { BadgeEmoji, Dropdown, IconButton, PaperCard, TabList, EmptyCard } from 'mingle-ui';
import { useParams } from 'react-router-dom';

import { AUTHOR_LIST, SORT_OPTIONS, SVGS, TRANSLATE_TO_EN } from '@/constants';

import { getBoard, getMessages } from '@/api/queryFunctions';
import Header from '@/components/ui/Header';
import { EmojiProps, MessagesProps, PaperCardProps } from '@/types/recipients';

const { setting, emoji, kakao } = SVGS;

const DetailBoard = () => {
  const params = useParams();
  const boardId = Number(params.id);

  const { data: boardData } = useQuery({
    queryKey: ['recipients', boardId],
    queryFn: () => getBoard(boardId),
  });

  const { data: messageData, isLoading: isMessagesLoading } = useQuery({
    queryKey: ['messages', boardId],
    queryFn: () => getMessages(boardId),
  });

  const messages = messageData?.results;

  const [selectedTab, setSelectedTab] = useState(AUTHOR_LIST[0].id);
  const [selectedOption, setSelectedOption] = useState(SORT_OPTIONS[0].id);

  const filterdMessages = useMemo(() => {
    const filtered = messages?.filter((message: PaperCardProps) => {
      return selectedTab === 'all' || message?.relationship === selectedTab;
    });

    const sorted = filtered?.sort((a: MessagesProps, b: MessagesProps) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return selectedOption === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return sorted;
  }, [messages, selectedTab, selectedOption]);

  return (
    <div>
      <Header />
      <main className='py-[100px]'>
        <div>
          <div className='m-auto flex max-w-[1120px] flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <h2 className='text-bold-24'>{boardData?.name}</h2>
              <IconButton iconUrl={setting.url} iconAlt={setting.alt} iconSize={20} onClick={() => {}} />
            </div>

            <div className='flex items-center justify-between'>
              <ul className='board-count flex gap-6'>
                <li className='flex items-center gap-2'>
                  <span className='text-base-14 text-neutral-500'>Paper</span>
                  <span className='text-bold-18'>{boardData?.messageCount}</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-base-14 text-neutral-500'>Members</span>
                  <span className='text-bold-18'>{boardData?.messageCount}</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-base-14 text-neutral-500'>Emotions</span>
                  <span className='text-bold-18'>{boardData?.reactionCount}</span>
                </li>
              </ul>
              <div className='emoji-list flex items-center gap-2'>
                <ul className='flex gap-2'>
                  {boardData?.topReactions?.map(({ id, emoji, count }: EmojiProps) => (
                    <li key={`emoji-badge-${id}`}>
                      <BadgeEmoji emoji={emoji} count={count} />
                    </li>
                  ))}
                </ul>
                <IconButton iconUrl={emoji.url} iconAlt={emoji.alt} iconSize={20} variant='stroke' onClick={() => {}} />
              </div>
            </div>
          </div>

          <div className='mt-6 h-[52px] w-full border-y border-neutral-800'>
            <div className='m-auto max-w-[1120px]'>
              <TabList tabList={AUTHOR_LIST} size='lg' onClick={setSelectedTab} />
            </div>
          </div>

          <section className='m-auto max-w-[1120px]'>
            <div className='flex items-center justify-between py-6'>
              <div className='flex items-center gap-1'>
                <span className='text-bold-18'>{TRANSLATE_TO_EN[selectedTab]}</span>
                <span className='text-bold-13 text-yellow-300'>{filterdMessages?.length}</span>
              </div>
              <div className='relative flex gap-2'>
                <div className='absolute -left-[120px] max-w-[112px]'>
                  <Dropdown size='sm' selectList={SORT_OPTIONS} onClick={setSelectedOption} />
                </div>
                <IconButton iconUrl={kakao.url} iconAlt={kakao.alt} iconSize={20} variant='stroke' onClick={() => {}} />
              </div>
            </div>
            <ul className='grid grid-cols-3 gap-5'>
              {isMessagesLoading
                ? Array.from({ length: 9 }).map((_, idx: number) => (
                    <li key={`empty-card-${idx}`}>
                      <EmptyCard />
                    </li>
                  ))
                : filterdMessages?.map(({ id, sender, relationship, content, profileImageURL }: PaperCardProps) => (
                    <li key={`paper-card-${id}`}>
                      <PaperCard
                        fromName={sender}
                        category={TRANSLATE_TO_EN[relationship]}
                        description={content}
                        backgroundImage={profileImageURL}
                      />
                    </li>
                  ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DetailBoard;
