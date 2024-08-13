import React, { useEffect } from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectLoading } from "../../redux/contact/selector";
import { selectFilter } from "../../redux/filter/selector";
import { fetchContactsThunk } from "../../redux/contact/contactsOps";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <h1>IS LOADING...</h1>}
      <div className={s.contactList}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))
        ) : (
          <h1>NO DATA RECEIVED</h1>
        )}
      </div>
    </>
  );
};

export default ContactList;
