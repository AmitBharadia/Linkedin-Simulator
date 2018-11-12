import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";

import "./Connections.css";

class Connections extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
