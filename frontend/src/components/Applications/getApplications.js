import React,{ Component} from "react";
import { connect } from 'react-redux';
import { myJobApplicationsAction } from '../../action/myJobApplications';
import { bindActionCreators } from 'redux';
import PostJobsNav from "../Post Jobs/postJobsNav";
import '../Post Jobs/postJobs.css';
import ApplicationListItem from "./ApplicationListItem";

class GetApplications extends Component {

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const data = this.props.match.params.id;
        this.props.jobApplications(data);
    }

    render() {

        let ApplicationItems = '';
        if (this.props.myjobApplications.length > 0) {

            ApplicationItems = this.props.myjobApplications.map((application) => {
                return <ApplicationListItem key={application._id} application={application}/>
            });
        }
        else
        {
            ApplicationItems = 'No Applications Available for this Job';
        }



        if(localStorage.getItem("type") === 'recruiter') {
            return (
                <div className="searchJobs">
                    <PostJobsNav/>
                    <div className="row mt-5">
                        <ul className="col-md-3 list-group">

                        </ul>
                        <ul className="col-lg-6 list-group">
                            <h2>Job Applications</h2>
                            {ApplicationItems}
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
        myjobApplications : state.myJobApplications
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({jobApplications : myJobApplicationsAction}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GetApplications);