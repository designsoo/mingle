import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  CardSkeleton,
  EmptyCard,
  Input,
  ErrorMessage,
  PaperCard,
  PrimaryButton,
  CommonModal,
  ConfirmModal,
} from 'mingle-ui';
import { FieldError, FormProvider, useForm } from 'react-hook-form';

import { TRANSLATE_TO_EN, SVGS } from '@/constants';
import { splitByDelimiter } from '@/utils';

import useMultiState from '@/hooks/useMultiState';
import { useDeleteCard } from '@/pages/EditBoard/data-access/useDeleteCard';
import { passwordSchema } from '@/pages/EditBoard/schema/passwordSchema';
import { MessagesResults, PaperCardResults } from '@/types/recipients';

import DeleteCardButton from './DeleteCardButton';

const { delete: removeIcon } = SVGS;

interface CardListProps {
  isEdit: boolean;
  boardId: number;
  isMessagesLoading: boolean;
  filteredMessages: MessagesResults[];
}

const CardList = ({ isEdit, boardId, isMessagesLoading, filteredMessages }: CardListProps) => {
  const { multiState, toggleClick } = useMultiState(['confirmPasswordModal', 'confirmDeleteModal']);
  const { deleteMessageMutation } = useDeleteCard(boardId);

  const [cardId, setCardId] = useState(0);
  const [password, setPassword] = useState('');

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(passwordSchema(password)),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const isEmpty = filteredMessages?.length === 0;

  const handleToggleConfirmPasswordModal = () => toggleClick('confirmPasswordModal');
  const handleToggleConfirmDeletedModal = () => toggleClick('confirmDeleteModal');

  const onDeleteButtonClick = (id: number, password: string) => {
    setCardId(id);
    setPassword(password);
    if (password) {
      handleToggleConfirmPasswordModal();
      reset({ data: 'password' });
    } else {
      handleToggleConfirmDeletedModal();
    }
  };

  const handleDeleteCard = () => {
    deleteMessageMutation(cardId);
    handleToggleConfirmDeletedModal();
  };

  const onSubmit = () => {
    if (password) {
      deleteMessageMutation(cardId);
      handleToggleConfirmPasswordModal();
    } else if (!password) {
      deleteMessageMutation(cardId);
      handleToggleConfirmDeletedModal();
    }
  };

  return (
    <>
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
          filteredMessages?.map(
            ({ id, sender, relationship, content, profileImageURL, createdAt }: PaperCardResults) => {
              const { name, password } = splitByDelimiter(sender);

              return (
                <li key={`paper-card-${id}`} className='relative'>
                  {isEdit && (
                    <div className='absolute right-5 top-0 z-[5]'>
                      <DeleteCardButton onClick={() => onDeleteButtonClick(id, password)} />
                    </div>
                  )}
                  <PaperCard
                    fromName={name}
                    category={TRANSLATE_TO_EN[relationship]}
                    description={content}
                    backgroundImage={profileImageURL}
                    createdAt={createdAt}
                  />
                </li>
              );
            },
          )
        )}
      </ul>

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
          <PrimaryButton variant='destructive' onClick={handleDeleteCard}>
            Delete
          </PrimaryButton>
        </div>
      </ConfirmModal>
    </>
  );
};

export default CardList;
