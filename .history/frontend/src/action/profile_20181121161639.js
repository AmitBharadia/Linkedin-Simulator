import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;

export function profile(values) {
  console.log("Trying inside dispatch of profilr");
  if (localStorage.getItem("id") && values) {
    values["id"] = localStorage.getItem("id");
    return dispatch => {
      console.log("Action started on Profile request", JSON.stringify(values));
      axios.put(`${url}/profile/updateprofile`, values).then(response => {
        console.log(
          "Response received on the update profile side",
          JSON.stringify(response.data)
        );
        dispatch({
          type: CONST.PROFILE,
          payload: response.data
        });
        alert("Profile updated successfully");
        window.location.reload();
      });
    };
  } else {
    alert("No id in local storage");
  }
}

export function getprofile(value) {
  console.log("Trying to get the details of profile from actions");
  return dispatch => {
    console.log("Action started in dispatch of get profile");
    if (localStorage.getItem("id")) {
      axios
        .get(`${url}/profile/getprofile`, { params: value })
        .then(response => {
          console.log(
            "Resposne received on the get side of profife",
            JSON.stringify(response.data)
          );
          dispatch({
            type: CONST.PROFILE,
            payload: response.data
          });
          console.log("Status Code: ", response.status);
        });
    } else {
      alert(" ID not set. Please signin");
    }
  };
}
