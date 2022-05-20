import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import ModalFavorites from './components/ModalFavorites';
import Post from './components/Post';
import { useScrollUp, useObserverScroll } from './hooks';
import fetchPosts from './store/actions/fetchPosts';
import { getFavoritesPosts } from './store/selectors/favoritesSelector';
import {
  getError,
  getIsLoading,
  getKeyAfter,
  getAllPosts,
} from './store/selectors/postsSelector';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const lastElement = useRef();
  
  const allPosts = useSelector((state) => getAllPosts(state));
  const keyAfter = useSelector((state) => getKeyAfter(state));
  const error = useSelector((state) => getError(state));
  const isLoading = useSelector((state) => getIsLoading(state));
  const favoriteArr = useSelector((state) => getFavoritesPosts(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(keyAfter));
  }, []);

  useObserverScroll(lastElement, keyAfter, isLoading, fetchPosts);
  const [scrollUp, handleUp] = useScrollUp(1200, 200);

  return (
    <div className="App">
      {scrollUp && (
        <button
          style={{
            position: 'fixed',
            right: 50,
            bottom: 100,
            background: '#67C3F3',
          }}
          onClick={handleUp}
        >
          MY UP
        </button>
      )}
      <Header setActive={setModalActive} />
      {allPosts &&
        allPosts.map((dataPost, index) => {
          const favoriteData = favoriteArr.find(({ id }) => id === dataPost.id);
          if (favoriteData) {
            return <Post key={dataPost.id} data={favoriteData} index={index} />;
          } else {
            return <Post key={dataPost.id} data={dataPost} index={index} />;
          }
        })}
      <div ref={lastElement} style={{ height: 40, background: 'green' }}>
        LAST ELEMENT
      </div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {modalActive && <ModalFavorites setActive={setModalActive} />}
    </div>
  );
};

export default App;
