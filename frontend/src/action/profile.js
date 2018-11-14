import axios from "axios";
import * as CONST from "../Const/index";
var url = CONST.ROOT_URL;

export function profile(values){
    console.log("Trying inside dispatch of profilr")
    return dispatch=>{
        console.log("Action started on Profile request",JSON.stringify(values));
        axios.put(`${url}/updateprofile`,values)
            .then(response=>{
                console.log("Response received on the update profile side",JSON.stringify(response.data));
                // dispatch({
                //     type:CONST.PROFILE,
                //     payload:response.da
                // })

                alert("Profile updated successfully");
            })
    }
}