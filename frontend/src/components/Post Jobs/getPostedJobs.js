import React,{ Component} from "react";
import { connect } from 'react-redux';
import { myPostedJobsAction } from '../../action/myPostedJobs';
import { bindActionCreators } from 'redux';
import JobListItem from "./jobListItem";
import PostJobsNav from "./postJobsNav";
import './postJobs.css'
import Redirect from "react-router/es/Redirect";


class GetPostedJobs extends Component {

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const data = localStorage.getItem("id");
        this.props.myPostedJobs(data);
    }

    render() {

    let JobItems = '';
        if (this.props.postedJobs.length > 0) {

            JobItems = this.props.postedJobs.map((job) => {
                return <JobListItem key={job._id} job={job}/>
            });
        }
        else
        {
            JobItems = '<h3 className="mb-0">\n' +
                            '<a className="text-dark" href="#">No Job Posts Available</a>\n' +
                        '</h3>';
        }



                if(localStorage.getItem("type") === 'recruiter') {
                    return (
                        <div className="searchJobs">
                            <PostJobsNav/>
                            <div className="row mt-5">
                                <ul className="col-md-3 list-group">

                                </ul>
                                <ul className="col-lg-6 list-group">
                                    <h2>My Posted Jobs</h2>
                                    {JobItems}
                                </ul>
                                <ul className="col-md-3 list-group">
                                </ul>
                            </div>
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

function mapStateToProps(state)
{
    return {
        postedJobs : state.myJobs
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({myPostedJobs : myPostedJobsAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GetPostedJobs);