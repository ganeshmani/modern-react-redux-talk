import React, { Fragment } from "react";
import { connect } from "react-redux";
import UserAvatar from "react-user-avatar";
const ContactDetails = ({ contactDetail, fetchContactDetails }) => {
  return (
    <div className="contact-detail">
      <div className="contact-detail-wrapper">
        {contactDetail && contactDetail.name ? (
          <Fragment>
            {" "}
            <div className="contact-detail-user">
              {/* <span class="user-avatar"></span> */}
              <UserAvatar size="80" name={contactDetail.name} />
              <h3>{contactDetail.name}</h3>
              <small className="contact-email">{contactDetail.email}</small>
            </div>
            <div className="lists-of-details">
              <ul className="flex-list-style">
                <li className="flex-list">
                  <span className="sub-head">Full name:</span>
                  <span className="sub-detail">{contactDetail.name}</span>
                </li>
                <li className="flex-list">
                  <span className="sub-head">Email:</span>
                  <span className="sub-detail">{contactDetail.email}</span>
                </li>
                <li className="flex-list">
                  <span className="sub-head">Phone:</span>
                  <span className="sub-detail">{contactDetail.phone}</span>
                </li>
                <li className="flex-list">
                  <span className="sub-head">Company:</span>
                  <span className="sub-detail">{contactDetail.company}</span>
                </li>
                <li className="flex-list">
                  <span className="sub-head">Address:</span>
                  <span className="sub-detail">{contactDetail.address}</span>
                </li>
              </ul>
            </div>
          </Fragment>
        ) : (
          <div>No Contact Selected</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactDetail: state.contacts.currentContact,
});

export default connect(mapStateToProps, null)(ContactDetails);
