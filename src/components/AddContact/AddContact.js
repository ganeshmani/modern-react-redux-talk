import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addContact } from "../../reducers/contactSlice";
const AddContact = ({ show, onContactSubmit, addContact }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    addContact({
      name: state.name,
      email: state.email,
      phone: state.phone,
      company: state.company,
      address: state.address,
    });

    setState({ name: "", email: "", phone: "", company: "", address: "" });

    onContactSubmit();
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {show ? (
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
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapDispatchToProps = { addContact };
export default connect(null, mapDispatchToProps)(AddContact);
