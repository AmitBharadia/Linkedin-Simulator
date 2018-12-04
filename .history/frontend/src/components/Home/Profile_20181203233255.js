import React, { Component } from "react";
import "./Profile.css";
import { get_connections_count } from "../../action/getNetwork";
import { connect } from "react-redux";
class Profile extends Component {
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
      <div class="Profile nopadding">
        <div id="" class="ml-5 mt-5">
          <div id="DIV_2" class="border">
            <div id="DIV_333" clas="border" />{" "}
            <a href="" id="A_4">
              <img src={localStorage.getItem("profile_url") || ""} id="IMG_5" />
            </a>{" "}
            <a href="" id="A_6">
              {" "}
              <span id="SPAN_7">
                {localStorage.getItem("first_name") +
                  " " +
                  localStorage.getItem("last_name")}
              </span>
            </a>
            <p id="P_8">User Details</p>
          </div>
          <div id="DIV_9" class="border ">
            <div id="DIV_10">
              <p class>Number of connections: {connectioncount}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectioncount: state.network.connectioncount
  };
};

export default connect(
  mapStateToProps,
  { get_connections_count }
)(Profile);
