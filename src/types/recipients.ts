export type EmojiResults = {
  id: number;
  emoji: string;
  count: number;
};

export type PostEmoji = {
  emoji: string;
  type: string;
};

export type CardResults = {
  id: number;
  sender: string;
  relationship: string;
  content: string;
  profileImageURL: string;
  createdAt: string;
};

export type MessagesResults = {
  content: string;
  createdAt: string;
  font: string;
  id: number;
  profileImageURL: string;
  recipientId: number;
  relationship: string;
  sender: string;
};

export type BoardResults = {
  backgroundColor: string;
  backgroundImageURL: string;
  createdAt: string;
  id: number;
  messageCount: number;
  name: string;
  reactionCount: number;
  recentMessages: MessagesResults[];
  topReactions: EmojiResults[];
};

export type BoardListParams = {
  sort?: string;
  limit?: number;
};
