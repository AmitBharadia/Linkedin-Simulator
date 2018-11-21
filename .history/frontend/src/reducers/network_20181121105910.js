import * as CONST from "../Const/index";
var network_initialstate = {
  status: "",
  recommendations: "",
  invitations: "",
  allconnections: ""
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
    case CONST.GET_ALL_CONNECTIONS:
      return {
        ...state,
        status: action.payload.status,
        allconnections: action.payload.msg
      };
    case CONST.GET_CONNECTIONS_COUNT:
      return {
        ...state,
        status: action.payload.status,
        connectioncount: action.payload.msg
      };
  }
  return state;
}
