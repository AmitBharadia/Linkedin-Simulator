import React, { Component } from "react";
import { Field, reduxForm, change } from "redux-form";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../Post Jobs/postJobs.css";
import * as myactions from "../../action/allJobs";

class JobFiltersNavBar extends Component {

  onSubmit(values) {
    console.log(values);
    // var companyList = []
    // if (values["Google"]) {
    //   companyList.push("google")
    // }
    // values["company"] = companyList;
    this.props.filter(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <nav className="navbar navbar-toggler navbar-expand-lg  bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbar6">
              {" "}
              <ul className="navbar-nav mx-auto ">
                <li class="nav-item">
                  <a class="nav-link pull-left text-secondary" href="#" onClick={() => {
                    this.props.history.push("/savedJobs");
                  }}>
                    <h3>
                      <u>Saved Jobs </u>
                    </h3>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link mr-5 text-secondary" href="#" onClick={() => {
                    this.props.history.push("/apply");
                  }}>
                    <h3>
                      <u>Applied Jobs</u>{" "}
                    </h3>
                  </a>
                </li>
                <form
                  class="form-inline"
                  onSubmit={handleSubmit(this.onSubmit.bind(this))}
                >
                  <Field
                    className="form-control form-control-lg"
                    name="position"
                    placeholder="Search Jobs"
                    component={this.renderField}
                  />
                  <p class="mr-5" />
                  <Field
                    className="form-control form-control-lg"
                    name="location"
                    placeholder="Location"
                    component={this.renderField}
                  />
                  <p class="mr-5" />
                  <Field
                    className="form-control form-control-lg"
                    name="company"
                    placeholder="Company"
                    component={this.renderField}
                  />

                  <li class="nav-item dropdown mr-4">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <h3>Experience </h3>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        <Field
                          className="form-control form-control-lg"
                          placeholder="Search"
                          type="radio"
                          name="experience"
                          label=" Intern "
                          value="intern"
                          component={this.renderField}
                        />
                      </a>
                      <a class="dropdown-item" href="#">
                        <Field
                          className="form-control form-control-lg"
                          placeholder="Search"
                          type="radio"
                          name="experience"
                          label="Entry"
                          value="entry"
                          component={this.renderField}
                        />
                      </a>
                      <a class="dropdown-item" href="#">
                        <Field
                          className="form-control form-control-lg"
                          placeholder="Search"
                          type="radio"
                          name="experience"
                          label="Medium"
                          value="medium"
                          component={this.renderField}
                        />
                      </a>
                      <a class="dropdown-item" href="#">
                        <Field
                          className="form-control form-control-lg"
                          placeholder="Search"
                          type="radio"
                          name="experience"
                          label="Expert"
                          value="expert"
                          component={this.renderField}
                        />
                      </a>
                    </div>
                  </li>

                  <button
                    class="btn btn-outline-primary btn-lg ml-5"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  //Define component that you want to render
  renderField(field) {
    const {
      meta: { touched, error },
      type,
      placeholder,
      value
    } = field;
    const className = `form-group  ${touched && error ? "has-danger" : ""}`;
    console.log("className : " + className);
    return (
      <div class="form-group pull-left ml-0 has-danger">
        <label>{field.label}</label>
        <input
          class="form-control  border border-dark"
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


export default reduxForm({
  form: "FiltersSearchForm"
})(
  connect(
    null,
    myactions
  )(withRouter(JobFiltersNavBar))
);
