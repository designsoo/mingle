import { RECIPIENTS_API, MESSAGE_API } from '@/constants';

import { PostEmoji } from '@/types/recipients';

import instance from './axiosInstance';

export const RECIPIENTS = {
  getBoardList: () => instance.get(RECIPIENTS_API),
  getBoard: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/`),
  post: (data: object) => instance.post(RECIPIENTS_API, data),
  deleteBoard: (recipientId: number) => instance.delete(`${RECIPIENTS_API}${recipientId}/`),
  getMessages: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}${MESSAGE_API}`),
  createReaction: ({ boardId, emojiForm }: { boardId: number; emojiForm: PostEmoji }) =>
    instance.post(`${RECIPIENTS_API}${boardId}/reactions/`, emojiForm),
  getReaction: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/reactions/`),
};

export const MESSAGES = {
  get: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}${MESSAGE_API}`),
  delete: (messageId: number) => instance.delete(`${MESSAGE_API}${messageId}/`),
};

export const REACTIONS = {
  get: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/reactions/`),
};
