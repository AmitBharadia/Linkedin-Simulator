import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import './postJobs.css'
import handleSubmit from "redux-form/es/handleSubmit";
import Link from "react-router-dom/es/Link";
import postJobsNav from "./postJobsNav";
import postJobsFooter from "./postJobsFooter";
import jobsFormFirst from "./jobsFormFirst";
import jobsFormSecond from "./jobsFormSecond";
import jobsFormThird from "./jobsFormThird";
import PropTypes from 'prop-types';


class postJob extends Component{

    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }


    render()
    {
        const { onSubmit } = this.props;
        const { page } = this.state;

        return(
            <div className="searchJobs">

                <postJobsNav />
                <hr className="hr"></hr>
                {page === 1 && <jobsFormFirst onSubmit={this.nextPage} />}
                {page === 2 && (
                    <jobsFormSecond
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <jobsFormThird
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}


                <postJobsFooter />
            </div>
    )
    }


}

postJob.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default postJob;

// export default reduxForm({
//     validate,
//     form: 'postJobs'
// })(postJob);