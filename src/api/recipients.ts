import { RECIPIENTS_API } from '@/constants';

import instance from './axiosInstance';

export const RECIPIENTS = {
  getBoardList: () => instance.get(RECIPIENTS_API),
  getBoard: (recipientId: number) => instance.get(`${RECIPIENTS_API}${recipientId}/`),
  post: (data: object) => instance.post(RECIPIENTS_API, data),
  delete: (recipientId: number) => instance.delete(`${RECIPIENTS_API}${recipientId}/`),
};
