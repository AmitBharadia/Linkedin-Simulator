import React ,{Component } from 'react';
import axios from "axios";
import cookie from "react-cookies";
import Link from "react-router-dom/es/Link";
//import {ROOT_URL} from "../";

class JobListItem extends Component{


    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <li>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="ml-auto p-3 col-md-2 bg-white border">
                                <img className="img-fluid d-block rounded-circle" src={this.props.job.company_logo} />
                            </div>
                            <div className="p-3 col-md-7 mr-auto bg-white text-dark border">
                                <div className="blockquote mb-0">
                                    <strong className="d-inline-block mb-2 text-primary"> {this.props.job.location} </strong>
                                    <h3 className="mb-0">
                                    <a className="text-dark" href="#">{this.props.job.position}</a>
                                    </h3>
                                    <p>
                                        Description : {this.props.job.description}
                                    </p>

                                    <div className="blockquote-footer"><strong><a><Link to={"/getApplications/"+ this.props.job._id }>Applications</Link></a></strong></div>
                                    <div className="blockquote-footer"><strong><a><Link to={"/editPosting/"+ this.props.job._id }>Edit Posting</Link></a></strong></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
        </div>


        );
    }

}

export default JobListItem;
