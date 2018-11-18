import * as CONST from "../Const/index";

var signup_initialstate = {
  status: "",
  msg: ""
};

export default function(state = signup_initialstate, action) {
  if (action.type === CONST.SIGNUP_SUCCESS) {
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg
    };
  }
  if (action.type === "SIGNUP_ERROR") {
    return {
      ...state,
      status: "error",
      msg: "something went wrong"
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      status: "",
      msg: ""
    };
  }
  return state;
}
