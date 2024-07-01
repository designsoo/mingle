export const CLOUDFLARE_URL = import.meta.env.VITE_CLOUDFLARE_URL;

export const PREVIEW_PAPER_SIZE = 'width=600,height=800';
export const ICON_SIZE_24 = 'width=24,height=24';
export const ICON_SIZE_20 = 'width=20,height=20';

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
};

export const SVGS = {
  logo: {
    url: `${CLOUDFLARE_URL}/b571045b-4bb3-4222-36d5-8557bcf7f300/width=72,height=24`,
    alt: 'mingle logo',
  },
  add: {
    url: `${CLOUDFLARE_URL}/b73456b8-a828-42f6-1b78-6b2ccc7eea00/${ICON_SIZE_24}`,
    alt: 'add icon',
  },
  dashboard: {
    default: {
      url: `${CLOUDFLARE_URL}/b210ca4d-df7c-4281-b47a-6ae943db9200/${ICON_SIZE_24}`,
      alt: 'dashboard add icon',
    },
    active: {
      url: `${CLOUDFLARE_URL}/dba1d6ae-0fd1-4171-6eb5-2727e1b8c500/${ICON_SIZE_24}`,
      alt: 'dashboard add icon',
    },
  },
  search: {
    default: {
      url: `${CLOUDFLARE_URL}/8abb0829-1e26-45fb-545f-1ec69abca900/${ICON_SIZE_24}`,
      alt: 'search icon',
    },
    active: {
      url: `${CLOUDFLARE_URL}/c7de8bf3-eb23-4874-c2b7-45e9c5a64600/${ICON_SIZE_24}`,
      alt: 'search icon',
    },
  },
  home: {
    default: {
      url: `${CLOUDFLARE_URL}/6d51d75b-fa63-497c-bc51-7b8b12a1a200/${ICON_SIZE_24}`,
      alt: 'home icon',
    },
    active: {
      url: `${CLOUDFLARE_URL}/c872fb60-96e5-4780-0c6f-fd20c3714800/${ICON_SIZE_24}`,
      alt: 'home icon',
    },
  },
  setting: {
    default: {
      url: `${CLOUDFLARE_URL}/68d2441c-849b-46de-e10e-bc2639529d00/${ICON_SIZE_24}`,
      alt: 'setting icon',
    },
    active: {
      url: `${CLOUDFLARE_URL}/62035cbb-82db-4823-9ede-78b37ac9fe00/${ICON_SIZE_24}`,
      alt: 'setting icon',
    },
  },
  emoji: {
    url: `${CLOUDFLARE_URL}/97270bfb-6b8d-47e8-1287-cb467772ce00/${ICON_SIZE_24}`,
    alt: 'emoji add icon',
  },
  kakao: {
    url: `${CLOUDFLARE_URL}/39031bf6-aed5-4c8b-3152-10b289253000/${ICON_SIZE_24}`,
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
};
