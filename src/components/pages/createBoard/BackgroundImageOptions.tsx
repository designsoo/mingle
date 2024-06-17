import { useRef, useState } from 'react';

import { SVGS } from '@/constants';

const CLOUDFLARE_ID = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_TOKEN = import.meta.env.VITE_CLOUDFLARE_TOKEN;

const {
  add: { url, alt },
} = SVGS;

type ImageList = {
  id: string;
  value: string;
};

interface BackgroundImageOptionsProps {
  imageList: ImageList[];
  selectedImage: string;
  onClick: (id: string, value: string) => void;
}

export const getUploadUrl = async () => {
  const response = await (
    await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ID}/images/v2/direct_upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
    })
  ).json();
  return response;
};

const BackgroundImageOptions = ({ imageList, selectedImage, onClick }: BackgroundImageOptionsProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (!files) return;
    const file = files[0];

    // 이미지 미리보기
    const imagePreviewUrl = URL.createObjectURL(file);

    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setPreviewImage(imagePreviewUrl);
  };

  return (
    <ul className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
      <li className='base-transition h-[160px] w-full rounded-lg border border-neutral-700 hover:border-yellow-300'>
        <label htmlFor='photo' className='h-full w-full cursor-pointer flexbox-row-center'>
          <img src={url} alt={alt} />
        </label>
        <input ref={inputRef} id='photo' type='file' className='hidden' onChange={onImageChange} />
      </li>
      {imageList.map((image) => (
        <li key={`image-option-${image.id}`} className='w-full'>
          <button
            onClick={() => onClick(image.id, image.value)}
            type='button'
            style={{
              backgroundImage: `url(${image.value})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className='h-[160px] w-full overflow-hidden rounded-lg'
          >
            {selectedImage === image.id && <div className='option-background-gradient-yellow h-full w-full'></div>}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BackgroundImageOptions;
