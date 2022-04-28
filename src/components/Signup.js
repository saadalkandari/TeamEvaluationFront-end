import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { NavLink } from "react-router-dom";

import "./Sign.css";

const Signup = () => {
  const [user, setUser] = useState();

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    // handleClose();
  };

  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

  const Form = (props) => (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
          onChange={handleChange}
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />
        <FormInput
          description=" Confirm Password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />
        <FormInput
          description="Email"
          placeholder="Enter your Email"
          type="email"
          onChange={handleChange}
        />
        <div className="haveAccount">
          <p>
            Already a member?{" "}
            <NavLink to="/signin" className="link">
              Log in
            </NavLink>
          </p>
        </div>
        <FormButton title="Register" />
      </form>
    </div>
  );

  const FormButton = (props) => (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );

  const FormInput = (props) => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
  console.log(handleChange);
  return (
    <div>
      <div id="loginform">
        <FormHeader title="Register" />
        <Form />
      </div>
    </div>
  );
};

export default observer(Signup);
