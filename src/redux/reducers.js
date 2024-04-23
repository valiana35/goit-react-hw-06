import { createReducer } from "@reduxjs/toolkit";
import * as Types from "./constants";

const initialState = [];

export const contactReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(Types.ADD_NEW_CONTACT, (state, action) => {
    state.push(action.payload);
  })
  .addCase(Types.DELETE_CONTACT, (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  });
});