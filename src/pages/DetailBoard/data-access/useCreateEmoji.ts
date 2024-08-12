import { useMutation, useQueryClient } from '@tanstack/react-query';

import { RECIPIENTS } from '@/api/apiService';
import { QUERY_KEYS } from '@/api/queryKey';

export const useCreateEmoji = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: postEmojiMutation } = useMutation({
    mutationFn: RECIPIENTS.createReaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getEmojis(boardId) });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBoardInfo(boardId) });
    },
  });
  return { postEmojiMutation };
};
