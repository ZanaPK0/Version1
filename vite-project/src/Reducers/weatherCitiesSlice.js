// weatherCitiesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultipleCities = createAsyncThunk(
  "weatherCities/fetchMultipleCities",
  async (_, { rejectWithValue }) => {
    const cities = ["Stockholm", "Goteborg", "Malmo"];

    try {
      const responses = await Promise.all(
        cities.map((city) =>
          fetch(
            `http://api.weatherapi.com/v1/current.json?key=3a253cdd5cf949d497f155913252603&q=${city}&aqi=yes`
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
