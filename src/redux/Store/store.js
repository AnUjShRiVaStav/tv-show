import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import schedule from "../Reducer/schedule";
import thunk from "redux-thunk";


const reducer = combineReducers({
  schedule: schedule,
});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
