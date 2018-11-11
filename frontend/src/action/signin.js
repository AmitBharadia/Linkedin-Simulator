import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;
export function signIn(values) {
  return dispatch => {
    console.log("Action started on Sigin request", JSON.stringify(values));
    axios.post(`${url}/signin`, values).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: CONST.SIGNIN_SUCCESS,
        payload: response.data
      });
      // console.log("Get state : " + JSON.stringify(getState()));
    });
  };
}
