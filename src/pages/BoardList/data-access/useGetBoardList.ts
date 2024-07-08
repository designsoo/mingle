import { useQuery } from '@tanstack/react-query';

import { getBoardList } from '@/api/queryFunctions';
import { BoardListParams } from '@/types/recipients';

export const useGetBoardList = ({ sort, limit }: BoardListParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ['recipients', sort, limit],
    queryFn: () => getBoardList({ sort, limit }),
  });

  return { data, isLoading };
};
