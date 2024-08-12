import { BoardListParams } from '@/types/recipients';

export const QUERY_KEYS = {
  getBoards: ({ limit, sort }: BoardListParams) => ['recipients', limit, sort],
  getBoardInfo: (boardId: number) => ['recipient', boardId],
  getEmojis: (boardId: number) => ['emojis', boardId],
  getMessages: (boardId: number) => ['messages', boardId],
};
