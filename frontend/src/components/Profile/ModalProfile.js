import React, { Component } from "react";
import Dropzone from "react-dropzone";

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

class ModalProfile extends Component {
  constructor(props) {
    super(props);
    console.log("Gettign the data from props to moadal ", props.profileData);

    this.state = {
      openEditProfile: false
    };

    this.openModalEditProfile = this.openModalEditProfile.bind(this);
    this.closeModalEditProfile = this.closeModalEditProfile.bind(this);
  }

  openModalEditProfile() {
    this.setState({ openEditProfile: true });
  }
  closeModalEditProfile() {
    this.setState({ openEditProfile: false });
  }

  onSelectCountry(event) {
    this.state.selectedCountry = {
      id: event.target.value,
      name: event.target.options[event.target.selectedIndex].text
    };
    console.log("Selected Country", this.state.selectedCountry);
  }
  onSubmit(values) {

    console.log(values);
    var form_data = new FormData();
    var files;
    Object.keys(values).forEach(function(key) {
      if (key != "files") form_data.append(key, values[key]);
      else {
        files = values[key];
      }
    });
    form_data.append("id", localStorage.getItem("id"));
    if (files) {
      files.forEach(file => {
        form_data.append("files", file);
      });
    }

    // We can not print out the form data values
    this.props.profile(form_data);
  }

  render() {
    const {
      openEditProfile,
      openEditExperience,
      openEditEducation
    } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="ml-5 mr-5 mt-5">
          {/* <svg cursor="pointer" onClick={this.openModalEditProfile} viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z" class="large-icon" style={{"fill": "currentColor"}}></path></svg> */}
          {/* <button onClick={this.openModalEditProfile} style={{'min-height': '48px','width': '40%','position': 'relative','backgroundColor': '#f4a742','borderColor': '#f4a742','color': '#fff','text-shadow': 'none','line-height': '24px','margin-bottom': '0','font-weight': '400','text-align': 'center','cursor': 'pointer','border': '1px solid transparent','padding': '11px 32px','font-size': '1rem'}}>Edit Profile</button> */}
          {localStorage.getItem("id") == this.props.match.params.id && (
            <svg
              cursor="pointer"
              class="pr-2"
              onClick={this.openModalEditProfile}
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
                d="M21.71,5L19,2.29a1,1,0,0,0-1.41,0L4,15.85,2,22l6.15-2L21.71,6.45A1,1,0,0,0,22,5.71,1,1,0,0,0,21.71,5ZM6.87,18.64l-1.5-1.5L15.92,6.57l1.5,1.5ZM18.09,7.41l-1.5-1.5,1.67-1.67,1.5,1.5Z"
                class="large-icon"
                style={{
                  fill: "#006097",
                  display: "block",
                  marginLeft: "100px"
                }}
              />
            </svg>
          )}
          {localStorage.getItem("id") == this.props.match.params.id && (
            <h5 class="font-weight-light">Profile</h5>
          )}

          <Modal
            open={openEditProfile}
            onClose={this.closeModalEditProfile}
            center
            dialogClassName="my-modal"
          >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h2 style={{ marginTop: "50px" }}>Edit Profile</h2>
              <hr />
              <div style={styles}>
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <div class="pl-5 ml-5">
                    <Field
                      className="form-control form-control-lg border border border-dark"
                      accept="image/jpeg, image/png"
                      name="files"
                      component={renderDropzoneInput}
                    />
                  </div>
                  <Field
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    label="First Name"
                    name="firstName"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Headline"
                    label="Headline *"
                    name="profileHeadline"
                    type="text"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Education"
                    label="Education *"
                    name="profileEducation"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Countries
                    className="form-control form-control-lg"
                    ref="country"
                    name="country"
                    empty=" -- Select country --"
                    onChange={e => this.onSelectCountry(e)}
                    style={{ width: "100%" }}
                  />
                </div>
                {/* <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                
                                type="checkbox"
                                component={this.renderField}
                            />

                            
        </div>*/}
                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Zipcode"
                    label="Zipcode *"
                    name="Zipcode"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Location"
                    label="Location within this area"
                    name="profileLocation"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Industry"
                    label="Industry *"
                    name="profileIndustry"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Profile URL, Email, WeChat ID"
                    label="Contact Info"
                    name="profileContact"
                    component={this.renderField}
                  />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3">
                  <Field
                    className="form-control form-control-lg"
                    placeholder="Summary"
                    label="Summary *"
                    name="profileSummary"
                    component={this.renderField}
                  />
                </div>
              </div>

              <div class="ml-5 mr-5">
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

//Get the current state of the signup page
const mapStateToProps = state => ({
  signin: state.signin
});

const renderDropzoneInput = field => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        <div>Upload Profile Photo</div>
      </Dropzone>
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
      {files && Array.isArray(files) && (
        <ul>
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.profileHeadline) {
    errors.profileHeadline = "Required";
  }
  if (!values.profileEducation) {
    errors.profileEducation = "Required";
  }
  if (!values.profileHeadline) {
    errors.profileHeadline = "Required";
  }
  if (!values.Zipcode) {
    errors.Zipcode = "Required";
  } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.Zipcode)) {
    errors.Zipcode = "Invalid zip code";
  }
  if (!values.profileSummary) {
    errors.profileSummary = "Required";
  }
  if (!values.profileIndustry) {
    errors.profileIndustry = "Required";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "ModalProfileForm"
})(
  connect(
    mapStateToProps,
    { profile }
  )(withRouter(ModalProfile))
);
