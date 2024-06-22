export type EmojiResults = {
  id: number;
  emoji: string;
  count: number;
};

export type PostEmoji = {
  emoji: string;
  type: string;
};

export type PaperCardResults = {
  id: number;
  sender: string;
  relationship: string;
  content: string;
  profileImageURL: string;
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
