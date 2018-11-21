import axios from "axios";
import * as CONST from "../Const/index";

export function logout() {
  return dispatch => {
    console.log("Action started on dummy request");
    dispatch({
      type: "LOGOUT",
      payload: ""
    });
  };
}
