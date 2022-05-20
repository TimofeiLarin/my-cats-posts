import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (keyAfter, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/cats.json?limit=20&after=${keyAfter}`
      );
      const data = response.data.data;
      const after = data.after;
      const arrPosts = data.children.map((item) => ({
        id: item.data.id,
        title: item.data.title,
        author: item.data.author,
        post_hint: item.data.post_hint,
        media: item.data.media,
        url: item.data.url,
        favorite: false,
      }));
      const filteredPosts = arrPosts.filter(
        (item) =>
          item['post_hint'] === 'image' || item['post_hint'] === 'hosted:video'
      );
      return { after, filteredPosts };
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load posts. 😿');
    }
  }
);

export default fetchPosts;
