import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;
export function get_recommendation() {
  return dispatch => {
    console.log("Action started on get recommendation request");
    axios.post(`${url}/network/getRecommendations`).then(response => {
      console.log("Response recieved: " + JSON.stringify(response.data));

      dispatch({
        type: CONST.SIGNUP_SUCCESS,
        payload: response.data.auth
      });
    });
  };
}
