var profile_initialstate={
    status:"",
    msg:"",
    profile:{}
}

export default function(state=profile_initialstate,action){

    if(action.type==='PROFILE'){
        return{
            ...state,
            status:action.payload.status,
            msg:action.payload.msg,
            profile:action.payload.profile
        }
    }
    return state;
}