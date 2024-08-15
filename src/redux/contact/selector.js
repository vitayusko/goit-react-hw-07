export const selectContacts = (state) => {
  console.log("Contacts state in selector:", state.contacts.items);
  return state.contacts.items;
};

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
