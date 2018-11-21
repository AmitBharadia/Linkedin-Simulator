import axios from "axios";
import * as CONST from "../Const/index";

var url = CONST.ROOT_URL;
axios.defaults.withCredentials = true;

export function INIT() {
  return dispatch => {
    axios.get(`${url}/save`).then(response => {
      
        //console.log("Response recieved: " + JSON.stringify(response.data));
     
      dispatch({
        type: CONST.SAVED_JOBS_SUCCESS,
        payload: response.data
      });
    }).catch( (error)=>{
        dispatch({ type: CONST.SAVED_JOBS_ERROR , payload:error })
    } )
  };
}



