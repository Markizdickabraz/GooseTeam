const selectContacts = state => state.contacts.items;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

const selectFilter = state => state.filter;

const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);

    const newContactList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return newContactList;
};

export { selectContacts, selectFilter, selectIsLoading, selectError, selectFilteredContacts };
