import GET_RECOMMENDATIONS from "../Const/index";
var recommendation_initialstate = {
  status: "",
  msg: ""
};
export default function(state = recommendation_initialstate, action) {
  debugger;
  switch (action.type) {
    case CONST.GET_RECOMMENDATIONS:
      return {
        ...state,
        status: action.payload.status,
        msg: action.payload.msg
      };
  }
  return state;
}
