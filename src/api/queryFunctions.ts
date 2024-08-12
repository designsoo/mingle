import { BoardListParams } from '@/types/recipients';

import { MESSAGES, RECIPIENTS } from './apiService';

export const getBoardList = async ({ limit, offset, sort }: BoardListParams) => {
  const response = await RECIPIENTS.getBoardList({ limit, offset, sort });
  return response.data;
};

export const getBoard = async (boardId: number) => {
  const response = await RECIPIENTS.getBoard(boardId);
  return response.data;
};

export const getMessages = async ({ boardId, offset }: { boardId: number; offset: number }) => {
  const response = await MESSAGES.get({ boardId, offset });
  return response.data;
};

export const getReactions = async (boardId: number) => {
  const response = await RECIPIENTS.getReaction(boardId);
  return response.data.results;
};
