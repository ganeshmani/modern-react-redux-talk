import { combineReducers } from "redux";
import contactReducer from "./contactSlice";
export default combineReducers({
  contacts: contactReducer,
});
