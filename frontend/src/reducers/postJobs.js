import {POST_JOBS} from "../Const/index";
var postJobs_initialstate = {
    status: "",
    msg: "",
    token: ""
};

export default function (state = {},action)
{
    switch(action.type)
    {
        case POST_JOBS:
            return {
                ...state,
                data : action.payload
            };

        default:
            return {
                ...state
            }
    }

}