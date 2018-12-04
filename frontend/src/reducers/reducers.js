import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";

import allJobs from "./allJobs";
import savedJobs from "./savedJobs";
import profile from "./profile";

import postJob from "./postJobs";
import myJobs from "./myPostedJobs";

import searchPeaople from "./searchPeaople";

import network from "./network";

import { reducer as formReducer } from "redux-form";
import myJobApplications from "./myJobApplications";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  searchPeaople,
  network,
  postJob,
  myJobs,
  savedJobs,
  allJobs,
  profile,
  myJobApplications
});
