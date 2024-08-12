import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contact/contactsSlice";
import { deleteContactThunk } from "../../redux/contact/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperText}>
        <span className={s.text}>
          <FaUser /> {name}
        </span>
        <span className={s.text}>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Contact;
