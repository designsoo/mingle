import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { EmptyCard, Card } from 'mingle-ui';
import { useForm } from 'react-hook-form';

import { TRANSLATE_TO_EN } from '@/constants';
import { splitByDelimiter } from '@/utils';

import CardListSkeleton from '@/components/pages/detailBoard/CardListSkeleton';
import ConfirmDeleteModal from '@/components/pages/detailBoard/ConfirmDeleteModal';
import DeleteCardButton from '@/components/pages/detailBoard/DeleteCardButton';
import useMultiState from '@/hooks/useMultiState';
import { useDeleteCard } from '@/pages/EditBoard/data-access/useDeleteCard';
import { passwordSchema } from '@/pages/EditBoard/schema/passwordSchema';
import { MessagesResults, CardResults } from '@/types/recipients';

import ConfirmPasswordModal from './ConfirmPasswordModal';

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

  const { reset } = methods;

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
          <CardListSkeleton />
        ) : (
          <>
            {isEmpty && <EmptyCard />}

            {filteredMessages?.map(({ id, sender, relationship, content, profileImageURL, createdAt }: CardResults) => {
              const { name, password } = splitByDelimiter(sender);

              return (
                <li key={`paper-card-${id}`} className='relative'>
                  {isEdit && (
                    <div className='absolute right-5 top-0 z-[5]'>
                      <DeleteCardButton onClick={() => onDeleteButtonClick(id, password)} />
                    </div>
                  )}
                  <Card
                    fromName={name}
                    category={TRANSLATE_TO_EN[relationship]}
                    description={content}
                    backgroundImage={profileImageURL}
                    createdAt={createdAt}
                  />
                </li>
              );
            })}
          </>
        )}
      </ul>

      <ConfirmPasswordModal
        formMethods={methods}
        isOpenPasswordModal={multiState.confirmPasswordModal}
        onClose={handleToggleConfirmPasswordModal}
        onSubmit={onSubmit}
      />

      <ConfirmDeleteModal
        isOpenDeleteModal={multiState.confirmDeleteModal}
        onClose={handleToggleConfirmDeletedModal}
        handleDeleteCard={handleDeleteCard}
      />
    </>
  );
};

export default CardList;
