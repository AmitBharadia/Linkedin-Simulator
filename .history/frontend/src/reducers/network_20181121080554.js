import * as CONST from "../Const/index";
var network_initialstate = {
  status: "",
  recommendations: "",
  invitations: ""
};
export default function(state = network_initialstate, action) {
  switch (action.type) {
    case CONST.GET_RECOMMENDATIONS:
      return {
        ...state,
        status: action.payload.status,
        recommendations: action.payload.msg
      };
    case CONST.GET_INVITATIONS:
      return {
        ...state,
        status: action.payload.status,
        invitations: action.payload.msg
      };
    case CONST.GET_INVITATIONS:
      return {
        ...state,
        status: action.payload.status,
        invitations: action.payload.msg
      };
  }
  return state;
}
