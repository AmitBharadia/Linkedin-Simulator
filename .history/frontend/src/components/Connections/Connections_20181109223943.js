import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";
import Columns from "react-bootstrap-columns";

import "./Connections.css";

class Connections extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">One of three columns</div>

            <div className="col">One of three columns</div>

            <div className="col">One of three columns</div>

            <div className="col">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
