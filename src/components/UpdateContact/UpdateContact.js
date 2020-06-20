import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { updateContact } from "../../reducers/contactSlice";
import { getCurrentContact } from "../../selectors/index";
const UpdateContact = ({
  updateshow,
  updateContact,
  currentContact,
  onContactUpdate,
}) => {
  const [state, setState] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setState(currentContact);
  }, [currentContact]);

  const onSubmit = (data) => {
    updateContact({
      id: state.id,
      name: state.name,
      email: state.email,
      phone: state.phone,
      company: state.company,
      address: state.address,
    });

    setState({ name: "", email: "", phone: "", company: "", address: "" });

    onContactUpdate();
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {updateshow ? (
        <div className="modal">
          <div className="modal-wrapper">
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-text">
                <label>Name</label>
                <input
                  className="inputField"
                  name="name"
                  ref={register({ required: true })}
                  value={state.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-text">
                <label>Email</label>
                <input
                  className="inputField"
                  name="email"
                  value={state.email}
                  ref={register({
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  onChange={onChange}
                />
              </div>
              <div className="form-text">
                <label>Phone</label>
                <input
                  className="inputField"
                  name="phone"
                  value={state.phone}
                  onChange={onChange}
                />
              </div>
              <div className="form-text">
                <label>Company</label>
                <input
                  className="inputField"
                  name="company"
                  value={state.company}
                  onChange={onChange}
                />
              </div>
              <div className="form-text">
                <label>Address</label>
                <textarea
                  className="inputField"
                  name="address"
                  value={state.address}
                  onChange={onChange}
                />
              </div>
              <button className="btn" type="submit" value="Submit">
                Update
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentContact: getCurrentContact(state),
});

const mapDispatchToProps = { updateContact };
export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);
