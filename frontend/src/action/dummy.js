import axios from "axios";
import * as CONST from "../Const/index";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

axios.defaults.withCredentials = true;
export function dummy() {
  return dispatch => {
    console.log("Action started on dummy request");
    axios.get(`${CONST.ROOT_URL}/dummy`).then(response => {
      console.log("request completed");
    });
  };
}
