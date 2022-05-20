import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getFavoritesPosts } from '../../store/selectors/favoritesSelector';
import Post from '../Post';
import { Button, Flex } from '../UI';

import { ModalContent, ModalWrapper } from './Modal.styles';

const ModalFavorites = memo(({ setActive }) => {
  const favoritesPosts = useSelector((state) => getFavoritesPosts(state));
  const clickCloseModal = useCallback(() => setActive(false), []);

  return (
    <ModalWrapper onClick={clickCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Button close onClick={clickCloseModal}>Close</Button>
        {favoritesPosts.length ? (
          favoritesPosts.map((dataPost, index) => (
            <Post key={dataPost.id} data={dataPost} index={index} />
          ))
        ) : (
          <Flex jContent="center" marginTop={100}>
            <h2>Nothing here yet 🙈</h2>
          </Flex>
        )}
      </ModalContent>
    </ModalWrapper>
  );
});

export default ModalFavorites;
