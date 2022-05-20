import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import ModalFavorites from './components/ModalFavorites';
import Post from './components/Post';
import { Button, Error, Flex, LastElement, Loading } from './components/UI';
import { useScrollUp, useObserverScroll, useVisibleScroll } from './hooks';
import fetchPosts from './store/actions/fetchPosts';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(keyAfter));
  }, []);

  useObserverScroll(lastElement, keyAfter, isLoading, fetchPosts);
  const [scrollUp, handleUp] = useScrollUp(1200);
  useVisibleScroll(modalActive);

  return (
    <div>
      {scrollUp && (
        <Button up onClick={handleUp}>
          UP
        </Button>
      )}
      <Header setActive={setModalActive} />
      <Flex fDirection="column" alignItems="center">
        {allPosts &&
          allPosts.map((dataPost) => {
            return <Post key={dataPost.id} data={dataPost} />;
          })}
        <LastElement ref={lastElement} />
        {isLoading && <Loading />}
        {error && <Error>{error}</Error>}
        {modalActive && <ModalFavorites setActive={setModalActive} />}
      </Flex>
    </div>
  );
};

export default App;
