import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { getBoardList } from '@/api/queryFunctions';
import { BoardResults } from '@/types/recipients';

export const useFetchBoardData = (boardId: number) => {
  const queryClient = useQueryClient();

  const [boardData, setBoardData] = useState<BoardResults | null>(null);
  const [isBoardDataLoading, setIsBoardDataLoading] = useState(false);

  const getPrefetchData = async () => {
    setIsBoardDataLoading(true);
    let cachedBoardList = queryClient.getQueryData(['recipients', undefined, 99]);

    if (!cachedBoardList) {
      // 데이터가 캐시에 없는 경우 prefetchQuery를 사용하여 데이터를 미리 가져옴
      await queryClient.prefetchQuery({
        queryKey: ['recipients', undefined, 99],
        queryFn: () => getBoardList({ limit: 99 }),
      });
      cachedBoardList = queryClient.getQueryData(['recipients', undefined, 99]);
    }

    if (Array.isArray(cachedBoardList)) {
      const filteredBoardDataArray = cachedBoardList.filter((ele) => ele.id === boardId);
      const filteredData = filteredBoardDataArray.length > 0 ? filteredBoardDataArray[0] : null;
      setBoardData(filteredData);
    }
    setIsBoardDataLoading(false);
  };

  useEffect(() => {
    getPrefetchData();
  }, [queryClient, boardId]);

  return { boardData, isBoardDataLoading };
};
