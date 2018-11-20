import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;

export function profile(values){
    console.log("Trying inside dispatch of profilr")
    return dispatch=>{
        console.log("Action started on Profile request",JSON.stringify(values));
        axios.put(`${url}/profile/updateprofile`,values)
            .then(response=>{
                console.log("Response received on the update profile side",JSON.stringify(response.data));
                dispatch({
                    type:CONST.PROFILE,
                    payload:response.data
                })

                alert("Profile updated successfully");
                window.location.reload();
            })
    }
}

export function getprofile(){
    console.log("Trying to get the details of profile from actions");
    return dispatch=>{
        console.log("Action started in dispatch of get profile")
        axios.get(`${url}/profile/getprofile`)
            .then(response=>{
                console.log("Resposne received on the get side of profife",JSON.stringify(response.data));
                dispatch({
                    type:CONST.PROFILE,
                    payload:response.data
                })
                console.log("Status Code: ",response.status);
               

            })
    }
}