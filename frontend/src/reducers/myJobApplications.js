import {MY_JOB_APPLICATIONS} from "../Const/index";

export default function (state = {},action)
{
    switch(action.type)
    {
        case MY_JOB_APPLICATIONS:
            return action.payload;

        default:
            return {
                ...state
            }
    }

}