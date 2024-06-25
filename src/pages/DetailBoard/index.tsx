import { useMemo, useState } from 'react';

import { Dropdown, IconButton, TabList, PrimaryButton } from 'mingle-ui';
import { useParams } from 'react-router-dom';

import { AUTHOR_LIST, SORT_OPTIONS, SVGS, TRANSLATE_TO_EN } from '@/constants';

import BoardCount from '@/components/pages/DetailBoard/BoardCount';
import CardList from '@/components/pages/DetailBoard/CardList';
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

  const filteredMessages = useMemo(() => {
    if (!messageData) return [];

    const filtered = messageData.filter((messageData: PaperCardResults) => {
      return selectedTab === 'all' || messageData.relationship === selectedTab;
    });

    const sorted = filtered.sort((a: MessagesResults, b: MessagesResults) => {
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
          <div className='m-auto flex max-w-[1120px] flex-col gap-2 px-5 lg:px-10'>
            <div className='flex items-center gap-1'>
              <h2 className='text-bold-24'>{boardData?.name}</h2>
              <IconButton iconUrl={setting.url} iconAlt={setting.alt} iconSize={20} onClick={() => {}} />
            </div>

            <div className='flexbox-column-start md:!flexbox-row-between gap-3'>
              <BoardCount paperCount={boardData?.messageCount} reactionCount={boardData?.reactionCount} />
              <EmojiList boardId={boardId} />
            </div>
          </div>

          <div className='mt-6 h-[52px] w-full border-y border-neutral-800 lg:px-10'>
            <div className='m-auto max-w-[1120px] sm-scroll-hidden'>
              <TabList tabList={AUTHOR_LIST} size='lg' onClick={setSelectedTab} />
            </div>
          </div>

          <section className='m-auto max-w-[1120px] px-5 lg:px-10'>
            <div className='flex items-center justify-between py-6'>
              <div className='flex items-center gap-2'>
                <span className='text-bold-18'>{TRANSLATE_TO_EN[selectedTab]}</span>
                <span className='mt-[2px] text-bold-13 text-yellow-300'>{filteredMessages?.length}</span>
              </div>

              <div className='relative flex gap-2'>
                <div className='absolute -left-[120px] z-10 max-w-[112px]'>
                  <Dropdown size='sm' selectList={SORT_OPTIONS} onClick={setSelectedSortOption} />
                </div>
                <IconButton iconUrl={kakao.url} iconAlt={kakao.alt} iconSize={20} variant='stroke' onClick={() => {}} />
              </div>
            </div>

            <CardList isMessagesLoading={isMessagesLoading} filteredMessages={filteredMessages} />
          </section>
          <div className='fixed bottom-5 left-0 right-0 m-auto max-w-[800px] px-5'>
            <PrimaryButton size='lg'>Add Paper</PrimaryButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailBoard;
