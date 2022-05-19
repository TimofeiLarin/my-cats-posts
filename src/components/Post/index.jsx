import React from 'react';
import { useDispatch } from 'react-redux';

import { favoritesSlice } from '../../store/slice/favoritesSlice';

const Post = ({ data, index }) => {
  const { id, title, author, post_hint, media, url } = data;
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
        <button
          onClick={() =>
            dispatch(favoritesSlice.actions.addDeleteFavorites(data))
          }
        >
          Добавить в израбнное и удалить+++
        </button>
      </div>
    </div>
  );
};

export default Post;
