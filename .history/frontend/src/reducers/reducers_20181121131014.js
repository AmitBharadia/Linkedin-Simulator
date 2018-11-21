import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";

import postJob from "./postJobs";

import searchPeaople from "./searchPeaople";

import network from "./network";

import profile from "./profile";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  searchPeaople,
  network,
  postJob,
  searchPeaople,
  profile
});
