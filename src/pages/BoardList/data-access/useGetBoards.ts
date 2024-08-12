import { useInfiniteQuery } from '@tanstack/react-query';

import { getBoardList } from '@/api/queryFunctions';
import { BoardListParams } from '@/types/recipients';

export const useGetBoards = ({ limit, sort }: BoardListParams) => {
  const {
    data: latestBoardData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['recipient', limit, sort],
    queryFn: ({ pageParam }) => getBoardList({ limit, offset: pageParam, sort }),
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

  return { latestBoardData, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage };
};
