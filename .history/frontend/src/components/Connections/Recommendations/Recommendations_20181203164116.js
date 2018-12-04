import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style1 from "./Recommendations.css.js";
import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";
import { get_recommendation, connectRequest } from "../../../action/getNetwork";

class Recommendations extends Component {
  constructor(props) {
    super(props);
  }
  onConnectClick(newConnection) {
    this.props.connectRequest(newConnection);
  }

  componentDidMount() {
    console.log("component mount");
    this.props.get_recommendation();
  }
  render() {
    const recommendations = this.props.recommendations;

    let data =
      recommendations &&
      recommendations.map((recommendation, i) => {
        if ((i + 1) % 3 == 0) {
          data +=
            "</div>" + '<div className="row" style={{ height: "230px" }} />';
        }
        return (
          <div className="col-md-4" style={{ maxHeight: "380px" }}>
            <div class="card" style={{ height: "380px" }}>
              <img
                class="card-img-top"
                src={recommendation.profile_url}
                alt="Card image"
                style={style1.cardimage}
                onClick={() => {
                  this.props.history.push("/profile/" + recommendation._id);
                }}
              />
              <div class="card-body">
                <h4
                  class="card-title"
                  style={{
                    textAlign: "center"
                  }}
                >
                  {recommendation.first_name} {recommendation.last_name}
                </h4>
                <p class="card-text" style={style1.cardtext}>
                  {recommendation.profileSummary}
                </p>
                <br />
                <br />
                <button
                  class="btn btn-primary"
                  style={style1.connect}
                  onClick={this.onConnectClick.bind(this, recommendation)}
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div className="row" style={myStyles.youMayKnow}>
        <div className="row" style={style1.div1}>
          <h3 style={style1.h3}>Recommended for you</h3>
        </div>
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          {data}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendations: state.network.recommendations
  };
};

export default connect(
  mapStateToProps,
  { get_recommendation, connectRequest }
)(withRouter(Recommendations));
