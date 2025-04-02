// weatherSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3a253cdd5cf949d497f155913252603&q=${query}&aqi=yes`
      );
      if (!response.ok) {
        return rejectWithValue("Failed to fetch weather data");
      }
      const data = await response.json();
      return data; // This should be an array with objects from the API
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather", // renamed slice
  initialState: {
    weatherData: [], // renamed property
    loading: false,
    error: null,
  },
  reducers: {
    clearWeather: (state) => {
      state.weatherData = null;
      state.error = null;
      // Optionally reset loading if needed:
      state.loading = false;
    },
    // You can add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        console.log("Fetch fulfilled with payload:", action.payload);
        state.loading = false;
        state.weatherData = action.payload; // storing fetched weather data here
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        console.error("Fetch rejected:", action.payload, action.error);
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
