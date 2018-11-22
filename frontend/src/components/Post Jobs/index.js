import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import './postJobs.css'
import handleSubmit from "redux-form/es/handleSubmit";
import Link from "react-router-dom/es/Link";
import PostJobsNav from "./postJobsNav";
import PostJobsFooter from "./postJobsFooter";
import JobsFormFirst from "./jobsFormFirst";
import JobsFormSecond from "./jobsFormSecond";
import JobsFormThird from "./jobsFormThird";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {postJobsAction} from "../../action/postJobs";
import Redirect from "react-router/es/Redirect";


class postJob extends Component{

        constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
        this.postJob = this.postJob.bind(this);
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    postJob = (values) =>
    {

        var formData = new FormData();
        formData.append("recruiter_id",localStorage.getItem("id"));
        var file;
        Object.keys(values).forEach((key) => {
            if(key !== "files")
            {
                formData.append(key,values[key]);
            }

        else {
            file = values[key];
            }});

        file.forEach(file => {
            formData.append("files", file);
            formData.append("filename", file.name);
        });

        this.props.postJobsAction(formData);
        this.props.history.push("/myJobPosts");
    }


    render() {
        const {onSubmit} = this.props;
        const {page} = this.state;

        if(localStorage.getItem("type") === 'recruiter') {
            return (
            <div className="searchJobs">

                <PostJobsNav/>
                <hr className="hr"></hr>
                {page === 1 && <JobsFormFirst onSubmit={this.nextPage}/>}

                {page === 2 && (
                    <JobsFormSecond
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <JobsFormThird
                        previousPage={this.previousPage}
                        onSubmit={this.postJob}
                    />
                )}


                {page === 1 && <PostJobsFooter/>}
            </div>
        )
    }
    else
        {
            return(
                this.props.history.push("/signin")
            );
        }
    }


}

postJob.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default (connect('',{postJobsAction})(postJob));
