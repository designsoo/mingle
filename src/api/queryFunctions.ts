import { MESSAGES, RECIPIENTS } from './recipients';

export const getBoardList = async ({
  queryKey,
}: {
  queryKey: [string, (string | undefined)?, (number | undefined)?];
}) => {
  const [, sort, limit] = queryKey;
  const response = await RECIPIENTS.getBoardList(sort, limit);
  return response.data.results;
};

export const getBoard = async (boardId: number) => {
  const response = await RECIPIENTS.getBoard(boardId);
  return response.data;
};

export const getMessages = async ({ boardId, offset }: { boardId: number; offset: number }) => {
  const response = await MESSAGES.get({ boardId, offset });
  return response.data.results;
};

export const getReactions = async (boardId: number) => {
  const response = await RECIPIENTS.getReaction(boardId);
  return response.data.results;
};
