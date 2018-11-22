import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style1 from "./Invitations.css.js";
import myStyles from "../Connections.css";
import { register } from "../../../serviceWorker";


class Invitations extends Component {
  constructor(props) {
    super(props);
    debugger;
  }
  componentDidMount() {
    console.log("component mount");
    this.props.get_invitations();
  }
  render() {
    const recommendations = this.props.recommendations;

    let data =
      recommendations &&
      recommendations.map((recommendation, i) => 
       {
return(<div
  className="row"
  style={{
    height: "130px",
    marginTop: "10px"
  }}
>
  <div className="col-md-2">
    <img
      src="Kriti_Jar.jpg"
      style={style1.img}
    />
  </div>
  <div
    className="col-md-5"
    style={{
      marginLeft: "20px"
    }}
  >
    <span>
      <h2>Kriti Jar</h2>
    </span>
    <br />

    <span
      style={style1.desc}
    >
      Actively seeking summer internship opportunities\Graduate computer
      science
    </span>
  </div>
  <div className="col-md-4" style={{ marginTop: "50px" }}>
    <a
      href="#"
      class="btn btn-primary"
      style={style1.accept}
    >
      ACCEPT
    </a>
    <a
      href="#"
      class="btn btn-primary"
      style={style1.ignore}
    >
      IGNORE
    </a>
  </div>
</div>
)

       }
    return (
      <div className="row" style={myStyles.invitations}>
        <div
          className="row"
          style={style1.div1}
        >
          <h3
            style={style1.h3}
          >
            Invitations
          </h3>
        </div>
                     </div>
    );
  }
}
export default Invitations;
