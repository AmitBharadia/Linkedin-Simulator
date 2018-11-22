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
      recommendations.map((recommendation, i) => {
       {


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
        <div
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
              style={{
                textAlign: "center",
                lineHeight: "1.6rem!important",
                maxHeight: "3.2rem",
                fontSize: "1.2rem",
                fontWeight: "400",

                color: "rgba(0,0,0,.6)"
              }}
            >
              Actively seeking summer internship opportunities\Graduate computer
              science
            </span>
          </div>
          <div className="col-md-4" style={{ marginTop: "50px" }}>
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
                font: "400 13.3333px Arial"
              }}
            >
              ACCEPT
            </a>
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
                marginLeft: "40px",
                font: "400 13.3333px Arial"
              }}
            >
              IGNORE
            </a>
          </div>
        </div>
        <div
          className="row"
          style={{
            height: "130px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <div className="col-md-2">
            <img
              src="Kriti_Jar.jpg"
              style={{
                width: "100%",
                height: "90%",

                marginLeft: "30px",
                border: "solid 1px lightgray"
              }}
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
              style={{
                textAlign: "center",
                lineHeight: "1.6rem!important",
                maxHeight: "3.2rem",
                fontSize: "1.2rem",
                fontWeight: "400",

                color: "rgba(0,0,0,.6)"
              }}
            >
              Actively seeking summer internship opportunities\Graduate computer
              science
            </span>
          </div>
          <div className="col-md-4" style={{ marginTop: "50px" }}>
            <a
              href="#"
              class="btn btn-primary"
              style={{
                textAlign: "center",
                backgroundColor: "white",
                color: "#006097",
                width: "80px",
                boxShadow: "inset 0 0 0 1px #006097",
                padding: "10 16px",

                font: "400 13.3333px Arial"
              }}
            >
              ACCEPT
            </a>
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
                marginLeft: "40px",
                font: "400 13.3333px Arial"
              }}
            >
              IGNORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Invitations;
