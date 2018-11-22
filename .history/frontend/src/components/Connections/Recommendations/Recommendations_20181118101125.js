import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style1 from "./Recommendations.css.js";
import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";

class Recommendations extends Component {
  render() {
    return (
      <div className="row" style={myStyles.youMayKnow}>
        <div className="row" style={style1.div1}>
          <h3 style={style1.h3}>Recommended for you</h3>
        </div>
        <div className="row" style={{ height: "230px" }}>
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
                  John Doe
                </h4>
                <p class="card-text" style={style1.cardtext}>
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <br />
                <br />
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    color: "#006097",
                    boxShadow: "inset 0 0 0 1px #006097",
                    padding: "10 16px",
                    marginLeft: "50px",
                    width: "80px",
                    font: "400 13.3333px Arial",
                    width: "80px"
                  }}
                >
                  CONNECT
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ maxHeight: "320px" }}>
            <div class="card" style={{ height: "320px" }}>
              <img
                class="card-img-top"
                src="Kriti_Jar.jpg"
                alt="Card image"
                style={{
                  width: "50%",
                  height: "50%",
                  marginTop: "20px",
                  marginLeft: "50px"
                }}
              />
              <div class="card-body">
                <h4
                  class="card-title"
                  style={{
                    textAlign: "center"
                  }}
                >
                  John Doe
                </h4>
                <p
                  class="card-text"
                  style={{
                    textAlign: "center",
                    lineHeight: "1.6rem!important",
                    maxHeight: "3.2rem",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    color: "rgba(0,0,0,.6)"
                  }}
                >
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <br />
                <br />
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    color: "#006097",
                    boxShadow: "inset 0 0 0 1px #006097",
                    padding: "10 16px",
                    marginLeft: "50px",
                    width: "80px",
                    font: "400 13.3333px Arial"
                  }}
                >
                  CONNECT
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ maxHeight: "320px" }}>
            <div class="card" style={{ height: "320px" }}>
              <img
                class="card-img-top"
                src="Kriti_Jar.jpg"
                alt="Card image"
                style={{
                  width: "50%",
                  height: "50%",
                  marginTop: "20px",
                  marginLeft: "50px"
                }}
              />
              <div class="card-body">
                <h4
                  class="card-title"
                  style={{
                    textAlign: "center"
                  }}
                >
                  John Doe
                </h4>
                <p
                  class="card-text"
                  style={{
                    textAlign: "center",
                    lineHeight: "1.6rem!important",
                    maxHeight: "3.2rem",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    color: "rgba(0,0,0,.6)"
                  }}
                >
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <br />
                <br />
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    color: "#006097",
                    boxShadow: "inset 0 0 0 1px #006097",
                    padding: "10 16px",
                    width: "80px",
                    marginLeft: "50px",
                    font: "400 13.3333px Arial"
                  }}
                >
                  CONNECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Recommendations;
