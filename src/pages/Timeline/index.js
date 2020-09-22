import React from "react";
import { connect } from "react-redux";

const Timeline = ({ loginReducer }) => {
  return (
    <section>
      <h1>Timeline</h1>
      <p>Email: {loginReducer.email}</p>
      <p>Pass: {loginReducer.password}</p>
    </section>
  );
};

export default connect((state) => ({ loginReducer: state.loginReducer }))(
  Timeline
);
