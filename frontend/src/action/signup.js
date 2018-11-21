import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;
export function signup(values) {
  return dispatch => {
    console.log("Action started on Singup request", JSON.stringify(values));
   
    axios.post(`${url}/signup`, values).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.SIGNUP_SUCCESS,
        payload: response.data
      });
    });
  };
}
