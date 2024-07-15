export const CLOUDFLARE_URL = import.meta.env.VITE_CLOUDFLARE_URL;

export const PREVIEW_PAPER_SIZE = 'width=600,height=800';
export const ICON_SIZE_24 = 'width=24,height=24';
export const ICON_SIZE_20 = 'width=20,height=20';

import add from '@/assets/ic-add.svg';
import arrow_left from '@/assets/ic-arrow-left.svg';
import arrow_right from '@/assets/ic-arrow-right.svg';
import dashboard_active from '@/assets/ic-dashboard-active.svg';
import dashboard from '@/assets/ic-dashboard.svg';
import emoji from '@/assets/ic-emoji.svg';
import homed_active from '@/assets/ic-home-active.svg';
import home from '@/assets/ic-home.svg';
import kakao from '@/assets/ic-kakao.svg';
import members from '@/assets/ic-members.svg';
import search_active from '@/assets/ic-search-active.svg';
import search from '@/assets/ic-search.svg';
import setting_active from '@/assets/ic-setting-active.svg';
import setting from '@/assets/ic-setting.svg';
import logo from '@/assets/mg-logo-color.svg';
import footer_logo from '@/assets/mg-logo-gray.svg';

export const PAPER_BACKGROUND_COLORS = [
  {
    id: 'blue',
    type: 'backgroundColor',
    value: `${CLOUDFLARE_URL}/8a482541-9f00-429f-cff7-2b90fc4d0400/${PREVIEW_PAPER_SIZE}`,
  },
  {
    id: 'purple',
    type: 'backgroundColor',
    value: `${CLOUDFLARE_URL}/c69924f8-98e5-45bc-ccae-065cce04a500/${PREVIEW_PAPER_SIZE}`,
  },
  {
    id: 'green',
    type: 'backgroundColor',
    value: `${CLOUDFLARE_URL}/9faebeef-e89a-40ec-5a23-703d32e95000/${PREVIEW_PAPER_SIZE}`,
  },
  {
    id: 'beige',
    type: 'backgroundColor',
    value: `${CLOUDFLARE_URL}/dc6b7cff-ba50-4674-dff4-e092f38a6700/${PREVIEW_PAPER_SIZE}`,
  },
];

export const PAPER_BACKGROUND_IMAGES = [
  {
    id: 'pika',
    type: 'backgroundImageURL',
    value: `${CLOUDFLARE_URL}/650bcaca-3f77-4ebb-5907-7e9e2436af00/${PREVIEW_PAPER_SIZE}`,
  },
  {
    id: 'mario',
    type: 'backgroundImageURL',
    value: `${CLOUDFLARE_URL}/f8ae48ac-8723-47a6-bd1e-63e4aa0ecb00/${PREVIEW_PAPER_SIZE}`,
  },
  {
    id: 'kirby',
    type: 'backgroundImageURL',
    value: `${CLOUDFLARE_URL}/3b972292-c529-4cf5-ab05-7e228ec32a00/${PREVIEW_PAPER_SIZE}`,
  },
];

export const PNGS = {
  card: {
    url: `${CLOUDFLARE_URL}/e25990d4-511c-4c38-91c6-eeeab7f55700/${PREVIEW_PAPER_SIZE}`,
    alt: 'card background image',
  },
  deviceMockup: {
    url: `${CLOUDFLARE_URL}/4dd164fa-a16c-47be-0d69-68871a286b00/width=1380,height=864`,
    alt: 'mingle ipad, iphone image',
  },
  banner_emoji: {
    url: `${CLOUDFLARE_URL}/2fc90bf1-521f-4b3f-2c17-e5ddd6ae3000/width=840,height=900`,
    alt: 'emoji image',
  },
  banner_celebrate: {
    url: `${CLOUDFLARE_URL}/5f0d57cb-c603-4007-3069-bb957def0900/width=820,height=760`,
    alt: 'celebrate image',
  },
  cta: {
    pc: {
      url: `${CLOUDFLARE_URL}/f2bf7403-df6a-4cde-c272-a0fad930fd00/width=3840,height=2160`,
      alt: 'mingle banner image',
    },
    tablet: {
      url: `${CLOUDFLARE_URL}/dd17e7d1-1a6c-4e96-dc2e-1fe36f8c0000/width=1640,height=1180`,
      alt: 'mingle banner image',
    },
    mobile: {
      url: `${CLOUDFLARE_URL}/4cf2827b-2085-4c3b-5d03-a921e8f0b500/width=1534,height=1480`,
      alt: 'mingle banner image',
    },
  },
};

export const SVGS = {
  logo: {
    url: logo,
    alt: 'mingle logo',
  },
  footer_logo: {
    url: footer_logo,
    alt: 'mingle logo',
  },
  add: {
    url: add,
    alt: 'add icon',
  },
  dashboard: {
    default: {
      url: dashboard,
      alt: 'dashboard add icon',
    },
    active: {
      url: dashboard_active,
      alt: 'dashboard add icon',
    },
  },
  search: {
    default: {
      url: search,
      alt: 'search icon',
    },
    active: {
      url: search_active,
      alt: 'search icon',
    },
  },
  home: {
    default: {
      url: home,
      alt: 'home icon',
    },
    active: {
      url: homed_active,
      alt: 'home icon',
    },
  },
  setting: {
    default: {
      url: setting,
      alt: 'setting icon',
    },
    active: {
      url: setting_active,
      alt: 'setting icon',
    },
  },
  emoji: {
    url: emoji,
    alt: 'emoji add icon',
  },
  kakao: {
    url: kakao,
    alt: 'kakao share icon',
  },
  delete: {
    default: {
      url: `${CLOUDFLARE_URL}/a4a72529-c105-4ac2-03d4-c4527a707700/${ICON_SIZE_20}`,
      alt: 'delete icon',
    },
    active: {
      url: `${CLOUDFLARE_URL}/59d76585-93c4-476e-ffbf-ecaadd5ddd00/${ICON_SIZE_20}`,
      alt: 'delete icon',
    },
  },
  members: {
    url: members,
    alt: 'members icon',
  },
  arrow: {
    left: {
      url: arrow_left,
      alt: 'arrow left icon',
    },
    right: {
      url: arrow_right,
      alt: 'arrow right icon',
    },
  },
};
