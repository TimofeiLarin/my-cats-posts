import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { favoritesSlice } from '../../store/slice/favoritesSlice';
import { Button } from '../UI';

const Post = ({ data, index }) => {
  const { id, title, author, post_hint, media, url } = data;
  const { favoritesPosts } = useSelector((state) => state.favoritesReducer);
  let isActive = false;
  const handleClick = () => {
    isActive = Boolean(
      favoritesPosts.find(({ idFavorites }) => idFavorites === id)
    );
    console.log(isActive);
    dispatch(favoritesSlice.actions.addDeleteFavorites(data));
  };
  console.log(isActive ? 1 : 0);
  const dispatch = useDispatch();
  return (
    <div key={id}>
      <h2>
        index:{index}___{title}
      </h2>
      <p>author: {author}</p>
      <p>id:{id}</p>
      {post_hint === 'hosted:video' ? (
        <video width="400" height="300" controls="controls">
          <source src={media.reddit_video.fallback_url} />
        </video>
      ) : (
        <img src={url} width="400" alt="Post image" />
      )}
      <div>
        <Button active={isActive} onClick={handleClick}>
          Добавить в израбнное и удалить+++
        </Button>
      </div>
    </div>
  );
};

export default Post;
