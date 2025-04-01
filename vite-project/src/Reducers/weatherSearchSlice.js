// postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch posts from JSONPlaceholder
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://api.weatherapi.com/v1/search.json?key=<3a253cdd5cf949d497f155913252603>&q=lond"
      );
      if (!response.ok) {
        // If the response is not ok, throw an error to trigger the rejected case
        return rejectWithValue("Failed to fetch posts");
      }
      const data = await response.json();
      return data; // This becomes the action.payload in the fulfilled case
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can define other synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      // Handle rejected state
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
