import axios from "axios";
import * as CONST from "../Const/index";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

axios.defaults.withCredentials = true;
export function fillApplication(value,history) {
  return dispatch => {
    console.log("Action started on fill Application request request");
    // axios
    //   .get(`${CONST.ROOT_URL}/search-people`, { params: value })
    //   .then(response => {
    //     console.log("Response recieved: " + JSON.stringify(response.data));

    //     dispatch({
    //       type: CONST.SEARCH_PEOPLE_SUCCESS,
    //       payload: response.data
    //     });
    //     history.push("/search-people")
    //   });
  };
}