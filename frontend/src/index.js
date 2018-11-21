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
//import postJob from "./components/Post Jobs";
import allJobs from "./components/allJobs/allJobs";
import savedJobs from "./components/savedJobs/savedJobs";
import jobApply from "./components/jobApply/jobApply";

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

      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

