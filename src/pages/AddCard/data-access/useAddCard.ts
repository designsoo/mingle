import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { MESSAGES } from '@/api/apiService';

export const useAddCard = (boardId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postCardMutation, isPending: isPostCardLoading } = useMutation({
    mutationFn: MESSAGES.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipient', boardId] });
      queryClient.invalidateQueries({ queryKey: ['messages', boardId] });
      navigate(`/board/${boardId}`);
    },
    onError: () => {
      alert('카드 생성에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { postCardMutation, isPostCardLoading };
};
