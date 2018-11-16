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
        alert("Values before: " + JSON.stringify(values));
        var formData = new FormData();
        var file;
        Object.keys(values).forEach((key) => {
            if(key != "files")
            {
                formData.append(key,values[key]);
            }

        else {
            file = values[key];
            }});

        file.forEach(file => {
            formData.append("files", file);
        });

        this.props.postJobsAction(formData);
        alert("Values : " + JSON.stringify(formData));
    }


    render()
    {
        const { onSubmit } = this.props;
        const { page } = this.state;

        return(
            <div className="searchJobs">
                <PostJobsNav/>

                {page === 1 && <JobsFormFirst onSubmit={this.nextPage} />}
                {page === 2 && (
                    <JobsFormSecond
                        previousPage={this.previousPage}
                        onSubmit={handleSubmit}
                    />
                )}
                {page === 3 && (
                    <JobsFormThird
                        previousPage={this.previousPage}
                        onSubmit={this.postJob}
                    />
                )}


                {page === 1 && <PostJobsFooter/> }
            </div>
    )
    }


}

postJob.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default (connect('',{postJobsAction})(postJob));
