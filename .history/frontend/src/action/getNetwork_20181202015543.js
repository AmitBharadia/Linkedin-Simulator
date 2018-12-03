import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

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
        alert(response.data.msg);
        dispatch(get_recommendation());
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
        dispatch(get_connections_count());
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
export function get_connections_count() {
  return dispatch => {
    console.log("Action started on get connections count request");
    axios.get(`${url}/network/getConnectionCount`).then(response => {
      console.log(response);
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.GET_CONNECTIONS_COUNT,
        payload: response.data
      });
    });
  };
}
export function removeConnection(removeConn) {
  return dispatch => {
    console.log("Action started on remove connection request");
    axios.post(`${url}/network/removeConnection`, removeConn).then(response => {
      console.log("Response recieved: " + JSON.stringify(response));

      dispatch(get_allConnections());
      dispatch(get_connections_count());
    });
  };
}
