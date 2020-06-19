import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  currentContact: {},
  searchTerm: "",
};

export default createReducer(initialState, {
  FETCH_CONTACTS: (state, action) => state,
  ADD_CONTACT: (state, action) => ({
    ...state,
    contacts: [
      ...state.contacts,
      { ...action.payload, id: state.contacts.length + 1 },
    ],
  }),
  DELETE_CONTACT: (state, action) => ({
    ...state,
    contacts: state.contacts.filter((item) => item.id !== action.payload),
    currentContact:
      action.payload === state.currentContact.id
        ? {}
        : state.contacts.length > 0
        ? state.contacts[0]
        : {},
  }),
  UPDATE_CONTACT: (state, action) => ({
    ...state,
    contacts: state.contacts.map((item) => {
      if (item.id === action.payload.id) {
        return action.payload;
      } else {
        return item;
      }
    }),
    currentContact: action.payload,
  }),
  FETCH_CONTACT_DETAIL: (state, action) => {
    const result = state.contacts.find((item) => item.id === action.payload);
    return {
      ...state,
      currentContact: result,
    };
  },

  SEARCH_CONTACT: (state, action) => ({ ...state, searchTerm: action.payload }),
});
