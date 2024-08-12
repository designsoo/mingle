import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MESSAGES } from '@/api/apiService';
import { QUERY_KEYS } from '@/api/queryKey';

export const useDeleteCard = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMessageMutation } = useMutation({
    mutationFn: MESSAGES.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getMessages(boardId) });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBoardInfo(boardId) });
    },
    onError: () => {
      alert('페이퍼 삭제에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { deleteMessageMutation };
};
