import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function postJobsAction(values) {

    return dispatch => {
        //alert("values : " + JSON.stringify(values));
        console.log("Action started JobPost request", JSON.stringify(values));

        axios.post(`${url}/postJob`,values).then( response => {
            alert("values : " + JSON.stringify(values));
                if (response.status === 200) {
                    dispatch({
                        type: CONST.POST_JOBS,
                        payload: response.data
                    })
                    console.log("Post Jobs Completed");
                }
            }
        );


    }
}