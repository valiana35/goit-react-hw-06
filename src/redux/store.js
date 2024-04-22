import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contacts) => contacts.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReduser,
});
