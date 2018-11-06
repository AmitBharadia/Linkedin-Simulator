import axios from 'axios';

var url = "http://localhost:3020/";

export function SignUp(data){
    return  dispatch => {
        axios.post(url+"signup", data)
          .then(function (response) {
            return dispatch({ type : "SIGNUP_RESULT", payload : response.data } )
          })
          .catch(function (error) {
            return dispatch({ type : "SIGNUP_ERROR", payload : error } )
          });
         
     }
}