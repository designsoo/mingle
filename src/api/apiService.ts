import { RECIPIENTS_API, MESSAGE_API } from '@/constants';

import { BoardListParams, PostEmoji } from '@/types/recipients';

import instance from './axiosInstance';

export const RECIPIENTS = {
  getBoardList: ({ limit, offset, sort }: BoardListParams) =>
    instance.get(RECIPIENTS_API, { params: { limit, offset, sort } }),
  getBoard: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/`),
  post: (data: object) => instance.post(RECIPIENTS_API, data),
  deleteBoard: (recipientId: number) => instance.delete(`${RECIPIENTS_API}${recipientId}/`),
  createReaction: ({ boardId, emojiForm }: { boardId: number; emojiForm: PostEmoji }) =>
    instance.post(`${RECIPIENTS_API}${boardId}/reactions/`, emojiForm),
  getReaction: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/reactions/`),
};

export const MESSAGES = {
  get: ({ boardId, offset }: { boardId: number; offset: number }) =>
    instance.get(`${RECIPIENTS_API}${boardId}${MESSAGE_API}`, { params: { limit: 6, offset } }),
  delete: (messageId: number) => instance.delete(`${MESSAGE_API}${messageId}/`),
  create: ({ recipientId, cardForm }: { recipientId: number; cardForm: object }) =>
    instance.post(`${RECIPIENTS_API}${recipientId}/messages/`, cardForm),
};

export const REACTIONS = {
  get: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/reactions/`),
};
