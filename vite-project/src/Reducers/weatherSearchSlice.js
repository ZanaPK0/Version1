// weatherSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchWeather = createAsyncThunk(
//   "weather/fetchWeather",
//   async (query, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=3a253cdd5cf949d497f155913252603&q=${query}&aqi=yes`
//       );
//       if (!response.ok) {
//         return rejectWithValue("Failed to fetch weather data");
//       }
//       const data = await response.json();
//       console.log(JSON.stringify(data, null, 2));

//       return data; // This should be an array with objects from the API
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


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
