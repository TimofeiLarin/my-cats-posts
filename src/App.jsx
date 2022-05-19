import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';

import Header from './components/Header';
import ModalFavorites from './components/ModalFavorites';
import Post from './components/Post';
import fetchPosts from './store/actions/fetchPosts';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const lastElement = useRef();
  const observer = useRef();
  const { allPosts, keyAfter, error, isLoading } = useSelector(
    (state) => state.postsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(keyAfter));
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        if (keyAfter) {
          dispatch(fetchPosts(keyAfter));
        }
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  return (
    <div className="App">
      <button
        style={{
          position: 'fixed',
          right: 50,
          bottom: 100,
          background: '#67C3F3',
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        MY UP
      </button>
      <Header setActive={setModalActive} />
      {error && <h2>{error}</h2>}
      {allPosts &&
        allPosts.map((dataPost, index) => (
          <Post key={dataPost.id} data={dataPost} index={index} />
        ))}

      <ScrollUpButton
        ShowAtPosition={1000}
        style={{ background: '#67C3F3' }}
      />
      <div ref={lastElement} style={{ height: 40, background: 'green' }}>
        LAST ELEMENT
      </div>
      {isLoading && <h2>Loading...</h2>}
      {modalActive && <ModalFavorites setActive={setModalActive} />}
    </div>
  );
};

export default App;
