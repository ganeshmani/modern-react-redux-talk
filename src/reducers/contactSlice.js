import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "Contact",
  initialState: {
    contacts: [],
    currentContact: {},
    searchTerm: "",
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push({ id: state.contacts.length + 1, ...action.payload });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );

      let currentContact =
        action.payload === state.currentContact.id
          ? {}
          : state.contacts.length > 0
          ? state.contacts[0]
          : {};

      state.currentContact = currentContact;
    },
    updateContact(state, action) {
      const contacts = state.contacts.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });

      state.contacts = contacts;

      state.currentContact = action.payload;
    },
    fetchContactDetails(state, action) {
      const result = state.contacts.find((item) => item.id === action.payload);
      state.currentContact = result;
    },
    searchContact(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  updateContact,
  fetchContactDetails,
  searchContact,
} = contactSlice.actions;

export default contactSlice.reducer;
