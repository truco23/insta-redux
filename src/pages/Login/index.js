import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./login.css";

const Login = ({ loginReducer, dispatch }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [redirectTimeline, setRedirectTimeline] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const actionLogin = (loginReducer, values) => {
    setRedirectTimeline(true);

    return {
      type: "ACTION_LOGIN",
      loginReducer,
      enable: isValid,
      values,
    };
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    if (values.email === "" || values.password === "") {
      setIsValid(false);
      return false;
    }

    setIsValid(true);
    return true;
  };

  useEffect(() => {
    validate();
  }, [values]);

  return (
    <section className="login-wrapper">
      <section className="login-container">
        <header className="login-header">
          <h1 className="login-title">Instagram</h1>
        </header>
        <form
          className="login-form"
          onSubmit={(event) => {
            handleSubmit(event);
            if (isValid) {
              dispatch(actionLogin(loginReducer, values));
            }
          }}
        >
          <fieldset className="login-form-field">
            <div className="login-form-group">
              <input
                name="email"
                className="login-form-input"
                placeholder="telefone, nome de usuário ou email"
                onChange={handleChange}
              />
            </div>
            <div className="login-form-group">
              <input
                name="password"
                className="login-form-input"
                placeholder="senha"
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="login-form-field">
            <button
              className={`login-form-button ${
                isValid
                  ? "login-form-button-enable"
                  : "login-form-button-disabled"
              }`}
            >
              Entrar
            </button>
          </fieldset>
        </form>
        {redirectTimeline && <Redirect to="/timeline" />}
      </section>
    </section>
  );
};

export default connect((state) => ({ loginReducer: state.loginReducer }))(
  Login
);
