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
  banner_device_mockup: {
    webp: {
      url: `${CLOUDFLARE_URL}/706ffde8-dd86-42c2-cb35-d0f15022a600/width=1380,height=864`,
      alt: 'mingle ipad, iphone image',
    },
    png: {
      url: `${CLOUDFLARE_URL}/1a136e6e-3596-470f-a99e-d3b2ec79f200/width=1380,height=864`,
      alt: 'mingle ipad, iphone image',
    },
  },
  banner_emoji: {
    webp: {
      url: `${CLOUDFLARE_URL}/796dd5c4-7bdc-4221-d0f6-ce14b94e0300/width=840,height=900`,
      alt: 'emoji image',
    },
    png: {
      url: `${CLOUDFLARE_URL}/b7f888ff-ce29-4095-e1c8-f9477ac02300/width=840,height=900`,
      alt: 'emoji image',
    },
  },
  banner_celebrate: {
    webp: {
      url: `${CLOUDFLARE_URL}/6ccc8fbd-351d-4aeb-5085-f639aacfd400/width=820,height=760`,
      alt: 'celebrate image',
    },
    png: {
      url: `${CLOUDFLARE_URL}/7532aca3-3b17-4955-3df0-6decb8436700/width=820,height=760`,
      alt: 'celebrate image',
    },
  },
  cta: {
    pc: {
      url: `${CLOUDFLARE_URL}/5a1468cd-8a6a-424f-9bf5-ef7896767500/width=3840,height=2160`,
      alt: 'mingle banner image',
    },
    tablet: {
      url: `${CLOUDFLARE_URL}/fc5fddd3-1e01-481c-1872-87bd8360b200/width=1640,height=1180`,
      alt: 'mingle banner image',
    },
    mobile: {
      url: `${CLOUDFLARE_URL}/3f4baa0a-9f59-4ef1-d585-36f93e707300/width=1534,height=1480`,
      alt: 'mingle banner image',
    },
  },
  list_card: {
    default: {
      url: `${CLOUDFLARE_URL}/29f16723-39eb-43e4-5fad-837efaebc800/${PREVIEW_PAPER_SIZE}`,
      alt: 'card background',
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
