import axios from "axios";
import { setErrorStatus } from "./contactsSlice";

axios.defaults.baseURL = "https://66b728637f7b1c6d8f1b13d8.mockapi.io/";

export const fetchContactsThunk = () => async (dispatch) => {
  try {
    const responce = await axios.get("contacts");
    console.log(responce.data);
  } catch (error) {
    dispatch(setErrorStatus(true));
  }
};
