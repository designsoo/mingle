import { useEffect, useState } from 'react';

import { BREAK_POINT } from '@/constants';

import { DeviceType } from '@/types/deviceType';

export const useDeviceType = (): DeviceType => {
  const detectDeviceType = (): DeviceType => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    if (windowWidth <= BREAK_POINT.mobile) {
      return DeviceType.sm;
    }

    if (windowWidth <= BREAK_POINT.tablet) {
      return DeviceType.md;
    }

    if (windowWidth <= BREAK_POINT.laptop) {
      return DeviceType.lg;
    }

    return DeviceType.xl;
  };

  const [currentDeviceType, setCurrentDeviceType] = useState<DeviceType>(DeviceType.xl);

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = detectDeviceType();
      setCurrentDeviceType(newDeviceType);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentDeviceType;
};
