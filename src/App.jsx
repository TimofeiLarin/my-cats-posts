import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import fetchPosts from './store/actions/fetchPosts';

const App = () => {
  const {allPosts, keyAfter} = useSelector(state => state.postsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(keyAfter))
  }, [])
  return (
    <div className="App">
      <Header />
      {allPosts.map(({ id, author, title, url, media, post_hint }, i) => (
        <div key={id}>
          <h2>
            index:{i}___{title}
          </h2>
          <h3>author: {author}</h3>
          <p>id:{id}</p>
          {post_hint === 'hosted:video' ? (
            <video width="400" height="300" controls="controls">
              <source src={media.reddit_video.fallback_url} />
            </video>
          ) : (
            <img src={url} width="400" alt="Post image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
