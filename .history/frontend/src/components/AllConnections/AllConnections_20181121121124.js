import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import myStyles from "./AllConnections.css.js";
import { register } from "../../serviceWorker";
import { get_allConnections } from "../../action/getNetwork";
class AllConnections extends Component {
  onRemoveClick(newConnection) {
    this.props.removeConnection(newConnection);
  }

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("component mount");
    this.props.get_allConnections();
  }
  render() {
    const allconnections = this.props.allconnections;
    let data;
    if (allconnections) {
      data = allconnections.map((allconnection, i) => {
        return (
          <div className="row">
            <div className="col-lg-3" />

            <div className="col-lg-7" style={myStyles.div_md7} />
            <div
              className="row"
              style={{
                height: "130px",
                marginTop: "10px"
              }}
            >
              <div className="col-md-2">
                <img src="Kriti_Jar.jpg" style={myStyles.img} />
              </div>
              <div
                className="col-md-5"
                style={{
                  marginLeft: "20px"
                }}
              >
                <span>
                  <h2>
                    {allconnection.connect_first_name}{" "}
                    {allconnection.connect_last_name}
                  </h2>
                </span>
                <br />

                <span style={myStyles.desc}>
                  {allconnection.connect_summary}
                </span>
              </div>
              <div className="col-md-4" style={{ marginTop: "50px" }}>
                <button
                  class="btn btn-primary"
                  style={myStyles.remove}
                  onClick={this.onRemoveClick.bind(this, allconnection)}
                >
                  Remove Connection
                </button>
              </div>
            </div>
            <div className="col-lg-2" />
          </div>
        );
      });
    }
    return (
      <div>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="col-lg-2" />
          <div className="col-lg-7" style={myStyles.div_md7}>
            <div className="container">{data}</div>
          </div>
          <div className="col-lg-3" />
        </div>
      </div>
    );

    //export default Signin;
  }
}

const mapStateToProps = state => {
  return {
    allconnections: state.network.allconnections
  };
};

export default connect(
  mapStateToProps,
  { get_allConnections }
)(AllConnections);
