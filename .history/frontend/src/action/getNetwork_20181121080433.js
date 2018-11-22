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
export function connectRequest(requestConnect) {
  console.log("Action started on get new connect request");
  return dispatch => {
    console.log("Action started on new connect request");
    axios
      .post(`${url}/network/addConnection`, requestConnect)
      .then(response => {
        console.log("Response recieved: " + JSON.stringify(response));

        dispatch(get_invitations());
      });
  };
}

export function acceptRequest(requestAccept) {
  console.log("Action started on get new connect request");
  return dispatch => {
    console.log("Action started on new connect request");
    axios
      .post(`${url}/network/acceptConnection`, requestAccept)
      .then(response => {
        console.log("Response recieved: " + JSON.stringify(response));

        dispatch(get_invitations());
      });
  };
}

export function ignoreRequest(requestIgnore) {
  console.log("Action started on get new connect request");
  return dispatch => {
    console.log("Action started on new connect request");
    axios
      .post(`${url}/network/ignoreInvitation`, requestIgnore)
      .then(response => {
        console.log("Response recieved: " + JSON.stringify(response));

        dispatch(get_invitations());
      });
  };
}
export function get_allConnections() {
  console.log("Action started on get connections request");
  return dispatch => {
    console.log("Action started on get connections request");
    axios.get(`${url}/network/getAllConnections`).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.GET_ALL_CONNECTIONS,
        payload: response.data
      });
    });
  };
}
