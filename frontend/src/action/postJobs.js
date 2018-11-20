import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function postJobsAction(values) {

    return dispatch => {
        var object = {};
        values.forEach(function(value, key){
            object[key] = value;
        });
        alert("Action Values:" + JSON.stringify(object));
        console.log("Action started JobPost request", JSON.stringify(values));


        axios.post(`${url}/postJob`,values).then( response => {
            alert("response : " + JSON.stringify(response));
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