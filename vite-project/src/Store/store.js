import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Reducers/weatherSearchSlice";
import weatherCitiesReducer from "../Reducers/weatherCitiesSlice";

/**
 * store.js
 *
 * This file sets up and exports the Redux store for the application.
 * It uses Redux Toolkit's `configureStore` to combine and manage the app's slices.
 *
 * Slices Registered:
 * - `weather`: Handles current and searched weather data (e.g. home page & search results)
 *   - Source: weatherSearchSlice.js
 * - `weatherCities`: Handles weather data for multiple predefined cities (e.g. Sweden overview)
 *   - Source: weatherCitiesSlice.js
 *
 * Features:
 * - Automatically sets up Redux DevTools and middleware like thunk
 * - Central store is used throughout the app via the `<Provider>` wrapper in index.jsx
 *
 * Usage:
 * - Import and provide this store to your app using `<Provider store={store}>`
 * - Access slices with `useSelector(state => state.weather)` etc.
 * - Dispatch actions using `useDispatch()` from `react-redux`
 */

const store = configureStore({
  reducer: {
    weather: weatherReducer, // This maps the key weather in the global state to whatever logic is inside weatherReducer
    weatherCities: weatherCitiesReducer,
  },
});

export default store;
