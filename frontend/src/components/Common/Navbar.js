import React, { Component } from "react";
import cookie from "react-cookies";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <img
          class="lazy-loaded mr-auto pl-5"
          alt="LinkedIn"
          src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
        />
      </nav>
    );
  }
}

export default Navbar;
