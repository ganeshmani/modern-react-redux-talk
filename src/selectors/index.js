import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.contacts;

export const getCurrentContact = (state) => state.contacts.currentContact;

export const getSearchTerm = (state) => state.contacts.searchTerm;

export const getFilteredContacts = createSelector(
  [getContacts, getSearchTerm],
  (contacts, searchTerm) => {
    if (searchTerm !== "") {
      const searchResult = contacts.filter(
        (item) =>
          item.name.includes(searchTerm) ||
          item.email.includes(searchTerm) ||
          item.company.includes(searchTerm) ||
          item.address.includes(searchTerm)
      );

      return searchResult;
    } else {
      return contacts;
    }
  }
);
