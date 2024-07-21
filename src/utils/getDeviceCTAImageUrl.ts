import { PNGS } from '@/constants';

import { DeviceType } from '@/types/deviceType';

const { cta } = PNGS;

type SelectedDeviceType = DeviceType.sm | DeviceType.md | DeviceType.lg | DeviceType.xl;

export const getDeviceCTAImageUrl = (deviceType: SelectedDeviceType) => {
  if (deviceType === 'Mobile') {
    return cta.mobile.url;
  }
  if (deviceType === 'Tablet') {
    return cta.tablet.url;
  }
  return cta.pc.url;
};
