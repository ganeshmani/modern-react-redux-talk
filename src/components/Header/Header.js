import React, { useState } from "react";
import AddContact from "../AddContact/AddContact";
import UpdateContact from "../UpdateContact/UpdateContact";
import ContactList from "../ContactList/ContactList";
import { connect } from "react-redux";
import { deleteContact, searchContact } from "../../reducers/contactSlice";
import ContactDetails from "../ContactDetails/ContactDetails";
import { getCurrentContact } from "../../selectors";
const Header = ({ searchContact, currentContact, deleteContact }) => {
  const [state, setState] = useState({
    isOpen: false,
    isUpdateShow: false,
  });
  return (
    <>
      <div className="contact-screen">
        <div className="page-header">
          <div className="page-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="page-title">
            <h2>contacts</h2>
            <small>welcome to FlatCRM contact page</small>
          </div>
        </div>
        <div className="contact-add">
          <div className="input-wrapper">
            <input
              className="custom-input"
              placeholder="Search contacts"
              onChange={(e) => searchContact(e.target.value)}
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <button
            className="btn"
            onClick={() => {
              setState({ ...state, isOpen: !state.isOpen });
            }}
          >
            <span className="addIcon">+</span>
            Add Contact
          </button>
          <button
            className="btn"
            onClick={() => {
              deleteContact(currentContact.id);
            }}
          >
            <span className="addIcon">-</span>
            Delete Contact
          </button>

          <button
            className="btn"
            onClick={() => {
              setState({ ...state, isUpdateShow: !state.isUpdateShow });
            }}
          >
            <span className="addIcon">-</span>
            Update Contact
          </button>
          <AddContact
            show={state.isOpen}
            onContactSubmit={() => {
              setState({ ...state, isOpen: !state.isOpen });
            }}
          />

          <UpdateContact
            updateshow={state.isUpdateShow}
            onContactUpdate={() => {
              setState({ ...state, isUpdateShow: !state.isUpdateShow });
            }}
          />
        </div>
        <div className="contact-wrapper">
          <ContactList />
          <ContactDetails />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentContact: getCurrentContact(state),
});

const mapDispatchToProps = { deleteContact, searchContact };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
