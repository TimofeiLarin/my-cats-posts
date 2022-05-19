import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button';

import Header from './components/Header';
import fetchPosts from './store/actions/fetchPosts';

const App = () => {
  const { allPosts, keyAfter, error, isLoading } = useSelector(
    (state) => state.postsReducer
  );
  const dispatch = useDispatch();
  const lastElement = useRef();
  const observer = useRef();

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
      <Header />
      {error && <h2>{error}</h2>}
      {allPosts &&
        allPosts.map(({ id, author, title, url, media, post_hint }, i) => (
          <div key={id}>
            <h2>
              index:{i}___{title}
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
          </div>
        ))}
      <ScrollUpButton style={{background: '#67C3F3'}} />
      <div ref={lastElement} style={{ height: 40, background: 'green' }}>
        LAST ELEMENT
      </div>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default App;
