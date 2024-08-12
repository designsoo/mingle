import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { RECIPIENTS } from '@/api/apiService';

export const useCreateBoard = () => {
  const navigate = useNavigate();

  const { mutate: postFormMutation, isPending: isCreateLoading } = useMutation({
    mutationFn: RECIPIENTS.post,
    onSuccess: (response) => {
      const boardId = response.data.id;
      navigate(`/board/${boardId}`);
    },
    onError: () => {
      alert('대시보드 생성에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { postFormMutation, isCreateLoading };
};
