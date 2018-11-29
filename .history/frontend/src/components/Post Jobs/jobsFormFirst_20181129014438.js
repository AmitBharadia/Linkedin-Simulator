import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const jobsFormFirst = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div className="notes py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-light">
              <h1>
                Reach the quality candidates you can’t find anywhere else.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="jobs text-center">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-6 col-10 bg-white p-5">
              <form onSubmit={handleSubmit}>
                <div className="ml-2 mr-2 mt-4 pt-2">
                  <Field
                    className="form-control"
                    placeholder="Company"
                    name="company"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="ml-2 mr-2 mt-4 pt-2">
                  <Field
                    className="form-control"
                    placeholder="Job Title"
                    name="position"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="ml-2 mr-2 mt-4 pt-2 ">
                  <Field
                    className="form-control"
                    placeholder="Job Address or city"
                    name="location"
                    type="text"
                    component={renderField}
                  />
                </div>
                <div className="ml-2 mr-2 mt-5 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    id="searchJob"
                    tabIndex="4"
                    component={renderField}
                  >
                    Start Job Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "postJob", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(jobsFormFirst);
