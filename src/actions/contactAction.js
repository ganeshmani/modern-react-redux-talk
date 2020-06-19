import { createAction } from "@reduxjs/toolkit";

export const fetchContacts = createAction("FETCH_CONTACTS");

export const addContact = createAction("ADD_CONTACT", (payload) => {
  return {
    payload,
  };
});

export const deleteContact = createAction("DELETE_CONTACT", (payload) => {
  return {
    payload,
  };
});

export const updateContact = createAction("UPDATE_CONTACT", (payload) => {
  return {
    payload,
  };
});

export const fetchContactDetails = createAction(
  "FETCH_CONTACT_DETAIL",
  (payload) => {
    return {
      payload,
    };
  }
);

export const searchContact = createAction("SEARCH_CONTACT", (payload) => {
  return {
    payload,
  };
});
