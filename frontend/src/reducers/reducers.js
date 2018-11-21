import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
<<<<<<< HEAD
import allJobs from './allJobs';
import savedJobs from './savedJobs';
=======

import postJob from "./postJobs";

import searchPeaople from "./searchPeaople";

import profile from "./profile";

>>>>>>> 3ffd606d2419e364931cd2abf52ada0af960fad9

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
<<<<<<< HEAD
  savedJobs,
  allJobs
=======

  profile,

  postJob,
 searchPeaople


>>>>>>> 3ffd606d2419e364931cd2abf52ada0af960fad9
});
