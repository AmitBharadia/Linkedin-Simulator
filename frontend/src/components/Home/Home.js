import React, { Component } from "react";
import { connect } from "react-redux";
import { dummy } from "../../action/dummy";
import MainNavbar from "../Common/MainNavbar";
import Pofile from "./Profile";
import Profile from "./Profile";
import Posts from "./Posts";
import News from "./News";

class Home extends Component {
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
