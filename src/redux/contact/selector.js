// export const selectContacts = (state) => state.contacts.items;
export const selectContacts = (state) => {
  console.log("Contacts state in selector:", state.contacts.items); // Лог данных в селекторе
  return state.contacts.items;
};
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
