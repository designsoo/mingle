import { RECIPIENTS } from './recipients';

export const getBoard = async (recipientId: number) => {
  const response = await RECIPIENTS.getBoard(recipientId);
  return response.data;
};

export const getMessages = async (recipientId: number) => {
  const response = await RECIPIENTS.getMessages(recipientId);
  return response.data;
};
