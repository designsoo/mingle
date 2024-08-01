import { SVGS } from '@/constants';

const { delete: removeIcon } = SVGS;

interface DeleteCardButtonProps {
  onClick: () => void;
}

const DeleteCardButton = ({ onClick }: DeleteCardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flexbox-row-center base-transition size-9 rounded-b-md bg-neutral-950 hover:bg-red-500'
    >
      <img src={removeIcon.default.url} alt={removeIcon.default.url} />
    </button>
  );
};

export default DeleteCardButton;
