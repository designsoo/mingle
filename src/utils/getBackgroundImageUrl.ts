import { formatColorToUrl } from '@/constants/formatColor';

export const getBackgroundImageUrl = (backgroundColor: string, backgroundImageUrl: string) => {
  if (!backgroundImageUrl && backgroundColor in formatColorToUrl) {
    return formatColorToUrl[backgroundColor as keyof typeof formatColorToUrl];
  }

  return backgroundImageUrl;
};
