import React from "react";
import { connect } from "react-redux";
import { getCurrentContact } from "../../selectors/index";
import { fetchContactDetails } from "../../reducers/contactSlice";
import UserAvatar from "react-user-avatar";

const ContactListItem = ({
  contactItem,
  fetchContactDetails,
  currentContact,
}) => {
  return (
    <div
      className="contact-lists"
      onClick={() => {
        fetchContactDetails(contactItem.id);
      }}
    >
      <div className="contact-list">
        <p className="adder">
          <input
            className="custom-checkbox"
            type="checkbox"
            // checked={
            //   currentContact && currentContact.id === contactItem.id
            //     ? "checked"
            //     : "false"
            // }
          />
        </p>
        <div className="contact-list-user">
          {/* <span className="avatar"></span> */}
          <UserAvatar size="48" name={contactItem.name} />
          <div className="contact-list-userDetails">
            <h4 className="contact-name">{contactItem.name}</h4>
            <small className="contact-email">{contactItem.email}</small>
          </div>
        </div>
        <p className="company-name">{contactItem.company}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentContact: getCurrentContact(state),
});

const mapDispatchToProps = { fetchContactDetails };

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
