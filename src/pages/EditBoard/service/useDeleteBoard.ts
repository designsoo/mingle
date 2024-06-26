import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { RECIPIENTS } from '@/api/recipients';

interface DeleteBoardResponse {
  message: string;
  isPending: boolean;
}

export const useDeleteBoard = () => {
  const navigate = useNavigate();

  const { isPending, mutate: deleteBoardMutation } = useMutation<AxiosResponse<DeleteBoardResponse>, Error, number>({
    mutationFn: RECIPIENTS.deleteBoard,
    onSuccess: () => {
      navigate('/list');
    },
    onError: () => {
      alert('대시보드 삭제에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { isPending, deleteBoardMutation };
};
