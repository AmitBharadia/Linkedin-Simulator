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
                <a href="#" class="btn btn-primary" style={style1.connect}>
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
                style={style1.card}
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
                <a href="#" class="btn btn-primary" style={style1.connect}>
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
                <a href="#" class="btn btn-primary" style={style1.connect}>
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
