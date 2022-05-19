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
      const arrPosts = data.children.map((item) => item.data);
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
