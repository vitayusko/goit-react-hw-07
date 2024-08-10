import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts..."
        name="contactName"
        type="text"
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
