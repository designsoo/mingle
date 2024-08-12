import { useQuery } from '@tanstack/react-query';

import { getBoard } from '@/api/queryFunctions';
import { QUERY_KEYS } from '@/api/queryKey';

export const useGetBoardData = (boardId: number) => {
  const { data: boardData, isLoading: isBoardDataLoading } = useQuery({
    queryKey: QUERY_KEYS.getBoardInfo(boardId),
    queryFn: () => getBoard(boardId),
  });

  return { boardData, isBoardDataLoading };
};
