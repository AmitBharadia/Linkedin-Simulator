import React, { Component } from "react";
//import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CONST from "../../Const";
import * as myactions from "../../action/allJobs";
import MainNavbar from "../Common/MainNavbar";
import JobFiltersNavBar from "../Common/JobFiltersNavBar";
import axios from "axios";

import "./allJobs.css";

class allJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {

      currentPage:1,
      jobsPerPage:5,

      allJobs: [],
      xx: "",
      yy: "",
      savedjobs: [],
      company: "",
      easyApply: true,
      position: "",
      experienceLevel: "",
      location: ""
    };
    this.myClick = this.myClick.bind(this);
    this.apply = this.apply.bind(this);
    this.submitAnalytics = this.submitAnalytics.bind(this);
    this.handleClickPagination = this.handleClickPagination.bind(this); 
  }

  handleClickPagination = (e) => {
    console.log(e.target.id);
    console.log( typeof(e.target.id));
    this.setState({ currentPage: Number(e.target.id) });
    console.log(this.state.currentPage );
  }

  submitAnalytics(job) {
    job.applicant_id = localStorage.getItem("id");
    axios
      .post(`${CONST.ROOT_URL}/getAllJobs/view`, job)
      .then(response => {
        console.log("Response recieved: " + JSON.stringify(response.data));
      })
      .catch(error => { });
  }
  setEasyApply(event) {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({ easyApply: !this.state.easyApply });
    // console.log("status " +this.state.easyApply);
  }

  onChange = e => {
    // console.log('name  '+e.target.name);
    //  console.log('value '+e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  apply(job_id) {
    console.log("clicked apply " + job_id);
  }

  myClick(job_id, index) {
    let status = 0;

    this.state.savedjobs.forEach(element => {
      console.log(element.job_id);
      if (element.job_id === job_id) status = 1;
    });

    if (status) {
      let yy = (
        <div class="">
          <div class="card flex-row flex-wrap border-right-0 border-left-0">
            <div class="card-header border-0">
              <img src={this.state.allJobs[index].company_logo} alt="" />
            </div>
            <div class="card-block px-2 pt-5 pl-5">
              <h1 class="card-title"> {this.state.allJobs[index].position} </h1>
              <h3 class="card-title font-weight-light">
                {" "}
                {this.state.allJobs[index].location}
              </h3>
              <div class="mt-5 pt-3">
                {/* <button
                  type="button"
                  class="btn btn-lg btn-outline-primary mr-3"
                  onClick={() => this.props.UNSAVE(job_id)}
                >
                  <h3>Unsave</h3>
                </button> */}

                <Link
                  to={{
                    pathname: "/fill-application",
                    state: {
                      job_id: job_id,
                      recruiter_id: this.state.allJobs[index].recruiter_id,
                      position: this.state.allJobs[index].position,
                      location: this.state.allJobs[index].location,
                      easyApply: this.state.allJobs[index].easyApply,
                      company: this.state.allJobs[index].company
                    }
                  }}
                > <button class="btn btn-primary">
                    <h3>{this.state.allJobs[index].easyApply = "yes" ? "Easy Apply" : "Apply"}</h3>
                  </button>
                </Link>


              </div>

            </div>
            <div class="w-100" />
            <div class="card-group text-left w-100 ">
              <div class="card border-left-0">
                <div class="card-body">
                  <h3 class="card-title font-weight-light">Job</h3>
                  <p class="card-text h5 font-weight-light">15 Applicant</p>
                  <p class="card-text h5 font-weight-light">Experience Level</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title font-weight-light">Company</h3>
                  <p class="card-text h5 font-weight-light">1504 Employee</p>
                  <p class="card-text h5 font-weight-light">Internet</p>
                </div>
              </div>
              <div class="card border-right-0 ">
                <div class="card-body">
                  <h3 class="card-title font-weight-light">Connection</h3>
                  <p class="card-text h5 font-weight-light">1 Connection</p>
                  <p class="card-text h5 font-weight-light">
                    125 Company Alumini
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-5">
            <h2 class="font-weight-light">Job description</h2>
            <h4 class="font-weight-light">
              {this.state.allJobs[index].description}
            </h4>
          </div>
        </div>
      );
      console.log(yy);
      this.setState({ yy });
    } else {
      let yy = (
        <div class="">
          <div class="card flex-row flex-wrap border-right-0 border-left-0">
            <div class="card-header border-0">
              <img src={this.state.allJobs[index].company_logo} alt="" />
            </div>
            <div class="card-block px-2 pt-5 pl-5">
              <h1 class="card-title"> {this.state.allJobs[index].position} </h1>
              <h3 class="card-title font-weight-light">
                {" "}
                {this.state.allJobs[index].location}
              </h3>
              <div class="mt-5 pt-3">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-primary mr-3"
                  onClick={() =>
                    this.props.SAVE(
                      this.state.allJobs[index]._id,
                      localStorage.getItem("id"),
                      this.state.allJobs[index].recruiter_id,
                      this.state.allJobs[index].position,
                      this.state.allJobs[index].company,
                      this.state.allJobs[index].location
                    )
                  }
                >
                  <h3>Save</h3>
                </button>

                <Link
                  to={{
                    pathname: "/fill-application",
                    state: {
                      job_id: job_id,
                      recruiter_id: this.state.allJobs[index].recruiter_id,
                      position: this.state.allJobs[index].position,
                      company: this.state.allJobs[index].company,
                      easyApply: this.state.allJobs[index].easyApply,
                      location: this.state.allJobs[index].location
                    }
                  }}
                > <button class="btn btn-primary">
                    <h3>{this.state.allJobs[index].easyApply == "yes" ? "Easy Apply" : "Apply"}</h3>
                  </button>

                </Link>



              </div>
              <div class="w-100" />
              <div class="card-group text-left w-100 ">
                <div class="card border-left-0">
                  <div class="card-body">
                    <h3 class="card-title font-weight-light">Job</h3>
                    <p class="card-text h5 font-weight-light">15 Applicant</p>
                    <p class="card-text h5 font-weight-light">Experience Level</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title font-weight-light">Company</h3>
                    <p class="card-text h5 font-weight-light">1504 Employee</p>
                    <p class="card-text h5 font-weight-light">Internet</p>
                  </div>
                </div>
                <div class="card border-right-0 ">
                  <div class="card-body">
                    <h3 class="card-title font-weight-light">Connection</h3>
                    <p class="card-text h5 font-weight-light">1 Connection</p>
                    <p class="card-text h5 font-weight-light">
                      125 Company Alumini
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-5">
              <h2 class="font-weight-light">Job description</h2>
              <h4 class="font-weight-light">
                {this.state.allJobs[index].description}
              </h4>
            </div>
          </div>
        </div>
      );
      console.log(yy);
      this.setState({ yy });
    }
  }

  componentWillMount() {
    this.props.INIT();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "component will receive props " + JSON.stringify(nextProps.allJobs)
    // );

    if (nextProps.allJobs.status === "success") {

      this.setState({ allJobs: nextProps.allJobs.msg });
    //  console.log(nextProps.allJobs.savedjobs);

      this.setState({ savedjobs: nextProps.allJobs.savedjobs });

      let xx = "";
      let yy = "";

      if (nextProps.allJobs.msg.length) {
        xx = nextProps.allJobs.msg.map((item, index) => {
          return (
            <div
              key={item._id}
              onClick={() => {
                this.myClick(item._id, index);
                //Action for Analytics
                this.submitAnalytics(item);
              }}
            >
              <div class="card border-left-0 ml-3">
                <div class="card-body pl-5">
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
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        });

        let status = 0;

        nextProps.allJobs.savedjobs.forEach(element => {
         // console.log(element.job_id);
          if (element.job_id === nextProps.allJobs.msg[0]._id) status = 1;
        });

        if (status) {
          yy = (
            <div class="">
              <div class="card flex-row flex-wrap border-right-0 border-left-0">
                <div class="card-header border-0">
                  <img src="nextProps.allJobs.msg[0].company_logo" alt="" />
                </div>
                <div class="card-block px-2 pt-5 pl-5">
                  <h1 class="card-title">
                    {" "}
                    {nextProps.allJobs.msg[0].position}{" "}
                  </h1>
                  <h3 class="card-title font-weight-light">
                    {" "}
                    {nextProps.allJobs.msg[0].location}
                  </h3>
                  <div class="mt-5 pt-3">
                    {/* <button
                      type="button"
                      class="btn btn-lg btn-outline-primary mr-3"
                      onClick={() =>
                        this.props.UNSAVE(nextProps.allJobs.msg[0]._id)
                      }
                    >
                      <h3>Unsave</h3>
                    </button> */}


                  </div>
                  <div class="w-100" />
                  <div class="card-group text-left w-100 ">
                    <div class="card border-left-0">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Job</h3>
                        <p class="card-text h5 font-weight-light">15 Applicant</p>
                        <p class="card-text h5 font-weight-light">
                          Experience Level
                      </p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Company</h3>
                        <p class="card-text h5 font-weight-light">
                          1504 Employee
                      </p>
                        <p class="card-text h5 font-weight-light">Internet</p>
                      </div>
                    </div>
                    <div class="card border-right-0 ">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Connection</h3>
                        <p class="card-text h5 font-weight-light">1 Connection</p>
                        <p class="card-text h5 font-weight-light">
                          125 Company Alumini
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <h2 class="font-weight-light">Job description</h2>
                  <h4 class="font-weight-light">
                    {nextProps.allJobs.msg[0].description}
                  </h4>
                </div>
              </div>
            </div>
          );
         // console.log(yy);
        } else {
          yy = (
            <div class="">
              <div class="card flex-row flex-wrap border-right-0 border-left-0">
                <div class="card-header border-0">
                  <img src={nextProps.allJobs.msg[0].company_logo} alt="" />
                </div>
                <div class="card-block px-2 pt-5 pl-5">
                  <h1 class="card-title">
                    {" "}
                    {nextProps.allJobs.msg[0].position}{" "}
                  </h1>
                  <h3 class="card-title font-weight-light">
                    {" "}
                    {nextProps.allJobs.msg[0].location}
                  </h3>
                  <div class="mt-5 pt-3">
                    <button
                      type="button"
                      class="btn btn-lg btn-outline-primary mr-3"
                      // onClick={() =>
                      //   this.props.SAVE(nextProps.allJobs.msg[0]._id)
                      // }

                      onClick={() =>
                        this.props.SAVE(
                          nextProps.allJobs.msg[0]._id,
                          localStorage.getItem("id"),
                          nextProps.allJobs.msg[0].recruiter_id,
                          nextProps.allJobs.msg[0].position,
                          nextProps.allJobs.msg[0].company,
                          nextProps.allJobs.msg[0].location
                        )}
                    >
                      <h3>SAVE</h3>
                    </button>

                    <Link
                      to={{
                        pathname: "/fill-application",
                        state: {
                          job_id: nextProps.allJobs.msg[0]._id,
                          recruiter_id: nextProps.allJobs.msg[0].recruiter_id,
                          position: nextProps.allJobs.msg[0].position,
                          location: nextProps.allJobs.msg[0].location,
                          company: nextProps.allJobs.msg[0].company,
                          easyApply: nextProps.allJobs.msg[0].easyApply
                        }
                      }}
                    >
                      <button class="btn btn-primary">
                        <h3>{nextProps.allJobs.msg[0].easyApply == "yes" ? "Easy Apply" : "Apply"}</h3>
                      </button>

                    </Link>
                  </div>
                  <div class="w-100" />
                  <div class="card-group text-left w-100 ">
                    <div class="card border-left-0">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Job</h3>
                        <p class="card-text h5 font-weight-light">15 Applicant</p>
                        <p class="card-text h5 font-weight-light">
                          Experience Level
                      </p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Company</h3>
                        <p class="card-text h5 font-weight-light">
                          1504 Employee
                      </p>
                        <p class="card-text h5 font-weight-light">Internet</p>
                      </div>
                    </div>
                    <div class="card border-right-0 ">
                      <div class="card-body">
                        <h3 class="card-title font-weight-light">Connection</h3>
                        <p class="card-text h5 font-weight-light">1 Connection</p>
                        <p class="card-text h5 font-weight-light">
                          125 Company Alumini
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <h2 class="font-weight-light">Job description</h2>
                  <h4 class="font-weight-light">
                    {nextProps.allJobs.msg[0].description}
                  </h4>
                </div>
              </div>
            </div>
          );
         // console.log(yy);
        }
      } else {
        xx = <h2>Sorry No jobs found. </h2>;
        yy = <h2>Sorry No jobs found. At the moment </h2>;
      }

      this.setState({ xx });
      this.setState({ yy });
    }
  }

  render() {
    const { xx , currentPage , jobsPerPage } = this.state;
    const IndexOfLastJob = currentPage*jobsPerPage ; 
    const IndexOfFirstJob = IndexOfLastJob - jobsPerPage;

    const CurrentJob = xx.slice(IndexOfFirstJob , IndexOfLastJob );

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(xx.length/jobsPerPage);i++){
        pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number=>{
        return (
            <li
              key={number}
              id={number}
              onClick={this.handleClickPagination}
            >
              {number}
            </li>
        )
    })


    return (
      <div>
        <MainNavbar />
        <JobFiltersNavBar />

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm">
              <div class="pl-3" style={{ height: "480px", overflow: "auto" }}>
              {/*  {this.state.xx}  */}
                {CurrentJob}             
              </div>
            </div>
            <div class="col-sm">
              <div style={{ height: "480px", overflow: "auto" }}>
                {this.state.yy}
              </div>
            </div>
          </div>
          <div>
          <ul id='page-numbers' class="h2" style={{'marginLeft':'50%','marginTop':'25px','color': 'black','float': 'left','padding': '8px 16px','textDecoration': 'none',' border': '1px solid black' }}>
                 {renderPageNumbers}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allJobs: state.allJobs
  };
};
//Get the current state of the signup page

function matchDispatchToProps(dispatch) {
  return bindActionCreators(myactions, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(allJobs)
);
