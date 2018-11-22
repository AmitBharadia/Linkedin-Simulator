import React, { Component } from "react";
import { Field, reduxForm, change } from "redux-form";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../Post Jobs/postJobs.css";

class JobFiltersNavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggler navbar-expand-md  bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar6">
              {" "}
              <form
              class="form-inline"
             // onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
            <div class="mr-5">
              <Field
                className="form-control form-control-lg "
                placeholder="Search"
                type="search"
                name="location"
                placeholder="Location"
                aria-label="Search"
                component={this.renderField}
              />
              </div>
            <Field
                className="form-control form-control-lg ml-3"
                placeholder="Search"
                type="search"
                name="company"
                placeholder="Company"
                aria-label="Search"
                component={this.renderField}
              />
            
           
              <ul className="navbar-nav mx-auto">
                <li class="nav-item dropdown mr-2 ml-2">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h3> Company  </h3>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name"
                        label="FaceBook"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                    <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name1"
                        label="Google"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                    <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name1"
                        label="Twitter"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                  </div>
                </li>
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
                    <h3>Experience  </h3>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                      <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name"
                        label="Internship"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                      <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name"
                        label="Entry"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                    <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name1"
                        label="Medium"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                    <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name1"
                        label="Expert"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h3>Location  </h3>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name"
                        label="San Jose"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                    <a class="dropdown-item" href="#">
                    <Field
                        className="form-control form-control-lg"
                        placeholder="Search"
                        type="checkbox"
                        name="name1"
                        label="San Diego"
                        aria-label="Search"
                        component={this.renderField}
                      />
                    </a>
                  </div>
                </li>
              </ul>
              <button class="btn btn-outline-primary btn-lg ml-5" type="submit">
                Search
              </button>
              </form>
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
    const className = `form-group  ${
      touched && error ? "has-danger" : ""
    }`;
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

//export default JobFiltersNavBar;
//Get the current state of the signup page
const mapStateToProps = state => {
  return {};
};

//export default Signin;
export default reduxForm({
  form: "FiltersSearchForm"
})(
  connect(
    mapStateToProps,
    {}
  )(withRouter(JobFiltersNavBar))
);
