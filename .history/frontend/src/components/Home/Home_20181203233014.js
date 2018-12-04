import React, { Component } from "react";
import { connect } from "react-redux";
import { dummy } from "../../action/dummy";
import MainNavbar from "../Common/MainNavbar";
import Profile from "./Profile";
import Posts from "./Posts";
import News from "./News";
import axios from "axios";
import * as CONST from "../../Const/index";

class Home extends Component {
  componentWillMount() {
    console.log("Hello");
    axios
      .get(CONST.ROOT_URL + "/basic-details", {
        params: { id: localStorage.getItem("id") }
      })
      .then(res => {
        console.log("Status: " + res.status);
        console.log("Data: " + JSON.stringify(res.data.data));
        if (res.status == 200) {
          var details = "";
          if (res.data.data) {
            details = res.data.data;
          }
          if (details) {
            if (details.first_name) {
              localStorage.setItem("first_name", details.first_name);
            }
            if (details.last_name) {
              localStorage.setItem("last_name", details.last_name);
            }
            if (details.profile_url) {
              localStorage.setItem("profile_url", details.profile_url);
            }
          }
        }
      });
  }

  render() {
    return (
      <div>
        <MainNavbar />
        <div class="row">
          <div class="col">
            <Profile />
          </div>

          <div class="col-4 pt-5 pl-0">
            <Posts />
          </div>
          <div class="col pt-5">
            <News />
          </div>
          <div class="col" />
        </div>

        {/* <button
          onClick={e => {
            this.props.dummy();
          }}
        >
          Check
        </button> */}
        {/* <div class="row">
          <div class="col ml-5">
            <div class="container border mt-5 " style={{ width: 216 }}>
              <div class="row">
              
              </div>

              <div class="row">asdasd</div>
            </div>
          </div>
          <div class="col">asd</div>
          <div class="col">asd</div>
        </div> */}
      </div>
    );
  }
}

//export default Home;
export default connect(
  null,
  { dummy }
)(Home);
