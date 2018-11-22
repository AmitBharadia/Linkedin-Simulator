import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style1 from "./Recommendations.css.js";
import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";
import { get_recommendation } from "../../../action/getNetwork";

class Recommendations extends Component {
  componentDidMount() {
    this.props.get_recommendation();
  }
  render() {
    const recommendations = this.props.d;

    let data = recommendations.map((recommendation, i) => {
      if ((i + 1) % 3 == 0) {
        data +=
          "</div>" + '<div className="row" style={{ height: "230px" }} />';
      }
      return (
        <div className="col-md-4" style={{ maxHeight: "320px" }}>
          <div class="card" style={{ height: "320px" }}>
            <img
              class="card-img-top"
              src="Kriti_Jar.jpg"
              alt="Card image"
              style={style1.cardimage}
            />
            <div class="card-body">
              <h4
                class="card-title"
                style={{
                  textAlign: "center"
                }}
              >
                Kriti Jar
              </h4>
              <p class="card-text" style={style1.cardtext}>
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <br />
              <br />
              <a href="#" class="btn btn-primary" style={style1.connect}>
                CONNECT
              </a>
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

const mapStateToProps = state => ({
  recommendations: state.recommendations
});

export default connect(
  mapStateToProps,
  { get_recommendation }
)(Recommendations);
