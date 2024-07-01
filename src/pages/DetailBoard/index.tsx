import { useMemo, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dropdown,
  IconButton,
  TabList,
  PrimaryButton,
  ConfirmModal,
  CommonModal,
  ErrorMessage,
  Input,
} from 'mingle-ui';
import { FieldError, FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { AUTHOR_LIST, SORT_OPTIONS, SVGS, TRANSLATE_TO_EN } from '@/constants';
import { splitByDelimiter } from '@/utils';

import BoardCount from '@/components/pages/detailBoard/BoardCount';
import CardList from '@/components/pages/detailBoard/CardList';
import EmojiList from '@/components/pages/detailBoard/EmojiList';
import Header from '@/components/ui/Header';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import useMultiState from '@/hooks/useMultiState';
import { useGetBoardData } from '@/pages/DetailBoard/data-access/useGetBoardData';
import { useGetMessages } from '@/pages/DetailBoard/data-access/useGetMessages';
import { useDeleteBoard } from '@/pages/EditBoard/data-access/useDeleteBoard';
import { passwordSchema } from '@/pages/EditBoard/schema/passwordSchema';
import { MessagesResults, PaperCardResults } from '@/types/recipients';

const { setting, kakao, delete: removeIcon } = SVGS;

interface DetailBoardProps {
  isEdit?: boolean;
}

const DetailBoard = ({ isEdit = false }: DetailBoardProps) => {
  const params = useParams();
  const boardId = Number(params.id);
  const navigate = useNavigate();
  const dropdownPosition = isEdit ? 'absolute-y-center right-0 z-10' : 'absolute right-[44px] z-10 max-w-[112px]';

  const { boardData } = useGetBoardData(boardId);
  const { messageData, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMessages(boardId);
  const { setTrigger } = useIntersectionObserver({ hasNextPage, fetchNextPage });
  const { isDeleteLoading, deleteBoardMutation } = useDeleteBoard();
  const { name, password } = boardData?.name ? splitByDelimiter(boardData.name) : { name: '', password: '' };
  const { multiState, toggleClick } = useMultiState(['confirmPasswordModal', 'confirmDeleteModal']);

  const [selectedTab, setSelectedTab] = useState(AUTHOR_LIST[0].id);
  const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS[0].id);

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(passwordSchema(password)),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const messages = useMemo(() => {
    if (!messageData) return [];
    return messageData.pages;
  }, [messageData]);

  const filteredMessages = useMemo(() => {
    if (!messages) return [];

    const filtered = messages.filter((messageData: PaperCardResults) => {
      return selectedTab === 'all' || messageData.relationship === selectedTab;
    });

    const sorted = filtered.sort((a: MessagesResults, b: MessagesResults) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return selectedSortOption === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return sorted;
  }, [messages, selectedTab, selectedSortOption]);

  const handleToggleConfirmPasswordModal = () => toggleClick('confirmPasswordModal');
  const handleToggleConfirmDeletedModal = () => toggleClick('confirmDeleteModal');
  const navigateToAddCardPage = () => navigate(`/create/${boardId}/card`);
  const navigateToEditPage = () => navigate(`/board/${boardId}/edit`);
  const navigateToDetailPage = () => navigate(`/board/${boardId}`);

  const DeleteButtonClick = () => {
    if (password) {
      handleToggleConfirmPasswordModal();
      reset({ data: 'password' });
    } else {
      handleToggleConfirmDeletedModal();
    }
  };

  const handleDeleteBoard = () => {
    deleteBoardMutation(boardId);
    handleToggleConfirmDeletedModal();
  };

  const onSubmit = () => {
    if (password) {
      deleteBoardMutation(boardId);
      handleToggleConfirmPasswordModal();
    } else if (!password) {
      deleteBoardMutation(boardId);
      handleToggleConfirmDeletedModal();
    }
  };

  return (
    <div>
      <Header />
      <main className='pb-[60px] pt-[100px]'>
        <div>
          <div className='m-auto flex max-w-[1120px] flex-col gap-2 px-5 lg:px-10 xl:px-0'>
            <div className='flex items-center gap-1'>
              <h2 className='text-bold-24'>{name}</h2>
              {isEdit ? (
                <IconButton
                  iconUrl={setting.active.url}
                  iconAlt={setting.active.alt}
                  iconSize={20}
                  onClick={navigateToDetailPage}
                />
              ) : (
                <IconButton
                  iconUrl={setting.default.url}
                  iconAlt={setting.default.alt}
                  iconSize={20}
                  onClick={navigateToEditPage}
                />
              )}
            </div>

            <div
              className={`${isEdit && '!flexbox-column-center h-9'} flexbox-column-start md:!flexbox-row-between gap-3 md:h-9`}
            >
              <BoardCount paperCount={boardData?.messageCount} reactionCount={boardData?.reactionCount} />
              {!isEdit && <EmojiList boardId={boardId} />}
            </div>
          </div>

          <div className='mt-6 h-[52px] w-full border-y border-neutral-800'>
            <div className='m-auto max-w-[1120px] sm-scroll-hidden lg:px-10 xl:px-0'>
              <TabList tabList={AUTHOR_LIST} size='lg' onClick={setSelectedTab} />
            </div>
          </div>

          <section className='m-auto max-w-[1120px] px-5 lg:px-10 xl:px-0'>
            <div className='relative flex items-center justify-between py-6'>
              <div className='flex h-9 items-center gap-2'>
                <span className='text-bold-18'>{TRANSLATE_TO_EN[selectedTab]}</span>
                <span className='mt-[2px] text-bold-13 text-yellow-300'>{filteredMessages?.length}</span>
              </div>

              <div className='flex gap-2'>
                <div className={dropdownPosition}>
                  <Dropdown size='sm' selectList={SORT_OPTIONS} onClick={setSelectedSortOption} />
                </div>
                {!isEdit && (
                  <IconButton
                    iconUrl={kakao.url}
                    iconAlt={kakao.alt}
                    iconSize={20}
                    variant='stroke'
                    onClick={() => {}}
                  />
                )}
              </div>
            </div>

            <CardList isEdit={isEdit} boardId={boardId} isMessagesLoading={false} filteredMessages={filteredMessages} />

            {isFetchingNextPage && (
              <div className='my-4 flex justify-center'>
                <span>Loading...</span>
              </div>
            )}

            <div ref={setTrigger} className='size-10 bg-transparent'></div>
          </section>

          <div className='fixed bottom-5 left-0 right-0 z-20 m-auto max-w-[800px] px-5'>
            {isEdit ? (
              <PrimaryButton size='lg' variant='destructive' disabled={isDeleteLoading} onClick={DeleteButtonClick}>
                Delete Board
              </PrimaryButton>
            ) : (
              <PrimaryButton size='lg' onClick={navigateToAddCardPage}>
                Add Card
              </PrimaryButton>
            )}
          </div>
        </div>
      </main>

      <CommonModal
        openModal={multiState.confirmPasswordModal}
        onClose={handleToggleConfirmPasswordModal}
        title='Confirm Password'
      >
        <div className='flex w-full flex-col items-end gap-6'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col items-end gap-6 md:w-[400px]'>
              <div className='flex w-full flex-col gap-2'>
                <Input
                  formMethod={methods}
                  name='password'
                  placeholder='● ● ● ●'
                  type='password'
                  maxLength={4}
                  autoComplete='current-password'
                />
                {errors?.password && <ErrorMessage>{(errors.password as FieldError).message}</ErrorMessage>}
              </div>
              <div className='flex gap-3'>
                <PrimaryButton variant='stroke' onClick={handleToggleConfirmPasswordModal}>
                  Cancel
                </PrimaryButton>
                <PrimaryButton variant='destructive' type='submit'>
                  Delete
                </PrimaryButton>
              </div>
            </form>
          </FormProvider>
        </div>
      </CommonModal>

      <ConfirmModal
        openModal={multiState.confirmDeleteModal}
        onClose={handleToggleConfirmDeletedModal}
        iconUrl={removeIcon.active.url}
        iconAlt={removeIcon.active.alt}
        iconSize={58}
        title='Are you sure'
        desc='This action cannot be undone.'
      >
        <div className='flex gap-3'>
          <PrimaryButton variant='stroke' onClick={handleToggleConfirmDeletedModal}>
            Cancel
          </PrimaryButton>
          <PrimaryButton variant='destructive' onClick={handleDeleteBoard}>
            Delete
          </PrimaryButton>
        </div>
      </ConfirmModal>
    </div>
  );
};

export default DetailBoard;
