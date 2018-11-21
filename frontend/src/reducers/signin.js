import * as CONST from "../Const/index";
var signin_initialstate = {
  status: "",
  msg: "",
  data: "",
  token: ""
};
export default function(state = signin_initialstate, action) {
  if (action.type === CONST.SIGNIN_SUCCESS) {
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg,
      data: action.payload.data
    };
  }
  if (action.type === "SIGNIN_ERROR") {
    return {
      ...state,
      status: "error",
      msg: action.payload.msg
    };
  }
  if (action.type === "LOGOUT") {
    return {
      state: undefined
    };
  }
  return state;
}
