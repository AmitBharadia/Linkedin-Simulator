import React, { Component } from "react";
import MainNavbar from "../Common/MainNavbar";
import { connect } from "react-redux";

import { dummy } from "../../action/dummy";
import { connectRequest } from "../../action/getNetwork";
import style1 from "../Connections/Recommendations/Recommendations.css";
import myStyles from "../Connections/Connections.css";


class SearchProfiles extends Component {
  constructor(props) {
    super(props);
  }
  onConnectClick(newConnection) {
    this.props.connectRequest(newConnection);
  }

  render() {
    const { data } = this.props.searchPeaople;
    console.log("data", data);

    let details = data.map((mydata, i) => {
      if ((i + 1) % 3 == 0) {
        mydata +=
          "</div>" + '<div className="row mb-2" style={{ height: "230px" }} />';
      }
      return (

        <div style={{ marginBottom: "50px" }}>
          <hr />
          <div class="card-body">
            <a href="" id="A_4">
              <img height="64" width="64" src={mydata.profile_url} id="IMG_5" />
            </a>

            <p>
              Username: {mydata.first_name} {mydata.last_name}
            </p>
            <p>Location: {mydata.profileLocation}</p>
            <p>Summary: {mydata.profileSummary}</p>

            <button
              onClick={this.onConnectClick.bind(this, mydata)}
              className="btn btn-primary btn btn-block"
              style={{ width: "100px" }}
            >
              Connect
            </button>

        <div className="col-md-4" style={{ maxHeight: "320px" }}>
          <div class="card" style={{ height: "320px" }}>
            <img
              class="card-img-top"
              src={mydata.profile_url}
              alt="Card image"
              style={style1.cardimage}
              onClick={()=>{
                this.props.history.push("/profile/" + mydata._id)
              }}
            />
            <div class="card-body">
              <h4
                class="card-title"
                style={{
                  textAlign: "center"
                }}
              >
                {mydata.first_name} {mydata.last_name}
              </h4>
              <p class="card-text" style={style1.cardtext}>
                {mydata.profileSummary}
              </p>
              <br />
              <br />
              <div class="row">
                <div class="col" />
                <div class="col">
                  <button class="btn btn-primary btn-outline-primary " onClick={()=>{
                    this.props.connectRequest(mydata);
                  }}>
                    <h3>CONNECT</h3>
                  </button>
                </div>
                <div class="col" />
              </div>
            </div>

          </div>
        </div>
      );
    });

    return (
      <div>
        <MainNavbar />
        <br />
        <br />
        <div class="row">
          <div class="col" />

          <div class="col-8 border">
            <h1 class="font-weight-ligh pl-2 pb-2 border-bottom mb-5 mt-5">
              Showing {data.length} results
            </h1>

            {details}
          </div>

          <div class="col pt-5" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    searchPeaople: state.searchPeaople
  };
};

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  { connectRequest }
=======
  { dummy, connectRequest }
>>>>>>> 6a2ec7b077375a405fe8d195f64639807247224f
)(SearchProfiles);
