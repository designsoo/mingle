type ColorList = {
  id: string;
  value: string;
};

interface BackgroundColorOptionsProps {
  colorList: ColorList[];
  selectedImage: string;
  onClick: (id: string, value: string) => void;
}

const BackgroundColorOptions = ({ colorList, selectedImage, onClick }: BackgroundColorOptionsProps) => {
  return (
    <ul className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
      {colorList.map((color) => (
        <li key={`color-option-${color.id}`} className='w-full'>
          <button
            type='button'
            onClick={() => onClick(color.id, color.value)}
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
