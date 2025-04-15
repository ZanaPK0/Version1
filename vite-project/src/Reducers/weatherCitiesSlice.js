/**
 * weatherCitiesSlice.js
 *
 * This Redux slice manages the state for current weather data across multiple cities.
 *
 * Overview:
 * - Asynchronous Thunk: Uses `createAsyncThunk` to fetch weather data for a list of cities:
 *   - Cities: Stockholm, Göteborg, and Malmö.
 *   - Fetch Logic: Sends multiple API requests to WeatherAPI; all must succeed or the fetch is rejected.
 *
 * Thunk: `fetchMultipleCities`
 * - Purpose: Fetches current weather data for defined cities.
 * - Error Handling: If any request fails, returns a rejection with a relevant error message.
 * - Response: On success, returns an array of weather data objects (one per city).
 *
 * State:
 * - `citiesWeatherData` (Array): Stores fetched weather data for the cities.
 * - `loading` (Boolean): Indicates if data is being fetched.
 * - `error` (String | null): Stores error messages from failed requests.
 *
 * Extra Reducers:
 * - `.pending`: Sets `loading` to true, resets `error`.
 * - `.fulfilled`: Populates `citiesWeatherData`, sets `loading` to false.
 * - `.rejected`: Sets `loading` to false, updates `error`.
 *
 * Usage:
 * - Import and include the reducer in your Redux store.
 * - Dispatch `fetchMultipleCities` to trigger the fetch logic.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultipleCities = createAsyncThunk(
  "weatherCities/fetchMultipleCities",
  async (_, { rejectWithValue }) => {
    const cities = ["Stockholm", "Gothenburg", "Malmo"];

    try {
      const responses = await Promise.all(
        cities.map((city) =>
          fetch(
            `http://api.weatherapi.com/v1/current.json?key=3a253cdd5cf949d497f155913252603&q=${encodeURIComponent(
              city
            )}&aqi=yes`
          )
        )
      );

      const failed = responses.find((res) => !res.ok);
      if (failed) return rejectWithValue("One or more requests failed");

      const data = await Promise.all(responses.map((res) => res.json()));

      return data; // array of 3 city weather objects
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherCitiesSlice = createSlice({
  name: "weatherCities",
  initialState: {
    citiesWeatherData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultipleCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMultipleCities.fulfilled, (state, action) => {
        state.loading = false;
        state.citiesWeatherData = action.payload;
      })
      .addCase(fetchMultipleCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default weatherCitiesSlice.reducer;
