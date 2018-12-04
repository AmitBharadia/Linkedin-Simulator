import React, { Component } from "react";
import "./common.css";
import cookie from "react-cookies";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { searchPeople } from "../../action/searchPeople";
import { logout } from "../../action/logout";
import axios from "axios";
import * as CONST from "../../Const/index";


class MainNavbar extends Component {
  constructor(props) {
    super();
    this.state = {
      isDeleted: false
    };
  }

  deleteProfile() {
    axios
      .post(CONST.ROOT_URL + "/deleteProfile", {
        id: localStorage.getItem("id")
      })
      .then(res => {
        console.log("Status: " + res.status);
        console.log("Data: " + JSON.stringify(res.data));
        if (res.status == 200) {
          this.setState({
            isDeleted: true
          });
          this.props.logout();
        }
      });
  }

  onSubmit(values) {
    console.log(values);
    this.props.searchPeople(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    if(!localStorage.getItem("id") ){
      this.props.history.push("/signin");
    }
    var redirectVal = "";
    if (this.state.isDeleted) {
      redirectVal = <Redirect to="/signin" />;
    }
    console.log("Redirect: " + this.state.isDeleted);
    return (
      <div className="MainNavbar">
        {redirectVal}
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark pb-0 pt-0">
          <a class="navbar-brand pt-3" href="#">
            <img
              className="lazy-loaded mr-auto pb-0 pt-0"
              alt="LinkedIn"
              src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
            />
          </a>
          <div class="ml-5 ">
            <form
              class="form-inline"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              <Field
                className="form-control form-control-lg"
                placeholder="Search"
                type="search"
                name="name"
                placeholder="Search"
                aria-label="Search"
                component={this.renderField}
              />
              <button class="btn btn-outline-light btn-lg ml-3" type="submit">
                Search
              </button>
            </form>
          </div>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item pb-0 pt-0">
              <a
                className="nav-link text-light text-center pb-0 pt-0"
                href="#"
                onClick={() => {
                  browserHistory.push("/home");
                }}
              >
                <span
                  id="feed-tab-icon"
                  class="nav-item__icon"
                  lang="en"
                  aria-role="presentation"
                >
                  <li-icon
                    aria-hidden="true"
                    type="nav-small-home-icon"
                    color="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="22px"
                      height="22px"
                      x="0"
                      y="0"
                      preserveAspectRatio="xMinYMin meet"
                      class="nav-icon "
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z"
                        class="active-item svg-icon"
                      //style={"fill-opacity: 1"}
                      />
                      <path
                        d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z"
                        class="inactive-item svg-icon"
                      />
                    </svg>
                  </li-icon>
                </span>
                <h4>Home</h4>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link text-light text-center pb-0 pt-0" href="#" onClick={() => {
                browserHistory.push("/connections");
              }}>
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon "
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z"
                    class="active-item svg-icon"
                  />
                  <path
                    d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z"
                    class="inactive-item svg-icon"
                  />
                </svg>
                <h4>My Networks</h4>

              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link text-light text-center pb-0 pt-0" href="#" onClick={e => {
                localStorage.getItem("type") == "recruiter"
                  ? browserHistory.push("/postJob")
                  : browserHistory.push("/allJobs");

              }}>
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z"
                    class="active-item svg-icon"
                  />
                  <path
                    d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z"
                    class="inactive-item svg-icon"
                  />
                </svg>

                <h4>
                  {" "}
                  {localStorage.getItem("type") == "recruiter"
                    ? "Post Jobs"
                    : "Jobs"}
                </h4>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}

              <a className="nav-link text-light text-center pt-0 pb-0" href="#" onClick={() => {
                browserHistory.push("/messaging")
              }}>

                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z"
                    class="active-item svg-icon"
                  />
                  <path
                    d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z"
                    class="inactive-item svg-icon"
                  />
                </svg>
                <h4>Messaging</h4>


              </a>{" "}
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light  pt-0 pb-0"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <h4>{localStorage.getItem("first_name") || "Me"}</h4>
              </a>
              <div class="dropdown-menu">

                <a
                  class="dropdown-item"
                  href="#"
                  onClick={e => {
                    browserHistory.push("/profile/" + localStorage.getItem("id"));
                  }}
                >
                  <h5>My Profile</h5>
                </a>
                {localStorage.getItem("type") == "recruiter" && (
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={e => {
                      browserHistory.push("/admin");
                    }}
                  >
                    <h5>Dashboard</h5>
                  </a>
                )}

                <a
                  class="dropdown-item"
                  href="#"
                  onClick={e => {
                    localStorage.clear();

                    browserHistory.push("/signin");
                  }}
                >
                  <h5>Log out</h5>
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={e => {
                    this.deleteProfile();
                  }}
                >
                  <h5>Delete Profile</h5>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  //Define component that you want to render
  renderField(field) {
    //console.log("Field Details : " + JSON.stringify(field));
    const {
      meta: { touched, error },
      type,
      placeholder,
      value
    } = field;
    const className = `form-group form-control-lg ${
      touched && error ? "has-danger" : ""
      }`;
    console.log("className : " + className);
    return (
      <div class="form-group form-control-lg has-danger">
        <label>{field.label}</label>
        <input
          class="form-control form-control-lg border border border-dark"
          type={type}
          placeholder={placeholder}
          value={value}
          {...field.input}
        />
        <div class={{ className }}>{touched ? error : ""}</div>
      </div>
    );
  }
}

//Get the current state of the signup page
const mapStateToProps = state => {
  return {
    status: state.signin.status,
    msg: state.signin.msg
  };
};

//export default Signin;
export default reduxForm({
  form: "ConnectionSearchForm"
})(
  connect(
    mapStateToProps,
    { searchPeople, logout }
  )(withRouter(MainNavbar))
);
