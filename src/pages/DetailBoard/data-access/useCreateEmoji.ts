import { useMutation, useQueryClient } from '@tanstack/react-query';

import { RECIPIENTS } from '@/api/apiService';

export const useCreateEmoji = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: postEmojiMutation } = useMutation({
    mutationFn: RECIPIENTS.createReaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emojis', boardId] });
    },
  });
  return { postEmojiMutation };
};
