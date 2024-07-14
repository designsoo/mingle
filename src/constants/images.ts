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
  deviceMockup: {
    url: `${CLOUDFLARE_URL}/4dd164fa-a16c-47be-0d69-68871a286b00/${PREVIEW_PAPER_SIZE}`,
    alt: 'mingle ipad, iphone image',
  },
  banner_emoji: {
    url: `${CLOUDFLARE_URL}/2fc90bf1-521f-4b3f-2c17-e5ddd6ae3000/${PREVIEW_PAPER_SIZE}`,
    alt: 'emoji image',
  },
  banner_celebrate: {
    url: `${CLOUDFLARE_URL}/5f0d57cb-c603-4007-3069-bb957def0900/${PREVIEW_PAPER_SIZE}`,
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
    url: `${CLOUDFLARE_URL}/64c2ebd4-300b-405f-1de0-664672b8d100/width=124,height=36`,
    alt: 'mingle logo',
  },
  footer_logo: {
    url: `${CLOUDFLARE_URL}/c4f2aa24-49ef-4943-43a1-f27e8e332400/width=124,height=36`,
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
  members: {
    url: `${CLOUDFLARE_URL}/979d6cac-f641-43ab-5c99-922d45373e00/${ICON_SIZE_20}`,
    alt: 'members icon',
  },
  arrow: {
    left: {
      url: `${CLOUDFLARE_URL}/517fe462-7bfb-4ba9-b2cd-65e9474aca00/${ICON_SIZE_20}`,
      alt: 'arrow left icon',
    },
    right: {
      url: `${CLOUDFLARE_URL}/c3e8443f-b224-4b4e-8ea4-8747db312c00/${ICON_SIZE_20}`,
      alt: 'arrow right icon',
    },
  },
};
