import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b728637f7b1c6d8f1b13d8.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContactsThunk = () => async (dispatch) => {
//   try {
//     dispatch(setLoadingStatus(true));
//     const response = await axios.get("contacts");
//     console.log(response.data);
//     dispatch(fetchData(response.data));
//   } catch (error) {
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };

// export const deleteContactThunk = (id) => async (dispatch) => {
//   try {
//     dispatch(setLoadingStatus(true));
//     await axios.delete(`contacts/${id}`);
//   } catch (error) {
//     dispatch(setErrorStatus(true));
//     console.error("Error deleting contact:", error);
//   } finally {
//     dispatch(setLoadingStatus(false));
//   }
// };
