var signin_initialstate ={
    status:"",
    msg:"",
    token:""
}
export default function(state=signin_initialstate,action){
    
    if(action.type === "SIGNIN_RESULT"){
        return{
            ...state,
            status:action.payload.status,
            msg:action.payload.msg,
            token:action.payload.token       
        }
    }
    if(action.type === "SIGNIN_ERROR"){
        return{
            ...state,
            status:"error",
            msg:action.payload.msg,
            token:""        
        }
    }
    if(action.type === "LOGOUT"){
        return{
            ...state,
            status:"",
            msg:"",
            token:""
                 
        }
    }
    return state;
}