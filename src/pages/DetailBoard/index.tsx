import { useMemo, useState } from 'react';

import { Dropdown, IconButton, PaperCard, TabList, EmptyCard } from 'mingle-ui';
import { useParams } from 'react-router-dom';

import { AUTHOR_LIST, SORT_OPTIONS, SVGS, TRANSLATE_TO_EN } from '@/constants';

import BoardCount from '@/components/pages/DetailBoard/BoardCount';
import EmojiList from '@/components/pages/DetailBoard/EmojiList';
import Header from '@/components/ui/Header';
import { MessagesResults, PaperCardResults } from '@/types/recipients';

import { useGetBoardData } from './service/useGetBoardData';
import { useGetMessages } from './service/useGetMessages';

const { setting, kakao } = SVGS;

const DetailBoard = () => {
  const params = useParams();
  const boardId = Number(params.id);

  const { boardData } = useGetBoardData(boardId);
  const { messageData, isMessagesLoading } = useGetMessages(boardId);

  const [selectedTab, setSelectedTab] = useState(AUTHOR_LIST[0].id);
  const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS[0].id);

  const filterdMessages = useMemo(() => {
    const filtered = messageData?.filter((messageData: PaperCardResults) => {
      return selectedTab === 'all' || messageData?.relationship === selectedTab;
    });

    const sorted = filtered?.sort((a: MessagesResults, b: MessagesResults) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return selectedSortOption === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return sorted;
  }, [messageData, selectedTab, selectedSortOption]);

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
              <BoardCount paperCount={boardData?.messageCount} reactionCount={boardData?.reactionCount} />
              <EmojiList boardId={boardId} />
            </div>
          </div>

          <div className='mt-6 h-[52px] w-full border-y border-neutral-800'>
            <div className='m-auto max-w-[1120px]'>
              <TabList tabList={AUTHOR_LIST} size='lg' onClick={setSelectedTab} />
            </div>
          </div>

          <section className='m-auto max-w-[1120px]'>
            <div className='flex items-center justify-between py-6'>
              <div className='flex items-center gap-2'>
                <span className='text-bold-18'>{TRANSLATE_TO_EN[selectedTab]}</span>
                <span className='mt-[2px] text-bold-13 text-yellow-300'>{filterdMessages?.length}</span>
              </div>
              <div className='relative flex gap-2'>
                <div className='absolute -left-[120px] max-w-[112px]'>
                  <Dropdown size='sm' selectList={SORT_OPTIONS} onClick={setSelectedSortOption} />
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
                : filterdMessages?.map(({ id, sender, relationship, content, profileImageURL }: PaperCardResults) => (
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
