import { useEffect, useState } from 'react';

const useScrollUp = (length, time) => {
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const throttle = (callback, timer) => {
    let time = 0;
    return (...arg) => {
      if (time + timer > Date.now()) {
        return;
      }
      callback(...arg);
      time = Date.now();
    };
  };

  const scrollHandler = throttle((e) => {
    if (e.target.documentElement.scrollTop > length) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  }, time);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return [scrollUp, handleUp];
};

export default useScrollUp;
