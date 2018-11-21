import axios from "axios";
import * as CONST from "../Const/index";

var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function INIT() {
  return dispatch => {
    axios.get(`${url}/getAllJobs`).then(response => {
      
        //console.log("Response recieved: " + JSON.stringify(response.data));
     
      dispatch({
        type: CONST.JOB_SEARCH_SUCCESS,
        payload: response.data
      });
    }).catch( (error)=>{
        dispatch({ type: CONST.JOB_SEARCH_ERROR , payload:error })
    } )
  };
}

export function SAVE( job_uuid , recruiter_id , position ,company , location) {

  return dispatch => {
    axios.post(`${url}/save`, { job_uuid ,recruiter_id , position ,company , location }).then(response => {
      
        console.log("Response recieved: " + JSON.stringify(response.data));
     
      dispatch({
        type: CONST.JOB_SAVE_SUCCESS,
        payload: response.data
      });
    }).catch( (error)=>{
        dispatch({ type: CONST.JOB_SAVE_ERROR , payload:error })
    } )
  };


     
}


