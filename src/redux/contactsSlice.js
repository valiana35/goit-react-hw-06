import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
    reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact
          },
        };
      },
    },
    deleteContact(state, action) {
     state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;