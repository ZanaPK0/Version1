import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import weatherReducer from "../Reducers/weatherSearchSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    weather: weatherReducer,
  },
});

export default store;
