import { useMutation } from '@tanstack/react-query';
import { NavigateFunction } from 'react-router-dom';

import { RECIPIENTS } from '@/api/recipients';

export const useCreateBoard = (navigate: NavigateFunction) => {
  const { mutate: postFormMutation } = useMutation({
    mutationFn: RECIPIENTS.post,
    onSuccess: (response) => {
      const newBoardUrl = response.data.id;
      navigate(`/board/${newBoardUrl}`);
    },
    onError: () => {
      alert('대시보드 생성에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { postFormMutation };
};
