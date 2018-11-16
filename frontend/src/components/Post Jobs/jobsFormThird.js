import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from "./renderField";
import {postJobsAction} from "../../action/postJobs";
import connect from "react-redux/es/connect/connect";

const experience = ['1', '2-3', '3-5', '5+'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Select Experience...</option>
            {experience.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
);

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;

const jobsFormThird = props => {
    const { handleSubmit, pristine, previousPage, submitting} = props;
    return (
        <div className="py-5 text-center">
            <div className="container">
                <div className="flex-container mx-auto col-lg-10 col-10  border border-dark">
                    <h1 className="text-left mx-auto"> Step 2 : What are the right Qualifications for your Job?</h1>

                    <form className="text-left" onSubmit={handleSubmit}>
                        <div className="py-5 form-row">
                            <div>
                                <label>Experience Required</label>
                                <Field name="experience" component={renderColorSelector} />
                            </div>
                        </div>
                        <div className="py-5 form-row">
                            <div className="form-check col-lg-3">
                            <label>Preferred Mode of Application : </label>
                            </div>
                            <div>
                                <label>
                                    <Field
                                        className="form-check col-lg-3"
                                        name="easyApply"
                                        component="input"
                                        type="radio"
                                        value="yes"
                                    />{' '}
                                    Easy Apply
                                </label>
                                <label>
                                    <Field
                                        className="form-check col-lg-3"
                                        name="easyApply"
                                        component="input"
                                        type="radio"
                                        value="no"
                                    />{' '}
                                    Default Apply
                                </label>
                                <Field name="easyApply" component={renderError} />
                            </div>
                        </div>

                        <div className="py-5 form-row">

                        </div>
                        <div className="py-5 form-row">

                        </div>
                        <div className="py-5 form-row">
                            <div className="ml-2 mr-2 mt-5 pt-2">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="searchJob"
                                    onClick={previousPage}
                                >
                                    Previous
                                </button>
                            </div>
                            <div className="ml-2 mr-2 mt-5 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="searchJob" disabled={pristine || submitting}  >
                                    Submit Job Posting
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
};

export default reduxForm({
    form: 'postJob', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(jobsFormThird)