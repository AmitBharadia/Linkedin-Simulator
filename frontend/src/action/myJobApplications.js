import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function myJobApplicationsAction(values) {

    return dispatch => {
        console.log("Action started myJobApplications request", JSON.stringify(values));


        axios.get(`${url}/myJobApplications`,{params: {id: values}}).then( response => {

                if (response.status === 200) {
                    dispatch({
                        type: CONST.MY_JOB_APPLICATIONS,
                        payload: response.data.msg
                    })
                    console.log("myJobApplications Completed");
                }
            }
        );


    }
}