import React from "react";
import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";
import { getFilteredContacts } from "../../selectors/index";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      <ul className="list-style">
        <div className="contact-list-header">
          <p className="adder">
            <span>+</span>
          </p>
          <p>Basic info</p>
          <p>Company</p>
        </div>
        {contacts.map((item) => {
          return (
            <li className="user-list">
              <ContactListItem contactItem={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

export default connect(mapStateToProps, {})(ContactList);
