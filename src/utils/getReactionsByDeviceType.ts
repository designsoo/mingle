import { DeviceType } from '@/types/deviceType';
import { EmojiResults } from '@/types/recipients';

export const getReactionsByDeviceType = (deviceType: DeviceType, reactionData: EmojiResults[]) => {
  const topRection = reactionData?.slice(0, 3);
  const maxReaction = reactionData?.slice(0, 8);
  return deviceType !== 'Mobile' ? topRection : maxReaction;
};
