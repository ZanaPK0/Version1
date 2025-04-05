import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import weatherReducer from "../Reducers/weatherSearchSlice";
import weatherCitiesReducer from "../Reducers/weatherCitiesSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    weather: weatherReducer,
    weatherCities: weatherCitiesReducer,
  },
});

export default store;
