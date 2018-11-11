import POST_JOBS from "../Const/index";

export default function (state,action)
{
    switch(action.type)
    {
        case POST_JOBS:
            return {
                data : action.payload
            }
    }

}