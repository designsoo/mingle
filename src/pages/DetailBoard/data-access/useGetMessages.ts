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
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return;
      const nextUrl = new URL(lastPage.next);
      const offset = nextUrl.searchParams.get('offset');
      return offset ? +offset : null;
    },
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.flatMap((page) => page.results),
    }),
  });

  return { messageData, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage };
};
