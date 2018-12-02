import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Dropzone from "react-dropzone";
import { postJobsAction } from "../../action/postJobs";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
const FILE_FIELD_NAME = "files";

class jobsFormSecond extends Component {
  constructor(props) {
    super(props);

    this.postJob = this.postJob.bind(this);
    this.renderDropzoneInput = this.renderDropzoneInput.bind(this);
  }

  renderDropzoneInput(field) {
    const files = field.input.value;

    return (
      <div>
        <Dropzone
          name={field.name}
          accept="image/jpeg, image/png"
          onDrop={(filesToUpload, e) => {
            field.input.onChange(filesToUpload);
          }}
        >
          <div>
            Try dropping some files here, or click to select files to upload.
          </div>
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
  }

  postJob(data) {
    alert("Values before: " + JSON.stringify(data));
    var body = new FormData();
    body.append("formdata", JSON.stringify(data));
    for (var key in data.files) {
      body.append("files", data.files[key]);
    }
    this.props.postJobsAction(body);
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <div className="py-5 text-center">
        <div className="container">
          <div className="flex-container mx-auto col-lg-10 col-10  border border-dark">
            <h1 className="text-left mx-auto">
              {" "}
              Step 1 : What do you want to post?
            </h1>
            <form className="text-left" onSubmit={handleSubmit}>
              <div className="py-5 form-row">
                <div className="mx-auto col-lg-6">
                  <Field
                    label="Company*"
                    className="form-group"
                    placeholder="Company"
                    name="company"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="mx-auto col-lg-3">
                  <Field
                    label="Job Title*"
                    className="form-group"
                    placeholder="Job Title"
                    name="position"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="mx-auto col-lg-3">
                  <Field
                    label="Location*"
                    className="form-group"
                    placeholder="location"
                    name="location"
                    type="text"
                    component={renderField}
                  />
                </div>
              </div>
              <div className="py-5 form-row">
                <div className="mx-auto col-lg-8">
                  <Field
                    label="Job Function"
                    className="form-group"
                    placeholder="Job Function"
                    name="function"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="mx-auto col-lg-4">
                  <Field
                    label="Employment Type*"
                    className="form-group"
                    placeholder="Employment type"
                    name="type"
                    type="text"
                    component={renderField}
                  />
                </div>
              </div>

              <div className="py-5 form-row">
                <div className="mx-auto col-lg-8">
                  <Field
                    label="Company Industry"
                    className="form-group"
                    placeholder="Company Industry"
                    name="industry"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="mx-auto col-lg-4">
                  <Field
                    label="Seniority level *"
                    className="form-group"
                    placeholder="Entry Level"
                    name="Seniority"
                    type="text"
                    component={renderField}
                  />
                </div>
              </div>
              <div className="py-5 form-row">
                <div className="mx-auto col-lg-12">
                  <Field
                    label="Job Description"
                    className="form-group"
                    placeholder="Please enter a few words about Job"
                    name="description"
                    type="text"
                    component={renderField}
                  />
                </div>
              </div>
              <div className="py-5 form-row">
                <div className="mx-auto col-lg-4">
                  <div className="form-group">
                    <label htmlFor={FILE_FIELD_NAME}>
                      Please upload your Company Logo
                    </label>
                    <Field
                      name={FILE_FIELD_NAME}
                      component={this.renderDropzoneInput}
                    />
                  </div>
                </div>
              </div>
              <div className="py-5 form-row">
                <div className="ml-2 mr-2 mt-5 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    id="previous"
                    onClick={previousPage}
                  >
                    Previous
                  </button>
                </div>
                <div className="ml-2 mr-2 mt-5 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="continue"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "postJob", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(jobsFormSecond);
