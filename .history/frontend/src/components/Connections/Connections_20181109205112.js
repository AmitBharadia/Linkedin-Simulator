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
const columnStyle = {
  textAlign: "justify",
  fontFamily: font.family,
  fontSize: font.size,
  fontWeight: font.weight,
  lineHeight: font.lineHeight
};
class Connections extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <Columns columns={2} columnSize="md" style={columnStyle}>
              <span>First paragraph</span>

              <span>Second paragraph</span>

              <span>Third paragraph and so on</span>
            </Columns>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
