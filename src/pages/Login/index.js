import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./login.css";

const Login = ({ login, dispatch }) => {
  const [redirectTimeline, setRedirectTimeline] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const actionLogin = () => {
    setRedirectTimeline(true);
    redirect();

    return {
      type: "ACTION_LOGIN",
      enable: true,
    };
  };

  const redirect = () => {};

  return (
    <section className="login-wrapper">
      <section className="login-container">
        <header className="login-header">
          <h1 className="login-title">Instagram</h1>
        </header>
        <form className="login-form" onSubmit={handleSubmit}>
          <fieldset className="login-form-field">
            <div className="login-form-group">
              <input
                className="login-form-input"
                placeholder="telefone, nome de usuário ou email"
              />
            </div>
            <div className="login-form-group">
              <input className="login-form-input" placeholder="senha" />
            </div>
          </fieldset>

          <fieldset className="login-form-field">
            <Link to={redirectTimeline ? "/timeline" : "/"}>
              <button
                className="login-form-button"
                onClick={() => dispatch(actionLogin())}
              >
                Entrar
              </button>
            </Link>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default connect((state) => ({ login: state.loginReducer }))(Login);
