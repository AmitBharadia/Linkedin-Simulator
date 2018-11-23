import React ,{Component } from 'react';
import axios from "axios";
import cookie from "react-cookies";
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

                                    <div className="blockquote-footer"><strong><a href= {"/applications/"}>Applications</a></strong></div>
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
