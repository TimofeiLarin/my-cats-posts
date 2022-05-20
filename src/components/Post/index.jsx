import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { favoritesSlice } from '../../store/slice/favoritesSlice';
import { Button } from '../UI';

const Post = memo(({ data, index }) => {
  const dispatch = useDispatch();
  const { id, title, author, post_hint, media, url } = data;
  const clickChangeFavorites = () => {
    dispatch(
      favoritesSlice.actions.addDeleteFavorites(data)
    );
  };
  return (
    <div>
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
        Favorite:
        <Button active={data.favorite} onClick={clickChangeFavorites}>
          {data.favorite ? 'Add' : 'Not Added'}
        </Button>
      </div>
    </div>
  );
});

export default Post;
