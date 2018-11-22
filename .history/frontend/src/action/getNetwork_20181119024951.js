import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
//axios.defaults.withCredentials = true;
export function get_recommendation() {
  console.log("Action started on get recommendation request");
  return dispatch => {
    console.log("Action started on get recommendation request");
    axios.get(`${url}/network/getRecommendations`).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.GET_RECOMMENDATIONS,
        payload: response.data
      });
    });
  };
}
export function get_invitations() {
  console.log("Action started on get invitations request");
  return dispatch => {
    console.log("Action started on get invitations request");
    axios.get(`${url}/network/getInvitations`).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.GET_INVITATIONS,
        payload: response.data
      });
    });
  };
}
export function connectRequest() {
  console.log("Action started on get new connect request");
  return dispatch => {
    console.log("Action started on new connect request");
    axios.get(`${url}/network/addConnection`).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.GET_INVITATIONS,
        payload: response.data
      });
    });
  };
}
