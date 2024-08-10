import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.error = action.payload;
    },
    fetchData: (state, action) => {
      state.items = action.payload;
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const {
  deleteContact,
  addContact,
  setLoadingStatus,
  setErrorStatus,
  fetchData,
} = slice.actions;
