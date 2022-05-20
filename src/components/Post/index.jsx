import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { favoritesSlice } from '../../store/slice/favoritesSlice';
import { Button, Flex, Img, Video } from '../UI';

import { PostTitle, PostWrapper } from './Post.styles';

const Post = memo(({ data }) => {
  const dispatch = useDispatch();
  const { title, author, post_hint, media, url } = data;
  const clickChangeFavorites = () => {
    dispatch(
      favoritesSlice.actions.addDeleteFavorites({ ...data, favorite: true })
    );
  };
  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      {post_hint === 'hosted:video' ? (
        <Video controls>
          <source src={media.reddit_video.dash_url} />
          <source src={media.reddit_video.fallback_url} />
          <source src={media.reddit_video.hls_url} />
          <source src={media.reddit_video.scrubber_media_url} />

        </Video>
      ) : (
        <Img src={url} alt="Photo_cat" />
      )}
      <Flex fDirection="column" alignItems="start" marginTop={10}>
        <p>Author: {author}</p>
        <p>
          Favorite:
          <Button post active={data.favorite} onClick={clickChangeFavorites}>
            {data.favorite ? 'Added' : 'Not Added'}
          </Button>
        </p>
      </Flex>
    </PostWrapper>
  );
});

export default Post;
