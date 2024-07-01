import { useQuery } from '@tanstack/react-query';

import { getBoard } from '@/api/queryFunctions';

export const useGetBoardData = (boardId: number) => {
  const { data: boardData } = useQuery({
    queryKey: ['recipient', boardId],
    queryFn: () => getBoard(boardId),
  });

  return { boardData };
};
