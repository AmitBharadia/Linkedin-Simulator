import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";

import allJobs from "./allJobs";
import savedJobs from "./savedJobs";
import profile from "../action/profile";

import postJob from "./postJobs";

import searchPeaople from "./searchPeaople";

import network from "./network";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  searchPeaople,
  network,
  postJob,
  savedJobs,
  allJobs,
  //profile,
  postJob
});
