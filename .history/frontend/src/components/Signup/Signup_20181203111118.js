import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../action/signup";
import * as CONST from "./../../Const/";

class Signup extends Component {
  onSubmit(values) {
    console.log(values);
    this.props.signup(values);
  }

  render() {
    var submitFormError = "";
    if (this.props.status == "success") {
      this.props.history.push("/signin");
    } else if (this.props.status == "error") {
      submitFormError = (
        <h5 class="text-danger text-center">{this.props.msg}</h5>
      );
    }

    const { handleSubmit } = this.props;
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <h1 class="text-center">Be great at what you do</h1>
        <h2 class="font-weight-light text-center">Get started - it's free.</h2>
        {submitFormError}
        <div class="row">
          <div class="col" />
          <div class="col">
            <div>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control"
                    placeholder="First Name"
                    label="First Name"
                    name="first_name"
                    type="text"
                    component={this.renderField}
                  />
                </div>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control"
                    placeholder="Last Name"
                    label="Last Name"
                    name="last_name"
                    type="text"
                    component={this.renderField}
                  />
                </div>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control"
                    placeholder="Enter email"
                    label="Email Address"
                    name="username"
                    type="email"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 ">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Password"
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 ">
                  <Field
                    className="form-control pull-right"
                    label="Are you a Recruiter?"
                    name="isRecruiter"
                    type="checkbox"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pt-5">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="form-submit"
                    tabindex="4"
                    component={this.renderField}
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col" />
        </div>
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
    status: state.signup.status,
    msg: state.signup.msg
  };
};

//Validation
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (!values.last_name) {
    errors.last_name = "Required";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

//export default Signin;
export default reduxForm({
  validate,
  form: "SignupForm"
})(
  connect(
    mapStateToProps,
    { signup }
  )(withRouter(Signup))
);
