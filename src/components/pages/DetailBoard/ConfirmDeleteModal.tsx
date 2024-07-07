import { ConfirmModal, PrimaryButton } from 'mingle-ui';

import { SVGS } from '@/constants';
const { delete: removeIcon } = SVGS;

interface ConfirmDeleteModalProps {
  isOpenDeleteModal: boolean;
  onClose: () => void;
  handleDeleteCard: () => void;
}

const ConfirmDeleteModal = ({ isOpenDeleteModal, onClose, handleDeleteCard }: ConfirmDeleteModalProps) => {
  return (
    <ConfirmModal
      openModal={isOpenDeleteModal}
      onClose={onClose}
      iconUrl={removeIcon.active.url}
      iconAlt={removeIcon.active.alt}
      iconSize={58}
      title='Are you sure'
      desc='This action cannot be undone.'
    >
      <div className='flex gap-3'>
        <PrimaryButton variant='stroke' onClick={onClose}>
          Cancel
        </PrimaryButton>
        <PrimaryButton variant='destructive' onClick={handleDeleteCard}>
          Delete
        </PrimaryButton>
      </div>
    </ConfirmModal>
  );
};

export default ConfirmDeleteModal;
