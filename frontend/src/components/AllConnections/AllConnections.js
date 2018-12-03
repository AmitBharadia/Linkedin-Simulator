import React, { Component } from "react";
import MainNavbar from "../Common/MainNavbar";
import { connect } from "react-redux";

import myStyles from "./AllConnections.css.js";
import { get_allConnections } from "../../action/getNetwork";
import { removeConnection } from "../../action/getNetwork";
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
  onRemoveClick(newConnection) {
    this.props.removeConnection(newConnection);
  }

  render() {
    const allconnections = this.props.allconnections;
    let data;
    if (allconnections) {
      data = allconnections.map((allconnection, i) => {
        return (
          <div className="row">
            <div className="col-lg-3" />

            <div className="col-lg-7" />
            <div
              className="row"
              style={{
                height: "130px",
                marginTop: "10px"
              }}
            >
              <div className="col-md-3">
                <img src={allconnection.connect_photo} style={myStyles.img}  onClick={()=>{
            this.props.history.push("/profile/" + allconnection.connect_user_id)
          }}/>
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
              <div className="col-md-3" style={{ marginTop: "50px" }}>
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
          <MainNavbar />
          <br />
          <br />
          <div className="col-lg-3" />
          <div className="col-lg-6" style={myStyles.div_md7}>
            <div
              className="row"
              style={{
                width: "100%",
                borderBottom: "solid 1px lightgray",
                height: "50px"
              }}
            >
              <h2 style={{ paddingTop: "10px", marginLeft: "20px" }}>
                Your Connections
              </h2>
            </div>
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
  { get_allConnections, removeConnection }
)(AllConnections);
