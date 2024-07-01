import { RECIPIENTS } from './recipients';

export const getBoard = async (boardId: number) => {
  const response = await RECIPIENTS.getBoard(boardId);
  return response.data;
};

export const getMessages = async ({ boardId, offset }: { boardId: number; offset: number }) => {
  const response = await RECIPIENTS.getMessages({ boardId, offset });
  return response.data.results;
};

export const getReactions = async (boardId: number) => {
  const response = await RECIPIENTS.getReaction(boardId);
  return response.data.results;
};
