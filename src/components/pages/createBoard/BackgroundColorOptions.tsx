import { useEffect } from 'react';

import { PAPER_BACKGROUND_COLORS } from '@/constants';

interface BackgroundColorOptionsProps {
  selectedImage: string;
  onClick: (id: string, value: string, type: string) => void;
  setFile: (file: File | null) => void;
}

const BackgroundColorOptions = ({ selectedImage, onClick, setFile }: BackgroundColorOptionsProps) => {
  const handleColorOptionClick = (id: string, value: string, type: string) => {
    setFile(null);
    onClick(id, value, type);
  };

  useEffect(() => {
    const preloadImage = () => {
      PAPER_BACKGROUND_COLORS.forEach((option) => {
        const img = new Image();
        img.src = option.value;
      });
    };

    preloadImage();
  }, []);

  return (
    <ul className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
      {PAPER_BACKGROUND_COLORS.map((color) => (
        <li key={`color-option-${color.id}`} className='w-full'>
          <button
            type='button'
            aria-label='background-color-options'
            onClick={() => handleColorOptionClick(color.id, color.value, color.type)}
            style={{
              backgroundImage: `url(${color.value})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className='h-[160px] w-full overflow-hidden rounded-lg'
          >
            {selectedImage === color.id && <div className='option-background-gradient-yellow h-full w-full'></div>}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BackgroundColorOptions;
