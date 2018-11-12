import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";
import Columns from "react-bootstrap-columns";

import myStyles from "./Connections.css";

class Connections extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className="container">
          <div className="row" style={{ height: "100%" }}>
            <div className="col-md-2">
              <div />
            </div>

            <div
              className="col-md-8"
              style={}
            >
              One of three columns
              <br /> One of three columns
            </div>

            <div className="col-md-2">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
