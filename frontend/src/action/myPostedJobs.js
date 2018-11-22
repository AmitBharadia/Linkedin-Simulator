import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function myPostedJobsAction(values) {

    return dispatch => {
        console.log("Action started myPostedJobs request", JSON.stringify(values));


        axios.get(`${url}/myPostedJobs`,{params: {id: values}}).then( response => {

                if (response.status === 200) {
                    dispatch({
                        type: CONST.MY_POSTED_JOBS,
                        payload: response.data.msg
                    })
                    console.log("myPostedJobs Completed");
                }
            }
        );


    }
}