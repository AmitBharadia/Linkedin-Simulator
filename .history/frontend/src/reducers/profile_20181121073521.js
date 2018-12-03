var profile_initialstate={
    status:"",
    msg:"",
    profile:{}
}

export default function(state=profile_initialstate,action){

    if(action.type==='PROFILE'){
        console.log("In reducer of profile")
        return{
            ...state,
            status:action.payload.status,
            msg:action.payload.msg,
            profile:action.payload
        }
    }


    return state;
}