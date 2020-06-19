import {
  FETCH_CONTACTS,
  FETCH_CONTACT_DETAIL,
  ADD_CONTACT,
  SEARCH_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [],
  currentContact: {},
  searchTerm: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { ...action.payload, id: state.contacts.length + 1 },
        ],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
        currentContact:
          action.payload === state.currentContact.id
            ? {}
            : state.contacts.length > 0
            ? state.contacts[0]
            : {},
      };

    case UPDATE_CONTACT:
      const data = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((item) => {
          if (item.id === data.id) {
            return data;
          } else {
            return item;
          }
        }),
        currentContact: data,
      };

    case FETCH_CONTACT_DETAIL:
      const result = state.contacts.find((item) => item.id === action.payload);
      return {
        ...state,
        currentContact: result,
      };

    case SEARCH_CONTACT:
      return { ...state, searchTerm: action.payload };

    default:
      return state;
  }
}
