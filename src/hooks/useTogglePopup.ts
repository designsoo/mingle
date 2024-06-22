import { RefObject, useEffect, useRef, useState } from 'react';

type TogglePopupResults = {
  isOpen: boolean;
  buttonRef: RefObject<HTMLButtonElement>;
  popupRef: RefObject<HTMLDivElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  togglePopup: () => void;
};

const useTogglePopup = (): TogglePopupResults => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, popupRef, buttonRef, setIsOpen, togglePopup };
};

export default useTogglePopup;
