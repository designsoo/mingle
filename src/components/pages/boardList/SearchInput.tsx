import { useState } from 'react';

import { SVGS } from '@/constants';

const { search } = SVGS;

interface SearchInputProps {
  keyword: string;
  onSearchChange: (keyword: string) => void;
}

const SearchInput = ({ keyword, onSearchChange }: SearchInputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => setIsInputFocused(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value);

  return (
    <div
      className={`flex items-center gap-4 ${isInputFocused && 'border-yellow-300'} base-transition border-b border-transparent pb-2 md:border-none md:pb-0`}
    >
      <label htmlFor='search'>
        <img
          src={isInputFocused ? search.active.url : search.default.url}
          alt={isInputFocused ? search.active.alt : search.default.alt}
          width={24}
          height={24}
        />
      </label>
      <input
        id='search'
        type='text'
        placeholder='Find Your Mingle Board'
        className='h-11 w-[210px] bg-transparent text-base-18 text-neutral-100 outline-none placeholder:text-neutral-700'
        onChange={handleInputChange}
        value={keyword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchInput;
