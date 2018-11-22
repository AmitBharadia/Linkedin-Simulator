import * as CONST from "../Const/index";
var savedJobs_initialstate = {
  status: "",
  msg: "",
  appliedjobs:""
};

export default function(state = savedJobs_initialstate, action) {  
    if (action.type === CONST.SAVED_JOBS_SUCCESS) {
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg,
      appliedjobs:""
    };
  }
  if (action.type === CONST.SAVED_JOBS_ERROR) {
    return {
      ...state,
      status: "error",
      msg: action.payload.msg
    };
  }
  return state;
}
