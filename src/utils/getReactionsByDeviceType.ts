import { DeviceType } from '@/types/deviceType';
import { EmojiResults } from '@/types/recipients';

const TOP_REACTIONS = 3;
const MAX_REACRIONS = 8;

export const getReactionsByDeviceType = (deviceType: DeviceType, reactionData: EmojiResults[]) => {
  const topRection = reactionData?.slice(0, TOP_REACTIONS);
  const maxReaction = reactionData?.slice(0, MAX_REACRIONS);
  return deviceType !== 'Mobile' ? topRection : maxReaction;
};
