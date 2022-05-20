import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const useObserverScroll = (ref, dataLoad, isLoading, cb) => {
  const dispatch = useDispatch();
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        if (dataLoad) {
          dispatch(cb(dataLoad));
        }
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};

export default useObserverScroll;
