import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";

import allJobs from './allJobs';
import savedJobs from './savedJobs';


import postJob from "./postJobs";

import searchPeaople from "./searchPeaople";

import profile from "./profile";


import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  savedJobs,
  allJobs,
  profile,
  postJob,
 searchPeaople
});
