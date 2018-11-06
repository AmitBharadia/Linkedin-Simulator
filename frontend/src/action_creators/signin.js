import axios from 'axios';

var url = "http://localhost:3020/";

export function SignIn(data){
    return  dispatch => {
        axios.post(url+"signin", data)
          .then(function (response) {
            console.log(response.data);
            return dispatch({ type : "SIGNIN_RESULT", payload : response.data } )
          })
          .catch(function (error) {
            return dispatch({ type : "SIGNIN_ERROR", payload : error } )
          });
         
     }
}