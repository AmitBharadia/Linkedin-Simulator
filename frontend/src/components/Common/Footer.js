import React, { Component } from "react";
import cookie from "react-cookies";

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: "purple",
      fontSize: "20px",
      color: "white",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%"
    };

    const phantomStyle = {
      display: "block",
      padding: "20px",
      height: "60px",
      width: "100%"
    };
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
    );
  }
}

export default Footer;
