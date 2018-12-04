import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as myactions from '../../action/savedJobs';
import MainNavBar from "../Common/MainNavbar";
import axios from "axios";
import * as CONST from "../../Const/index";

class appliedjobs extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                appliedjobs: []
            }
    }


    componentWillMount() {
        axios
            .get(`${CONST.ROOT_URL}/apply`, { params: { id: localStorage.getItem("id") } })
            .then(res => {
                console.log(" Response : " + JSON.stringify(res.data.msg));
                this.setState({
                    appliedjobs: res.data.msg
                })
            })

    }
    render() {
        var xx = '';

        if(this.state.appliedjobs) {
            var jobs =this.state.appliedjobs; 
            xx = jobs.map((item, index) => {

                return (
                    <div key={item._id} >

                        <div class="card border-left-0">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col">
                                        <h2 class="card-title text-primary">{item.position}</h2>
                                        <p class="card-text h4 font-weight-bold">{item.company}</p>
                                        <p class="card-text h4 font-weight-light">
                                       
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="24px"
                                                height="24px"
                                                x="0"
                                                y="0"
                                                preserveAspectRatio="xMinYMin meet"
                                                class="artdeco-icon"
                                                focusable="false"
                                            >
                                                <path
                                                    d="M8,4a2,2,0,1,0,2,2A2,2,0,0,0,8,4ZM8,7.13A1.13,1.13,0,1,1,9.13,6,1.13,1.13,0,0,1,8,7.13ZM8,1A5,5,0,0,0,3,6a5.37,5.37,0,0,0,.41,2S5.91,13,7.22,15.52A0.86,0.86,0,0,0,8,16H8a0.86,0.86,0,0,0,.78-0.48C10.09,13,12.59,8,12.59,8A5.37,5.37,0,0,0,13,6,5,5,0,0,0,8,1Zm2.88,6.24L8,12.92,5.12,7.24A3.49,3.49,0,0,1,4.88,6a3.13,3.13,0,0,1,6.25,0A3.49,3.49,0,0,1,10.88,7.24Z"
                                                    class="small-icon"
                                                />
                                                
                                            </svg>
                                            {item.location}
                                        </p>
                                        
                                        <p class="card-text font-weight-light h4 pl-2">
                                            Date Applied : {item.ApplyDate}
                                        </p>
                                        <p class="card-text font-weight-light h4 pl-2">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div class="col">
                                        {/* <Link
                                            to={{
                                                pathname: "/fill-application",
                                                state: {
                                                    job_id: item.job_id,
                                                    recruiter_id: item.recruiter_id,
                                                    position: item.position,
                                                    location: item.location,
                                                    easyApply: item.easyApply ? 'yes' : 'no',
                                                    company: item.company
                                                }
                                            }}
                                        >
                                            <button
                                                type="button"
                                                class="btn btn-lg btn-primary mr-3"
                                            >
                                                <h3>{item.easyApply ? "Easy Apply" : "Apply"}</h3>
                                            </button>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });

        }
        else {
            xx = <h2> No jobs found.  </h2>
        }

        return (
            <div>
                <MainNavBar />
                <h1 class="font-weight-light pl-5 pt-5 ml-5">Applied Jobs</h1>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div style={{ height: "480px", overflow: "auto" }}>
                                {xx}
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {

    return {
        savedJobs: state.savedJobs
    }
}
//Get the current state of the signup page

function matchDispatchToProps(dispatch) {

    return bindActionCreators(myactions, dispatch)

}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(appliedjobs));
