import { useEffect } from 'react';

const useVisibleScroll = (boolean) => {
  useEffect(() => {
    if (boolean) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [boolean]);
};

export default useVisibleScroll;
