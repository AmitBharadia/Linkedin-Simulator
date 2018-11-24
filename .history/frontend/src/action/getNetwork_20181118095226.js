import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;
export function get_recommendation() {
  return dispatch => {
    console.log("Action started on Singup request", JSON.stringify(values));
    axios.post(`${url}/signup`, values).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data.auth));
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: CONST.SIGNUP_SUCCESS,
        payload: response.data.auth
      });
    });
  };
}
