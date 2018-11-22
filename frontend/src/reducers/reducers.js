import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";

import postJob from "./postJobs";
import myJobs from "./myPostedJobs";

import searchPeaople from "./searchPeaople";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  signup,
  signin,
  postJob,
 searchPeaople,
 myJobs

});
