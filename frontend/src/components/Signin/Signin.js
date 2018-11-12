import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";

class Signin extends Component {
  onSubmit(values) {
    console.log(values);
    this.props.signIn(values);
  }

  render() {
    var submitFormError = "";

    if (this.props.status == "success") {
      this.props.history.push("/home");
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
        <h1 class="text-center">Welcome back</h1>
        <h2 class="font-weight-light text-center">
          Don't miss your next opportunity. Sign in to stay updated on your
          professional world.
        </h2>
        {submitFormError}
        <div class="row">
          <div class="col" />
          <div class="col">
            <div>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <div class="ml-5 mr-5 mt-5 pt-5">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="form-submit"
                    tabindex="4"
                    component={this.renderField}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col" />
        </div>

        <h5 class=" text-center pt-5">
          New to LinkedIn?{" "}
          <a
            href=""
            onClick={e => {
              this.props.history.push("/signup");
            }}
          >
            Join now
          </a>
        </h5>
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

//Validation
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
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
  return errors;
}

//export default Signin;
export default reduxForm({
  validate,
  form: "SigninForm"
})(
  connect(
    mapStateToProps,
    { signIn }
  )(withRouter(Signin))
);
