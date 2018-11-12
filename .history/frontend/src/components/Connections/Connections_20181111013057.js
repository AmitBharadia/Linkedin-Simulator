import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";
import Columns from "react-bootstrap-columns";

import myStyles from "./Connections.css.js";

class Connections extends Component {
  render() {
    return (
      <div style={{ border: "solid 1px black" }}>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div style={myStyles.divCorner}>
                  <span style={myStyles.span1}>
                    <h1>158</h1>
                  </span>
                  <span style={myStyles.span2}>
                    <h3>Your connections</h3>
                  </span>
                  <span style={myStyles.span3}>
                    <h3>See all</h3>
                  </span>
                </div>
                <div />
                <div style={myStyles.divCorner1}>Hello</div>
                <div />
              </div>

              <div className="col-md-7" style={myStyles.div_md8}>
                One of three columns
                <br /> One of three columns
                <br />
                One of three columns
                <br /> One of three columns
                <br />
                One of three columns
                <br />
                One of three columns
                <br />
                One of three columns
                <br />
                One of three columns
                <br />
                One of three columns
              </div>

              <div className="col-md-2">One of three columns</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
