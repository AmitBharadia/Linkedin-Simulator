import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style1 from "./Invitations.css.js";
import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";
import {
  get_invitations,
  ignoreRequest,
  acceptRequest
} from "../../../action/getNetwork";
class Invitations extends Component {
  onAcceptClick(newConnection) {
    this.props.acceptRequest(newConnection);
  }
  onIgnoreClick(newConnection) {
    this.props.ignoreRequest(newConnection);
  }

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("component mount");
    this.props.get_invitations();
  }
  render() {
    const invitations = this.props.invitations;
    let data;
    if (invitations) {
      data = invitations.map((invitation, i) => {
        return (
          <div
            className="row"
            style={{
              height: "130px",
              marginTop: "10px",
              width: "100%"
            }}
           
          >
            <div className="col-md-2">
              <img src={invitation.request_photo} style={style1.img}  onClick={()=>{
              this.props.history.push("/profile/" + invitation.request_user_id)
            }}/>
            </div>
            <div
              className="col-md-4"
              style={{
                marginLeft: "20px"
              }}
            >
              <span>
                <h2>
                  {invitation.request_first_name} {invitation.request_last_name}
                </h2>
              </span>
              <br />

              <span style={style1.desc}>{invitation.request_summary}</span>
            </div>
            <div
              className="col-md-5"
              style={{ marginTop: "50px", width: "100%" }}
            >
              <button
                class="btn btn-primary"
                style={style1.accept}
                onClick={this.onAcceptClick.bind(this, invitation)}
              >
                ACCEPT
              </button>
              <button
                class="btn btn-primary"
                style={style1.ignore}
                onClick={this.onIgnoreClick.bind(this, invitation)}
              >
                IGNORE
              </button>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="row" style={myStyles.invitations}>
        <div className="row" style={style1.div1}>
          <h3 style={style1.h3}>Invitations</h3>
        </div>
        {data}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    invitations: state.network.invitations
  };
};

export default connect(
  mapStateToProps,
  { get_invitations, ignoreRequest, acceptRequest }
)(withRouter(Invitations));
