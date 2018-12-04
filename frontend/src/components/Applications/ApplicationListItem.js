import React ,{Component } from 'react';
import {AxiosInstance as axios} from "axios";
import * as CONST from '../../Const';


class ApplicationListItem extends Component{


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
                            {/*<div className="ml-auto p-3 col-md-2 bg-white border">*/}
                                {/*<img className="img-fluid d-block rounded-circle" src={this.props.application.company_logo} />*/}
                            {/*</div>*/}
                            <div className="p-3 col-md-7 mr-auto bg-white text-dark border">
                                <div className="blockquote mb-0">
                                    <strong className="d-inline-block mb-2 text-primary"> {this.props.application.firstname} </strong>
                                    <h3 className="mb-0">
                                        <a className="text-dark" href="#">{this.props.application.email}</a>
                                    </h3>
                                    <p>
                                        Resume : <a href={this.props.application.resume} target="_blank"> My Resume</a>
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>


        );
    }

}

export default ApplicationListItem;
