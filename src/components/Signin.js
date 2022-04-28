import React, { useState } from "react";
import { Form, Button, FormInput, FormButton } from "react-bootstrap";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Sign.css";

const Signin = () => {
  //   const navigate = useNavigate();
  //   const [show, setShow] = useState(false);

  const [user, setUser] = useState();

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
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
        <div className="haveAccount">
          <p>
            Not a member?{" "}
            <NavLink to="/signup" className="link">
              Register
            </NavLink>
          </p>
        </div>
        <FormButton title="Log in" />
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
        <FormHeader title="Log in" />
        <Form />
      </div>
    </div>
  );
};

export default observer(Signin);
