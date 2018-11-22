import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import MainNavbar from "../Common/MainNavbar";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Invitations from "./Invitations/Invitations";
import Recommendations from "./Recommendations/Recommendations";
import myStyles from "./Connections.css.js";
import { register } from "../../serviceWorker";
import { get_connections_count } from "../../action/getNetwork";
class Connections extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("component mount");
    this.props.get_connections_count();
  }

  render() {
    let connectioncount = this.props.connectioncount;
    return (
      <div>
        <div>
          <MainNavbar />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div style={myStyles.divCorner}>
                  <span style={myStyles.span1}>
                    <h1>{connectioncount}</h1>
                  </span>
                  <span style={myStyles.span2}>
                    <h3>Your connections</h3>
                  </span>
                  <span style={myStyles.span3}>
                    <Link to="AllConnections">
                      <h3>See all</h3>
                    </Link>
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

              <div className="col-lg-7" style={myStyles.div_md7}>
                <Invitations />
                <br />
                <br />
                <Recommendations />
              </div>

              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//export default Signin;

const mapStateToProps = state => {
  return {
    connectioncount: state.network.connectioncount
  };
};

export default connect(
  mapStateToProps,
  { get_connections_count }
)(Connections);
