import { useQuery } from '@tanstack/react-query';

import { getBoardList } from '@/api/queryFunctions';
import { QUERY_KEYS } from '@/api/queryKey';
import { BoardListParams } from '@/types/recipients';

export const useGetBoardList = ({ limit, sort }: BoardListParams) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.getBoards({ limit, sort }),
    queryFn: () => getBoardList({ limit, sort }),
    select: (data) => data.results,
  });

  return { data, isLoading };
};
