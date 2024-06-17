import { useState } from 'react';

const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive((prev) => !prev);
  };

  return { isActive, handleToggleClick };
};

export default useToggle;
