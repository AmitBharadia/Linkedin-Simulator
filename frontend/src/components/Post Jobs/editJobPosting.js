import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import PostJobsNav from "./postJobsNav";
import * as CONST from "../../Const";


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


class EditJobs extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    onSubmit(values)
    {
        values.job_id =  this.props.match.params.id;
        axios.post(`${CONST.ROOT_URL}/editJobs`,values)
            .then( (response) => {
                if(response.status === 200) {
                    this.props.history.push("/myJobPosts");
                }

                })
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
            <PostJobsNav/>
            <div className="py-5 text-center">
                <div className="container">
                    <div className="flex-container mx-auto col-lg-10 col-10  border border-dark">
                        <h1 className="text-left mx-auto">
                            {" "}
                            You are currently Editing Job {this.props.match.params.id}
                        </h1>
                        <form className="text-left" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                                <div className="ml-2 mr-2 mt-5 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        id="continue"
                                    >
                                        Update Job
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.user
    };

}

export default reduxForm({
    form: "editJob", //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(connect(mapStateToProps)(EditJobs));
