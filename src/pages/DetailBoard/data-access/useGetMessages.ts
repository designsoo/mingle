import { useInfiniteQuery } from '@tanstack/react-query';

import { getMessages } from '@/api/queryFunctions';

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
    getNextPageParam: (lastPage, allPages) => {
      const nexPage = allPages.flat().length;
      return lastPage.length < 6 ? undefined : nexPage;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page),
      pageParams: data.pageParams,
    }),
  });

  return { messageData, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage };
};
