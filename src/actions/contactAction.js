import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  FETCH_CONTACT_DETAIL,
  SEARCH_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "./types";

export const fetchContacts = () => {
  return {
    type: FETCH_CONTACTS,
  };
};

export const addContact = (payload) => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const deleteContact = (payload) => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const updateContact = (payload) => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};

export const fetchContactDetails = (payload) => {
  return {
    type: FETCH_CONTACT_DETAIL,
    payload,
  };
};

export const searchContact = (payload) => {
  return {
    type: SEARCH_CONTACT,
    payload,
  };
};
