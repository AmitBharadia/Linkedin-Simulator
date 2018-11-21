import * as CONST from "../Const/index";
var intial = {
  status: "",
  msg: ""
};
export default function(state = intial, action) {
  //console.log("Action payload " + JSON.stringify(action.payload));
  if (action.type === CONST.SEARCH_PEOPLE_SUCCESS) {
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg,
      data: action.payload.data
    };
  }
  return state;
}
