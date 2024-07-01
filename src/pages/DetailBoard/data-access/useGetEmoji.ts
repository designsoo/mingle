import { useQuery } from '@tanstack/react-query';

import { getReactions } from '@/api/queryFunctions';

export const useGetEmoji = (boardId: number) => {
  const { data: EmojiData } = useQuery({
    queryKey: ['emojis', boardId],
    queryFn: () => getReactions(boardId),
  });

  return { EmojiData };
};
