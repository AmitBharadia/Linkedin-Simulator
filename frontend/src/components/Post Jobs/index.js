import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import './postJobs.css'
import handleSubmit from "redux-form/es/handleSubmit";
import Link from "react-router-dom/es/Link";

class postJob extends Component{

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

    render()
    {
        return(
            <div className="searchJobs">
                <nav className="navbar navbar-toggler navbar-expand-md navbar-light">
                    <div className="container">
                        <img
                            className="lazy-loaded mr-auto pl-5"
                            alt="LinkedIn"
                            src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
                        />
                        <div className="collapse navbar-collapse" id="navbar6"> <a className="navbar-text text-light d-none d-md-block" href="#">
                          <h3> JOBS </h3>
                        </a>
                        <ul className="navbar-nav mx-auto">
                          <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Home</h3></a> </li>
                            <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Post a Job</h3></a> </li>
                          <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Linkedin.com</h3></a> </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Log in</h3></a> </li>
                        </ul>
                      </div>
                    </div>
                </nav>
                <hr className="hr"></hr>
                <div className="notes py-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-light">
                                <h1>Reach the quality candidates you can’t find anywhere else.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jobs text-center">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto col-md-6 col-10 bg-white p-5">
                                    <form>
                                        <div className="ml-2 mr-2 mt-4 pt-2">
                                        <Field
                                            className="form-control"
                                            placeholder="Company"
                                            name="company"
                                            type="text"
                                            component={this.renderField}
                                        />
                                        </div>
                                        <div className="ml-2 mr-2 mt-4 pt-2">
                                        <Field
                                            className="form-control"
                                            placeholder="Job Title"
                                            name="position"
                                            type="text"
                                            component={this.renderField}
                                        />
                                        </div>
                                        <div className="ml-2 mr-2 mt-4 pt-2">
                                        <Field
                                            className="form-control"
                                            placeholder="Job Address or city"
                                            name="location"
                                            type="text"
                                            component={this.renderField}
                                        />
                                        </div>
                                        <div className="ml-2 mr-2 mt-5 pt-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
                                            id="searchJob"
                                            tabIndex="4"
                                            component={this.renderField}
                                        >
                                            Start Job Post
                                        </button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
    <div className="container">
      <div className="row">
        <div className="p-3 col-md-8">
          <div className="blockquote mb-0">
            <p>"I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks."</p>
            <div className="blockquote-footer">
              <b>J. W. Goethe</b>, CEO at Werther Inc.</div>
          </div>
        </div>
          <div className="col-md-2 mx-auto p-3"> <img className="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-2.svg" /> </div>
      </div>
    </div>
  <div className="text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>I feel the charm of existence in this spot.</h1>
        </div>
      </div>
    </div>
  </div>
    <div className="container">
      <div className="row">
        <div className="p-3 col-md-8">
          <div className="blockquote mb-0">
            <p>"I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks."</p>
            <div className="blockquote-footer">
              <b>J. W. Goethe</b>, CEO at Werther Inc.</div>
          </div>
        </div>
          <div className="col-md-2 mx-auto p-3"> <img className="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-2.svg" /></div>
      </div>
    </div>
</div>
    )
    }


}

function validate(values) {

    const errors = {};

    // Validate the inputs from 'values'
    if (!values.username) {
        errors.username = "Enter an username";
    }
    if (!values.password) {
        errors.password = "Enter password";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'postJobs'
})(postJob);