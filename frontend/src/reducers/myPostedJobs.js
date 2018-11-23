import {MY_POSTED_JOBS} from "../Const/index";

export default function (state = {},action)
{
    switch(action.type)
    {
        case MY_POSTED_JOBS:
            return action.payload;

        default:
            return {
                ...state
            }
    }

}