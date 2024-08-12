import { useQuery } from '@tanstack/react-query';

import { getReactions } from '@/api/queryFunctions';
import { QUERY_KEYS } from '@/api/queryKey';

export const useGetEmoji = (boardId: number) => {
  const { data: EmojiData } = useQuery({
    queryKey: QUERY_KEYS.getEmojis(boardId),
    queryFn: () => getReactions(boardId),
  });

  return { EmojiData };
};
