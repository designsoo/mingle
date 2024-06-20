export type EmojiProps = {
  id: number;
  emoji: string;
  count: number;
};

export type PaperCardProps = {
  id: number;
  sender: string;
  relationship: string;
  content: string;
  profileImageURL: string;
};

export type MessagesProps = {
  content: string;
  createdAt: string;
  font: string;
  id: number;
  profileImageURL: string;
  recipientId: number;
  relationship: string;
  sender: string;
};
