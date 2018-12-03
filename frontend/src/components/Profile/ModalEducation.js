import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import MainNavbar from "../Common/MainNavbar";

import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-responsive-modal";
import { YearPicker, MonthPicker } from "react-dropdown-date";
import Countries from "react-select-country";
import { connect } from "react-redux";
import { profile } from "../../action/profile";

const styles = {
  width: "500px",
  horizontalAlign: "middle",
  maxHeight: "calc(100vh - 210px)",
  overflowY: "auto",
  height: "350px"
};

class ModalEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditEducation: false,
      EdufromYear: null,
      EdutoYear: null
    };

    this.openModalEditEducation = this.openModalEditEducation.bind(this);
    this.closeModalEditEducation = this.closeModalEditEducation.bind(this);
  }

  openModalEditEducation() {
    this.setState({ openEditEducation: true });
  }
  closeModalEditEducation() {
    this.setState({ openEditEducation: false });
  }

  onSelectCountry(event) {
    this.state.selectedCountry = {
      id: event.target.value,
      name: event.target.options[event.target.selectedIndex].text
    };
    console.log("Selected Country", this.state.selectedCountry);
  }
  onSubmit(values) {
    console.log("Onsubmit values of education", values);
    //this.props.signIn(values);
    const data = {
      values,
      EduFromYear: this.state.EduFromYear,
      EduToYear: this.state.EdutoYear
    };
    console.log("Onsubmit data of education", data);
    this.props.profile(data);
    this.closeModalEditEducation();
  }

  render() {
    const { openEditEducation } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="ml-5 mr-5 mt-5">
          {localStorage.getItem("id") == this.props.match.params.id && (
            <svg
              cursor="pointer"
              onClick={this.openModalEditEducation}
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              class="artdeco-icon"
              focusable="false"
            >
              <path
                d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                class="large-icon"
                style={{ fill: "#006097" }}
              />
            </svg>
          )}
          {/* <button onClick={this.openModalEditEducation} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Education  </button> */}
          {localStorage.getItem("id") == this.props.match.params.id && (
            <h5 class="font-weight-light">Education</h5>
          )}
          <Modal
            data-dismiss="modal"
            open={openEditEducation}
            onClose={this.closeModalEditEducation}
            center
            dialogClassName="my-modal"
          >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h2 style={{ marginTop: "50px", marginBottom: "25px" }}>
                Edit Education
              </h2>
              <hr />
              <div style={styles}>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:Boston University"
                    label="School *"
                    name="educationSchool"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:Bachelor's"
                    label="Degree"
                    name="educationDegree"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:Business"
                    label="Field of Study"
                    name="educationFieldofStudy"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Grade"
                    name="educationGrade"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Activities and socities"
                    name="educationActivities"
                    component={this.renderField}
                  />
                </div>

                <div style={{ marginTop: "20px" }}>
                  From
                  <YearPicker
                    className="form-control form-control-lg my-modal"
                    defaultValue={"Year"}
                    start={1959}
                    end={2018}
                    reverse
                    required={true}
                    value={this.state.year}
                    onChange={year => {
                      this.setState({ EduFromYear: year });
                      console.log("Year onchange", year);
                    }}
                  />
                  To
                  <YearPicker
                    className="form-control form-control-lg"
                    defaultValue={"Year"}
                    start={1959}
                    end={2018}
                    reverse
                    required={true}
                    value={this.state.year}
                    onChange={year => {
                      this.setState({ EdutoYear: year });
                      console.log("Year onchange", year);
                    }}
                  />
                </div>

                <div style={{ marginTop: "20px" }} />

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Description"
                    name="educationDescription"
                    component={this.renderField}
                  />
                </div>
              </div>

              <div class="ml-5 mr-5 mt-5 pb-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  id="form-submit"
                  tabindex="4"
                  component={this.renderField}
                >
                  Save
                </button>
              </div>

              <div class="ml-5 mr-5">
                <button
                  type="reset"
                  className="btn btn-primary btn-lg btn-block"
                  id="form-submit"
                  tabindex="4"
                  component={this.renderField}
                >
                  Delete
                </button>
              </div>
            </form>
          </Modal>
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
    //console.log("className : " + className);
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

const mapStateToProps = state => {
  //console.log("Current State : " + JSON.stringify(state.login.authLogin));
  return {
    //   authLogin: state.login.authLogin
  };
};

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.educationSchool) {
    errors.educationSchool = "Required";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ModalEducationForm"
})(
  connect(
    mapStateToProps,
    { profile }
  )(withRouter(ModalEducation))
);
