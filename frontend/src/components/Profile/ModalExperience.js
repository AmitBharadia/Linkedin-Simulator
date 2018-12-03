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

class ModalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditExperience: false,
      fromYear: null,
      fromMonth: null,
      toMonth: null,
      toYear: null
    };

    this.openModalEditExperience = this.openModalEditExperience.bind(this);
    this.closeModalEditExperience = this.closeModalEditExperience.bind(this);
  }

  openModalEditExperience() {
    this.setState({ openEditExperience: true });
  }
  closeModalEditExperience() {
    this.setState({ openEditExperience: false });
  }

  onSubmit(values) {
    console.log("Onsubmit values of experience", values);
    //this.props.signIn(values);
    const data = {
      values,
      ExpFromMonth: this.state.fromMonth,
      ExpFromYear: this.state.fromYear,
      ExpToMonth: this.state.toMonth,
      ExpToYear: this.state.toYear
    };
    console.log("Onsubmit data of experience", data);
    this.props.profile(data);
  }

  render() {
    const { openEditExperience } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="ml-5 mr-5 mt-5">
          {localStorage.getItem("id") == this.props.match.params.id && (
            <svg
              cursor="pointer"
              onClick={this.openModalEditExperience}
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
              />{" "}
            </svg>
          )}
          {localStorage.getItem("id") == this.props.match.params.id && (
            <h5 class="font-weight-light">Experience</h5>
          )}

          {/* <button onClick={this.openModalEditExperience} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Experience</button> */}

          <Modal
            open={openEditExperience}
            onClose={this.closeModalEditExperience}
            center
            dialogClassName="my-modal"
          >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h2 style={{ marginTop: "50px", marginBottom: "25px" }}>
                Edit Experience
              </h2>
              <hr />
              <div style={styles}>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:Manager"
                    label="Title*"
                    name="experienceTitle"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:Microsoft"
                    label="Company*"
                    name="experienceCompany"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Ex:London, United Kingdom"
                    label="Location"
                    name="experienceLocation"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  From
                  <MonthPicker
                    className="form-control form-control-lg"
                    defaultValue={"Month"}
                    monthFormat="long"
                    onChange={month => {
                      this.setState({ fromMonth: month });
                      console.log("Month onchange", month);
                    }}
                  />
                  <YearPicker
                    className="form-control form-control-lg my-modal"
                    defaultValue={"Year"}
                    start={1959}
                    end={2018}
                    reverse
                    required={true}
                    value={this.state.year}
                    onChange={year => {
                      this.setState({ fromYear: year });
                      console.log("Year onchange", year);
                    }}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  To
                  <MonthPicker
                    className="form-control form-control-lg"
                    defaultValue={"Month"}
                    monthFormat="long"
                    onChange={month => {
                      this.setState({ toMonth: month });
                      console.log("Month onchange", month);
                    }}
                  />
                  <YearPicker
                    className="form-control form-control-lg my-modal"
                    defaultValue={"Year"}
                    start={1959}
                    end={2018}
                    reverse
                    required={true}
                    value={this.state.year}
                    onChange={year => {
                      this.setState({ toYear: year });
                      console.log("Year onchange", year);
                    }}
                  />
                </div>

                {/* <span style={{'display':'block'}}>
                            <textarea onChange={this.questionDescriptionHandler} placeholder="Tell us more about your query" rows="5" cols="10" style={{'margin-bottom':'10px','width': '100%','padding':  '9px 14px','font-size':  '18px','border-radius':  '0px','line-height':  '1.33','margin-top':  '16px'}}></textarea>
            </span>


            <span style={{'justifyContent':'center','display':'flex'}}>
            <input type="submit" value="Not Now" onClick={this.closeModal} style={{'vertical-align':'middle','width':'40%','height':'44px','background-color':'light-grey','border-color':'light-grey','font-size':'18px','color':'black','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>
            <input type="submit"  value="Send" onClick={this.sendQuestion}  style={{'margin-left':'5px','vertical-align':'middle','width':'40%','height':'44px','background-color':'#ff8a00','border-color':'#ff8a00','font-size':'18px','color':'#FFE','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>

            </span> */}

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Headline"
                    name="experienceHeadline"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Description"
                    name="experienceDescription"
                    component={this.renderField}
                  />
                </div>

                {/* <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                
                                type="checkbox"
                                component={this.renderField}
                            />

                            
        </div>*/}
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
                  type="submit"
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
  if (!values.experienceTitle) {
    errors.experienceTitle = "Required";
  }
  if (!values.experienceCompany) {
    errors.experienceCompany = "Required";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ModalExperienceForm"
})(
  connect(
    mapStateToProps,
    { profile }
  )(withRouter(ModalExperience))
);
