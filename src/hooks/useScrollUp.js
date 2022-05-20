import { useEffect, useState } from 'react';

const useScrollUp = (length) => {
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop > length) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return [scrollUp, handleUp];
};

export default useScrollUp;
