import React, { Component } from "react";
import "./postJobs.css";
import Link from "react-router-dom/es/Link";
import { browserHistory } from "react-router";

class postJobsNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggler navbar-expand-md navbar-light">
          <div className="container">
            <img
              className="lazy-loaded mr-auto pl-5"
              alt="LinkedIn"
              src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
            />
            <div className="collapse navbar-collapse" id="navbar6">
              {" "}
              <a className="navbar-text text-light d-none d-md-block" href="#">
                <h3> JOBS </h3>
              </a>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/myJobPosts">
                    {" "}
                    <a className="nav-link text-light">
                      <h3>Home</h3>
                    </a>
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link to="/postJob">
                    <a className="nav-link text-light">
                      <h3>Post a Job</h3>
                    </a>
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link to="/home">
                    {" "}
                    <a className="nav-link text-light">
                      <h3>Linkedin.com</h3>
                    </a>{" "}
                  </Link>
                </li>
              </ul>
              {localStorage.getItem("type") === "recruiter" && (
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <h3 style={{ color: "white" }}>
                        {" "}
                        {localStorage.getItem("username")}{" "}
                      </h3>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item">
                        <Link to="/home">
                          <h4>Home</h4>
                        </Link>
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={e => {
                          localStorage.clear();
                          browserHistory.push("/signin");
                        }}
                      >
                        <h4>Logout</h4>
                      </a>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default postJobsNav;
