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
      <div>
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
                <div style={myStyles.divCorner1}>
                  <span style={myStyles.span4}>
                    <h5> Your contact import is ready </h5>
                  </span>
                  <span style={myStyles.span5}>
                    <h5>Connect with your contacts and </h5>
                  </span>
                  <span style={myStyles.span5}>
                    <h5>never loose touch</h5>
                  </span>
                  <button style={myStyles.continue}>
                    <h3>Continue</h3>
                  </button>
                  <span style={myStyles.span6}>
                    <h4>More options</h4>
                  </span>
                </div>
                <div />
              </div>

              <div className="col-md-7" style={myStyles.div_md7}>
                <div className="row" style={myStyles.invitations}>
                  <h3 style={myStyles.h3pending}>No pending invitations</h3>
                </div>
                <br />
                <br />
                <div style={myStyles.youMayKnow}>
                  <div className="row">
                    <div
                      class="card card-inverse text-center"
                      style={{ "max-width": "220px" }}
                    >
                      <img
                        class="card-img-top"
                        src="Kriti_Jar.jpg"
                        alt="Photo of sunset"
                      />

                      <div class="card-img-overlay">
                        <h4 class="card-title">What Next?</h4>
                        <p class="card-text">Is this the end?</p>
                      </div>

                      <div class="card-body">
                        Tune in next week to find out!
                      </div>
                    </div>
                    <div
                      class="card card-inverse text-center"
                      style={{ "max-width": "220px" }}
                    >
                      <img
                        class="card-img-top"
                        style={{ width: "60%", "margin-top": "25px" }}
                        src="Kriti_Jar.jpg"
                        alt="Photo of sunset"
                      />

                      <div class="card-img-overlay">
                        <h4 class="card-title">What Next?</h4>
                        <p class="card-text">Is this the end?</p>
                      </div>

                      <div class="card-body">
                        Tune in next week to find out!
                      </div>
                    </div>
                    <div
                      class="card card-inverse text-center"
                      style={{ "max-width": "220px" }}
                    >
                      <img
                        class="card-img-top"
                        src="Kriti_Jar.jpg"
                        alt="Photo of sunset"
                      />

                      <div class="card-img-overlay">
                        <h4 class="card-title">What Next?</h4>
                        <p class="card-text">Is this the end?</p>
                      </div>

                      <div class="card-body">
                        Tune in next week to find out!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
