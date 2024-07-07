import { IconButton } from 'mingle-ui';
import { useNavigate } from 'react-router-dom';

import { SVGS } from '@/constants';

const { setting } = SVGS;

interface BoardNameProps {
  isEdit: boolean;
  name: string | undefined;
  boardId: number;
}

const BoardName = ({ isEdit, name, boardId }: BoardNameProps) => {
  const navigate = useNavigate();

  const navigateToEditPage = () => navigate(`/board/${boardId}/edit`);
  const navigateToDetailPage = () => navigate(`/board/${boardId}`);

  return (
    <>
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
    </>
  );
};

export default BoardName;
