//import App from './App';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/index";

//Routes to be placed here
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

import Profile from "./components/Profile/Profile";

import Connections from "./components/Connections/Connections";
import AllConnections from "./components/AllConnections/AllConnections";

import SearchProfiles from "./components/SearchProfiles/SearchProfiles";
import FillApplication from "./components/FillApplication/FillApplication";

//import postJob from "./components/Post Jobs";
import allJobs from "./components/allJobs/allJobs";
import savedJobs from "./components/savedJobs/savedJobs";
import jobApply from "./components/jobApply/jobApply";

import Admin from "./components/Admin/admin";
import postJob from "./components/Post Jobs/index";

import GetPostedJobs from "./components/Post Jobs/getPostedJobs";
import Messaging from "./components/Messagging/index";
import GetApplications from "./components/Applications/getApplications";
import GetApplications2 from "./components/Applications/getApplications2";
import GetApplications3 from "./components/Applications/testPDF";
import EditJobs from "./components/Post Jobs/editJobPosting";

import JobApplied from "./components/AppliedJobs/appliedJobs";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />

        <Route path="/allJobs" component={allJobs} />
        <Route path="/savedJobs" component={savedJobs} />
        <Route path="/jobApply" component={jobApply} />

        <Route path="/search-people" component={SearchProfiles} />
        <Route path="/fill-application" component={FillApplication} />

        <Route path="/postJob" component={postJob} />

        <Route path="/connections" component={Connections} />
        <Route path="/admin" component={Admin} />
        <Route path="/allConnections" component={AllConnections} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/myJobPosts" component={GetPostedJobs} />
        <Route path="/messaging" component={Messaging} />

          <Route path="/getApplications/:id" component={GetApplications} />
          <Route path="/testpdf" component={GetApplications3} />
          <Route path="/editPosting/:id" component={EditJobs} />
          <Route path="/apply" component={JobApplied} />

      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
