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
      const nextPageParam = lastPageParam + MESSAGES_PER_PAGE;
      return lastPage.length < MESSAGES_PER_PAGE ? undefined : nextPageParam;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page),
      pageParams: data.pageParams,
    }),
  });

  return { messageData, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage };
};
