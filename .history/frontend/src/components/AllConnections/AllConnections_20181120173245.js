import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Invitations from "./Invitations/Invitations";
import Recommendations from "./Recommendations/Recommendations";
import myStyles from "./Connections.css.js";
import { register } from "../../serviceWorker";

class Connections extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />

              <div className="col-lg-7" style={myStyles.div_md7} />

              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
