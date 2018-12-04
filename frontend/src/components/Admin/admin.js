import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import MainNavBar from "../Common/MainNavbar";
import Top5Jobs from "./Top5Jobs";
import Top10Jobs from "./Top10Jobs";
import CityWiseJobs from "./cityWiseJobs";
import ClicksOnJobs from "./clicksOnJobs";
import SavedJobs from "./savedJobs";
import TrackUser from "./trackUser";

class Admin extends Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">
            Top 5 Jobs Posting with less applications
          </h2>
          <Top5Jobs />
        </div>
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">
            City Wise Applications/Month
          </h2>
          <CityWiseJobs />
        </div>
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">
            Top 10 Jobs Posting with avg applications/month
          </h2>
          <Top10Jobs />
        </div>
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">Number of Saved Jobs</h2>
          <SavedJobs />
        </div>
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">Clicks per job Posting</h2>
          <ClicksOnJobs />
        </div>
        <div class="pt-5 mt-5">
          <h2 class="font-weight-light text-center">Application tracking</h2>
          <TrackUser />
        </div>
      </div>
    );
  }
}

export default Admin;
// export default reduxForm({
//   validate,
//   form: "SigninForm"
// })(
//   connect(
//     mapStateToProps,
//     { signIn }
//   )(withRouter(Signin))
// );
