const CLOUDFLARE_URL = import.meta.env.VITE_CLOUDFLARE_URL;

const PREVIEW_PAPER_SIZE = 'width=600,height=800';
const ICON_SIZE_24 = 'width=24,height=24';

export const PAPER_BACKGROUND_COLORS = [
  { id: 'bg-blue', value: `${CLOUDFLARE_URL}/8a482541-9f00-429f-cff7-2b90fc4d0400/${PREVIEW_PAPER_SIZE}` },
  { id: 'bg-purple', value: `${CLOUDFLARE_URL}/c69924f8-98e5-45bc-ccae-065cce04a500/${PREVIEW_PAPER_SIZE}` },
  { id: 'bg-pink', value: `${CLOUDFLARE_URL}/9faebeef-e89a-40ec-5a23-703d32e95000/${PREVIEW_PAPER_SIZE}` },
  { id: 'bg-orange', value: `${CLOUDFLARE_URL}/dc6b7cff-ba50-4674-dff4-e092f38a6700/${PREVIEW_PAPER_SIZE}` },
];

export const PAPER_BACKGROUND_IMAGES = [
  { id: 'pika', value: `${CLOUDFLARE_URL}/278f93ac-551e-4d82-6dd3-5b67513c2e00/${PREVIEW_PAPER_SIZE}` },
  { id: 'mario', value: `${CLOUDFLARE_URL}/f8ae48ac-8723-47a6-bd1e-63e4aa0ecb00/${PREVIEW_PAPER_SIZE}` },
  { id: 'kirby', value: `${CLOUDFLARE_URL}/3b972292-c529-4cf5-ab05-7e228ec32a00/${PREVIEW_PAPER_SIZE}` },
];

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
};
