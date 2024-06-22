import { useQuery } from '@tanstack/react-query';

import { getMessages } from '@/api/queryFunctions';

export const useGetMessages = (boardId: number) => {
  const { data: messageData, isLoading: isMessagesLoading } = useQuery({
    queryKey: ['messages', boardId],
    queryFn: () => getMessages(boardId),
  });

  return { messageData, isMessagesLoading };
};
