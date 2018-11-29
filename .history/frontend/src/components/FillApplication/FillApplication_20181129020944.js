import React, { Component } from "react";
import Navbar from "../Common/Navbar";
import { dummy } from "../../action/dummy";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";
import Countries from "react-select-country";
import { YearPicker, MonthPicker } from "react-dropdown-date";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { Link, withRouter } from "react-router-dom";

class FillApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      fromYear: null,
      fromMonth: null,
      toMonth: null,
      toYear: null,
      EduFromYear: null,
      EdutoYear: null
    };
  }

  // onSelectCountry(event){
  //     this.state.selectedCountry={
  //          id:event.target.value,
  //          name:event.target.options[event.target.selectedIndex].text
  //     }
  //     console.log("Selected Country",this.state.selectedCountry);
  // }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  onSubmit(values) {
    console.log("Onsubmit values of fill application", values);
    //this.props.signIn(values);
    const data = {
      values,
      fromMonth: this.state.fromMonth,
      toMonth: this.state.toMonth,
      fromYear: this.state.fromYear,
      toYear: this.state.toYear,
      EduFromYear: this.state.EduFromYear,
      EdutoYear: this.state.EdutoYear
    };
    console.log("Onsubmit values of dataaaaaaaa fill application", data);
  }

  render() {
    const { country, region } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Navbar />
        <div class="row" style={{ marginBottom: "100px" }} />

        <h2 style={{ marginLeft: "20px" }}>
          Please fill the information as asked for in the application.
        </h2>
        <p style={{ marginLeft: "20px" }}>
          NOTE: The information would be monitored and kept into database for
          further screening. Please be assured to have authentic information
        </p>
        <h2>Company Name</h2>
        <h2>Job ID</h2>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="First Name"
              label="First Name *"
              name="firstName"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="Middle Name"
              label="Middle Name "
              name="middleName"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="Last Name"
              label="Last Name *"
              name="lastName"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder=""
              label="Address Line 1"
              name="address1"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder=""
              label="Address Line 2"
              name="address2"
              type="text"
              component={this.renderField}
            />
          </div>

          <div class="ml-5 mr-5 mt-5 pb-3" style={{ width: "30%" }}>
            {/* <Countries ref="country" name="country" empty=" -- Select country --" onChange={(e)=>this.onSelectCountry(e)} style={{'width':'100%'}}/> */}
            <CountryDropdown
              name="country"
              value={country}
              onChange={val => this.selectCountry(val)}
            />
          </div>

          <div class="ml-5 mr-5 mt-5 pb-3" style={{ width: "100%" }}>
            <RegionDropdown
              blankOptionLabel="Select Region"
              country={country}
              value={region}
              onChange={val => this.selectRegion(val)}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder=""
              label="Zip/Postal Code*"
              name="zipcode"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="123-456-7890"
              label="Primary Phone *"
              name="primaryPhone"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="(123)-456-7890"
              label="Work Phone"
              name="workPhone"
              type="text"
              component={this.renderField}
            />
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <Field
              className="form-control form-control-lg"
              placeholder="abc@xyz.com"
              label="Email *"
              name="email"
              type="text"
              component={this.renderField}
            />
          </div>
          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <h2>Add Experience</h2>
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

            <div class="ml-5 mr-5 mt-5 pb-3">
              <Field
                className="form-control form-control-lg"
                placeholder=""
                label="Description"
                name="experienceDescription"
                component={this.renderField}
              />
            </div>
          </div>

          <div className="ml-5 mr-5 mt-5" style={{ width: "30%" }}>
            <h2>Add Education</h2>
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
          </div>

          <div
            className="ml-5 mr-5 mt-5"
            style={{ width: "30%", marginBottom: "50px" }}
          >
            <Field
              className="form-control form-control-lg"
              placeholder="Attach Resume"
              label="Add Resume"
              name="resume"
              type="file"
              component={this.renderField}
            />
          </div>

          <div
            class="ml-5 mr-5"
            style={{ width: "20%", marginBottom: "100px" }}
          >
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              id="form-submit"
              tabindex="4"
              component={this.renderField}
            >
              Submit
            </button>
          </div>
        </form>
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

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.zipcode) {
    errors.zipcode = "Required";
  } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.Zipcode)) {
    errors.Zipcode = "Invalid zip code";
  }

  if (!values.primaryPhone) {
    errors.primaryPhone = "Required";
  } else if (/^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(values.primaryPhone)) {
    errors.primaryPhone = "Enter valid numbers";
  }
  if (!values.experienceCompany) {
    errors.experienceCompany = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.experienceTitle) {
    errors.experienceTitle = "Required";
  }
  if (!values.educationSchool) {
    errors.educationSchool = "Required";
  }
  if (!values.experienceTitle) {
    errors.experienceTitle = "Required";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "FillApplicationForm"
})(
  connect(
    null,
    { dummy }
  )(withRouter(FillApplication))
);
