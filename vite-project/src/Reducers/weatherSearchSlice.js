/**
 * weatherSlice.js
 *
 * This Redux slice handles weather data fetching and state management for:
 * - The user's current/default location (homepage)
 * - Weather search results (user queries)
 *
 * Thunks:
 * - `fetchCurrentLocationWeather`:
 *   - Fetches current weather data based on a provided query (e.g., city name or coordinates).
 *   - Used for homepage data (e.g., default or geolocation-based city).
 *   - Returns JSON data or rejects with an error message.
 *
 * - `fetchSearchedWeather`:
 *   - Fetches forecast weather data for 1 day based on user input.
 *   - Used when a user searches for a specific location.
 *   - Returns JSON data or rejects with an error message.
 *
 * State:
 * - `currentLocationWeather` (Object | null): Stores homepage location weather data.
 * - `searchedWeather` (Object | null): Stores forecast data from a user's search.
 * - `loading` (Boolean): Indicates whether a request is in progress.
 * - `error` (String | null): Holds any error messages from fetch failures.
 *
 * Reducers:
 * - `clearWeather`: Resets both weather states, loading flag, and error.
 *
 * Extra Reducers:
 * - Handles all three async states (pending, fulfilled, rejected) for each thunk:
 *   - `fetchCurrentLocationWeather`
 *   - `fetchSearchedWeather`
 *   - Updates appropriate state values based on request results.
 *
 * Usage:
 * - Add the reducer to your Redux store configuration.
 * - Dispatch `fetchCurrentLocationWeather` on load for homepage data.
 * - Dispatch `fetchSearchedWeather` when users search for weather.
 * - Call `clearWeather` to reset weather-related state (e.g., on unmount or reset).
 *
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentLocationWeather = createAsyncThunk(
  "weather/fetchCurrentLocationWeather",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3a253cdd5cf949d497f155913252603&q=${query}&aqi=yes`
      );
      if (!response.ok) {
        return rejectWithValue("Failed to fetch weather for homepage");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedWeather = createAsyncThunk(
  "weather/fetchSearchedWeather",
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=3a253cdd5cf949d497f155913252603&q=${query}&days=1&aqi=no&alerts=no
`
      );
      if (!response.ok) {
        return rejectWithValue("Failed to fetch searched weather");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather", // renamed slice
  initialState: {
    currentLocationWeather: null, // for homepage (e.g., auto-detect or default city)
    searchedWeather: null, // for user search results
    loading: false,
    error: null,
  },
  reducers: {
    clearWeather: (state) => {
      state.currentLocationWeather = null;
      state.searchedWeather = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Homepage (current location)
      .addCase(fetchCurrentLocationWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentLocationWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLocationWeather = action.payload;
      })
      .addCase(fetchCurrentLocationWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // Forecast search results
      .addCase(fetchSearchedWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchedWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedWeather = action.payload;
      })
      .addCase(fetchSearchedWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export const { weather } = weatherSlice.actions;
export default weatherSlice.reducer;
