import { useInfiniteQuery } from '@tanstack/react-query';

import { getMessages } from '@/api/queryFunctions';

const MESSAGES_PER_PAGE = 6;

export const useGetMessages = (boardId: number) => {
  const {
    data: messageData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['messages', boardId],
    queryFn: ({ pageParam }) => getMessages({ boardId, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nexPageParam = lastPageParam + MESSAGES_PER_PAGE;
      return lastPage.length < MESSAGES_PER_PAGE ? undefined : nexPageParam;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page),
      pageParams: data.pageParams,
    }),
  });

  return { messageData, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage };
};
