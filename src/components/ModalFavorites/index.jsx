import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post';

import { ModalContent, ModalWrapper } from './Modal.styles';

const ModalFavorites = ({ setActive }) => {
  const { favoritesPosts } = useSelector((state) => state.favoritesReducer);
  console.log(favoritesPosts);
  return (
    <ModalWrapper onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {favoritesPosts.map((dataPost, index) => (
          <Post key={dataPost.id} data={dataPost} index={index} />
        ))}
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalFavorites;
