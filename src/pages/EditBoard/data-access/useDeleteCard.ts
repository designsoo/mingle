import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MESSAGES } from '@/api/apiService';

export const useDeleteCard = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMessageMutation } = useMutation({
    mutationFn: MESSAGES.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', boardId] });
      queryClient.invalidateQueries({ queryKey: ['recipient', boardId] });
    },
    onError: () => {
      alert('페이퍼 삭제에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return { deleteMessageMutation };
};
