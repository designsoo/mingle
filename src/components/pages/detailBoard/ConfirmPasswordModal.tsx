import { CommonModal, ErrorMessage, Input, PrimaryButton } from 'mingle-ui';
import { FieldError, FormProvider, UseFormReturn } from 'react-hook-form';

interface ConfirmPasswordModalProps {
  formMethods: UseFormReturn;
  isOpenPasswordModal: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ConfirmPasswordModal = ({ formMethods, isOpenPasswordModal, onClose, onSubmit }: ConfirmPasswordModalProps) => {
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <CommonModal openModal={isOpenPasswordModal} onClose={onClose} title='Confirm Password'>
      <div className='flex w-full flex-col items-end gap-6'>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col items-end gap-6 md:w-[400px]'>
            <div className='flex w-full flex-col gap-2'>
              <Input
                formMethod={formMethods}
                name='password'
                placeholder='● ● ● ●'
                type='password'
                maxLength={4}
                autoComplete='current-password'
              />
              {errors?.password && <ErrorMessage>{(errors.password as FieldError).message}</ErrorMessage>}
            </div>
            <div className='flex gap-3'>
              <PrimaryButton variant='stroke' onClick={onClose}>
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
  );
};

export default ConfirmPasswordModal;
