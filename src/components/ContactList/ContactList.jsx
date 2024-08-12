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
  console.log("Rendered ContactList:", contacts);

  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  // const filteredData = contacts; // Временно уберите фильтрацию для проверки

  return (
    <>
      {isLoading && <h1>IS LOADING...</h1>}
      <div className={s.contactList}>
        {filteredData.map((item) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContactsThunk());
//   }, [dispatch]);

//   return (
//     <div>
//       {contacts.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>{item.number}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ContactList;
