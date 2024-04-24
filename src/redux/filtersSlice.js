import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        searchFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const { searchFilter } = filtersSlice.actions;