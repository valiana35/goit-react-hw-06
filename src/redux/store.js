import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducers";

const rootReduser = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
