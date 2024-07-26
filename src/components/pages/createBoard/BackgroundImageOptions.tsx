import { useEffect, useRef, useState } from 'react';

import { PAPER_BACKGROUND_IMAGES, SVGS } from '@/constants';

import { getUploadUrl } from '@/pages/CreateBoard/data-access/cloudflareImageService';

const {
  add: { url, alt },
} = SVGS;

interface BackgroundImageOptionsProps {
  selectedImage: string;
  onClick: (id: string, value: string, type: string) => void;
  setFile: (file: File | null) => void;
  setUploadId: (url: string) => void;
}

const BackgroundImageOptions = ({ selectedImage, onClick, setFile, setUploadId }: BackgroundImageOptionsProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (!files) return;
    const file = files[0];

    const imagePreviewUrl = URL.createObjectURL(file);

    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    setPreviewImage(imagePreviewUrl);
    setFile(file);
    onClick('custom-image', imagePreviewUrl, 'backgroundImageURL');

    // CDN 서버에서 URL 받아오기
    const id = await getUploadUrl();
    setUploadId(id);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleDefaultImageClick = (id: string, value: string, type: string) => {
    setPreviewImage(value);
    // 기본 이미지 선택 시 사용자 등록 이미지 file 정보를 초기화
    setFile(null);
    setUploadId('');
    onClick(id, value, type);
  };

  useEffect(() => {
    const preloadImage = () => {
      PAPER_BACKGROUND_IMAGES.forEach((option) => {
        const img = new Image();
        img.src = option.value;
      });
    };

    preloadImage();
  }, []);

  return (
    <ul className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
      <li className='base-transition h-[160px] w-full rounded-lg border border-neutral-700 hover:border-yellow-300'>
        <label htmlFor='photo' className='flexbox-row-center h-full w-full cursor-pointer'>
          <img src={url} alt={alt} />
        </label>
        <input ref={inputRef} id='photo' type='file' className='hidden' onChange={onImageChange} />
      </li>
      {PAPER_BACKGROUND_IMAGES.map((image) => (
        <li key={`image-option-${image.id}`} className='w-full'>
          <button
            type='button'
            aria-label='background-image-options'
            onClick={() => handleDefaultImageClick(image.id, image.value, image.type)}
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
