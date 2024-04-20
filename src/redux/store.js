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
        case 'contacts/addContact':

            return {
                contacts: [...state.contacts, action.payload]
            };

        default:
            return state;
    }
};

export const store = configureStore({
  reducer: rootReduser,
});